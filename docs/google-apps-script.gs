const SHEET_NAME = "Citas";
const CALENDAR_NAME = "Cita";
const DRIVE_FOLDER_NAME = "Referencias citas Ghost";
const CALENDAR_LINK = "https://calendar.google.com/calendar/u/0?cid=a29oYW9zZGNmZWNxY2xwOWRrN203czZvam9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet();
    const folder = getFolder();

    const referenceLinks = saveFiles(folder, data.references || [], "referencia");
    const signatureLinks = data.signature ? saveFiles(folder, [{ name: "firma.png", type: "image/png", data: data.signature }], "firma") : [];
    const event = createCalendarEvent(data, referenceLinks, signatureLinks);

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.instagram || "",
      data.tattooIdea || "",
      data.bodyPart || "",
      data.appointmentDate || "",
      data.appointmentTime || "",
      data.durationHours || "",
      data.style || "",
      data.emergencyContact || "",
      data.message || "",
      data.consent ? "Si" : "No",
      referenceLinks.join("\n"),
      signatureLinks.join("\n"),
      event ? event.getId() : "",
    ]);

    sendClientEmail(data, event);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActive();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Fecha de envío",
      "Nombre",
      "Correo",
      "Teléfono",
      "Instagram",
      "Idea",
      "Parte del cuerpo",
      "Fecha cita",
      "Hora",
      "Duración horas",
      "Estilo",
      "Contacto emergencia",
      "Mensaje",
      "Consentimiento",
      "Referencias Drive",
      "Firma Drive",
      "Evento Calendar",
    ]);
  }

  return sheet;
}

function getFolder() {
  const folders = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(DRIVE_FOLDER_NAME);
}

function saveFiles(folder, files, prefix) {
  return files.map(function(file, index) {
    const parts = String(file.data || "").split(",");
    const base64 = parts.length > 1 ? parts[1] : parts[0];
    const bytes = Utilities.base64Decode(base64);
    const extension = getExtension(file.name, file.type);
    const safeName = `${prefix}-${Date.now()}-${index + 1}.${extension}`;
    const blob = Utilities.newBlob(bytes, file.type || "application/octet-stream", safeName);
    const savedFile = folder.createFile(blob);
    savedFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return savedFile.getUrl();
  });
}

function getExtension(name, type) {
  if (name && name.indexOf(".") >= 0) return name.split(".").pop();
  if (type === "image/png") return "png";
  if (type === "image/webp") return "webp";
  return "jpg";
}

function createCalendarEvent(data, referenceLinks, signatureLinks) {
  const calendar = CalendarApp.getCalendarsByName(CALENDAR_NAME)[0];
  if (!calendar || !data.appointmentDate || !data.appointmentTime) return null;

  const start = new Date(`${data.appointmentDate}T${data.appointmentTime}:00`);
  const duration = Number(data.durationHours || 2);
  const end = new Date(start.getTime() + duration * 60 * 60 * 1000);
  const title = `Cita Ghost - ${data.name || "Cliente"}`;
  const description = [
    `Cliente: ${data.name || ""}`,
    `Correo: ${data.email || ""}`,
    `Teléfono: ${data.phone || ""}`,
    `Instagram: ${data.instagram || ""}`,
    `Idea: ${data.tattooIdea || ""}`,
    `Zona: ${data.bodyPart || ""}`,
    `Estilo: ${data.style || ""}`,
    `Mensaje: ${data.message || ""}`,
    `Referencias: ${referenceLinks.join(" | ")}`,
    `Firma: ${signatureLinks.join(" | ")}`,
  ].join("\n");

  const event = calendar.createEvent(title, start, end, {
    location: "C.C. Prisa zona 10",
    description,
    guests: data.email || "",
    sendInvites: true,
  });

  return event;
}

function sendClientEmail(data, event) {
  if (!data.email) return;

  const subject = "Solicitud de cita recibida - Ghost Tattoo";
  const eventInfo = event
    ? `Tu cita quedó registrada para revisión en el calendario.\n\nCalendario: ${CALENDAR_LINK}`
    : "Recibimos tu solicitud. Edgar revisará la disponibilidad y te confirmará por mensaje.";

  const message = [
    `Hola ${data.name || ""},`,
    "",
    "Recibimos tus datos para la cita con Ghost.",
    eventInfo,
    "",
    "Resumen:",
    `Fecha: ${data.appointmentDate || ""}`,
    `Hora: ${data.appointmentTime || ""}`,
    `Idea: ${data.tattooIdea || ""}`,
    "",
    "Instagram: @tattoosby_ghost",
  ].join("\n");

  GmailApp.sendEmail(data.email, subject, message);
}
