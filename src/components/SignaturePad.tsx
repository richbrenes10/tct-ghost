"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

type Point = {
  x: number;
  y: number;
};

type SignaturePadProps = {
  onChange?: (signature: string) => void;
};

export function SignaturePad({ onChange }: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef<Point | null>(null);
  const [hasSignature, setHasSignature] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    contextRef.current = context;

    const resizeCanvas = () => {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      const rect = canvas.getBoundingClientRect();
      const currentSignature = hasSignature ? canvas.toDataURL("image/png") : null;

      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.lineCap = "round";
      context.lineJoin = "round";
      context.lineWidth = 2.6;
      context.strokeStyle = "#171717";
      context.clearRect(0, 0, rect.width, rect.height);

      if (currentSignature) {
        const image = new Image();
        image.onload = () => {
          context.drawImage(image, 0, 0, rect.width, rect.height);
        };
        image.src = currentSignature;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [hasSignature]);

  const getPoint = (event: PointerEvent<HTMLCanvasElement>): Point | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const handlePointerDown = (event: PointerEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    drawingRef.current = true;
    lastPointRef.current = getPoint(event);
    canvas.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current || !lastPointRef.current || !contextRef.current) return;

    event.preventDefault();
    const point = getPoint(event);
    if (!point) return;

    const context = contextRef.current;
    context.beginPath();
    context.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    context.lineTo(point.x, point.y);
    context.stroke();
    lastPointRef.current = point;
    setHasSignature(true);
    const canvas = canvasRef.current;
    if (canvas) onChange?.(canvas.toDataURL("image/png"));
  };

  const stopDrawing = (event: PointerEvent<HTMLCanvasElement>) => {
    drawingRef.current = false;
    lastPointRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    drawingRef.current = false;
    lastPointRef.current = null;
    setHasSignature(false);
    onChange?.("");
  };

  return (
    <div className="space-y-3">
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDrawing}
        onPointerLeave={stopDrawing}
        className="h-52 w-full touch-none rounded-[1.5rem] border border-dashed border-black/20 bg-white"
        aria-label="Area de firma digital"
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-black/55">Firma aquí para confirmar la información y el consentimiento informado.</p>
        <button
          type="button"
          onClick={clearSignature}
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-black hover:text-paper"
        >
          Limpiar firma
        </button>
      </div>
    </div>
  );
}
