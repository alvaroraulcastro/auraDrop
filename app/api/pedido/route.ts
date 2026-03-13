import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY no configurada");
  return new Resend(key);
}

export async function POST(request: Request) {
  const destinatario = process.env.CONTACTO_EMAIL;
  if (!destinatario) {
    return NextResponse.json(
      { error: "Servicio de pedidos no configurado." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const {
      nombre,
      email,
      telefono,
      direccion,
      comentarios,
      lineas,
      total,
    } = body as {
      nombre?: string;
      email?: string;
      telefono?: string;
      direccion?: string;
      comentarios?: string;
      lineas?: { nombre: string; cantidad: number; precio: number }[];
      total?: number;
    };

    if (!nombre?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Faltan nombre o email." },
        { status: 400 }
      );
    }

    const lineasHtml =
      lineas?.length &&
      lineas
        .map(
          (l) =>
            `<tr><td>${escapeHtml(l.nombre)}</td><td>${l.cantidad}</td><td>$${Number(l.precio).toLocaleString("es-CL")}</td><td>$${(l.cantidad * l.precio).toLocaleString("es-CL")}</td></tr>`
        )
        .join("") || "";

    const html = `
      <h2>Solicitud de compra - auraDrop</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(telefono || "—")}</p>
      <p><strong>Dirección de envío:</strong></p>
      <p>${escapeHtml(direccion || "—").replace(/\n/g, "<br>")}</p>
      ${comentarios?.trim() ? `<p><strong>Comentarios:</strong> ${escapeHtml(comentarios)}</p>` : ""}
      ${lineasHtml ? `<h3>Resumen del pedido</h3><table border="1" cellpadding="8" cellspacing="0"><thead><tr><th>Producto</th><th>Cant.</th><th>P. unit.</th><th>Subtotal</th></tr></thead><tbody>${lineasHtml}</tbody></table><p><strong>Total: $${Number(total ?? 0).toLocaleString("es-CL")} CLP</strong></p>` : ""}
    `;

    const payload = {
      from: process.env.RESEND_FROM ?? "onboarding@resend.dev",
      to: destinatario,
      replyTo: email,
      subject: `Solicitud de compra - ${nombre.trim()}`,
      html,
      ...(process.env.RESEND_BCC && { bcc: [process.env.RESEND_BCC] }),
    };
    const { error } = await getResend().emails.send(payload);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar la solicitud." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Pedido API error:", e);
    return NextResponse.json(
      { error: "Error al procesar la solicitud." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
