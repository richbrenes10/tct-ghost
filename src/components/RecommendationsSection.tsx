import type React from "react";

type CareItem = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

type CareGroup = {
  eyebrow: string;
  title: string;
  items: CareItem[];
};

function LineIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accentDark">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </span>
  );
}

const careGroups: CareGroup[] = [
  {
    eyebrow: "Antes",
    title: "Prepara tu cita",
    items: [
      {
        title: "Hidratate",
        text: "Bebe suficiente agua antes de tu cita para ayudar a tu piel y a tu recuperacion.",
        icon: (
          <LineIcon>
            <path d="M8 4h8l-1 16H9L8 4Z" />
            <path d="M9 9h6" />
            <path d="M10 13h4" />
          </LineIcon>
        ),
      },
      {
        title: "Come bien",
        text: "No llegues con el estomago vacio. Una comida balanceada ayuda a mantener tu energia estable.",
        icon: (
          <LineIcon>
            <path d="M7 4v8" />
            <path d="M5 4v4a2 2 0 0 0 4 0V4" />
            <path d="M15 4v16" />
            <path d="M15 4c2.5 1.6 3.5 4.5 2 7" />
          </LineIcon>
        ),
      },
      {
        title: "Descansa",
        text: "Dormir bien mejora tu tolerancia y hace mas comoda la sesion.",
        icon: (
          <LineIcon>
            <path d="M18 17H6a6 6 0 0 0 9.5-7" />
            <path d="M14 4h4l-4 5h4" />
          </LineIcon>
        ),
      },
      {
        title: "Evita alcohol y drogas",
        text: "No consumas sustancias al menos 24 horas antes. Pueden afectar el resultado y la cicatrizacion.",
        icon: (
          <LineIcon>
            <path d="M8 3h4v5l-3 4v8h6v-8l-3-4V3" />
            <path d="M6 20h12" />
            <path d="m5 5 14 14" />
          </LineIcon>
        ),
      },
    ],
  },
  {
    eyebrow: "Despues",
    title: "Cuida tu tatuaje",
    items: [
      {
        title: "Limpieza suave",
        text: "Lava la zona con cuidado y seca sin frotar para no irritar la piel.",
        icon: (
          <LineIcon>
            <path d="M7 14c0 3 2 5 5 5s5-2 5-5c0-3-5-9-5-9s-5 6-5 9Z" />
            <path d="M9.5 14.5c.5 1.3 1.4 2 2.7 2.1" />
          </LineIcon>
        ),
      },
      {
        title: "No rasques",
        text: "No desprendas costras. La paciencia conserva linea, sombra y detalle.",
        icon: (
          <LineIcon>
            <path d="M8 11v-1a2 2 0 0 1 4 0v1" />
            <path d="M6 11h12v9H6z" />
            <path d="M12 15v2" />
          </LineIcon>
        ),
      },
      {
        title: "Protege la pieza",
        text: "Evita sol, piscina, sauna, friccion y ropa ajustada mientras cicatriza.",
        icon: (
          <LineIcon>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6l-7-3Z" />
            <path d="m9 12 2 2 4-5" />
          </LineIcon>
        ),
      },
    ],
  },
  {
    eyebrow: "Sesion",
    title: "Extras que ayudan",
    items: [
      {
        title: "Llega a tiempo",
        text: "El tiempo reservado permite preparar el stencil, la zona y el proceso con calma.",
        icon: (
          <LineIcon>
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v5l3 2" />
          </LineIcon>
        ),
      },
      {
        title: "Aclara tus dudas",
        text: "Comparte ideas, referencias, zona del cuerpo y cualquier detalle importante antes de empezar.",
        icon: (
          <LineIcon>
            <path d="M12 19h.01" />
            <path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-.9.7-1.7 1.3-1.7 2.7" />
            <circle cx="12" cy="12" r="9" />
          </LineIcon>
        ),
      },
      {
        title: "Confia en el proceso",
        text: "El sombreado, los brillos y los negros se construyen por capas para lograr volumen.",
        icon: (
          <LineIcon>
            <path d="M4 14c4-7 12-7 16 0" />
            <path d="M7 14c3 4 7 4 10 0" />
            <circle cx="12" cy="14" r="2" />
          </LineIcon>
        ),
      },
    ],
  },
];

export function RecommendationsSection() {
  return (
    <section id="recommendations" className="px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-accentDark">Recomendaciones</p>
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">Antes y después de tatuarte</h2>
          <p className="text-base leading-7 text-black/65 sm:text-lg">
            Preparar la piel, descansar y cuidar la cicatrizacion ayuda a que la pieza conserve fuerza y detalle.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {careGroups.map((group) => (
            <article key={group.title} className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-accentDark">{group.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-black text-ink">{group.title}</h3>
              <div className="mt-6 space-y-5">
                {group.items.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    {item.icon}
                    <div>
                      <h4 className="text-sm font-black text-ink">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-black/65">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
