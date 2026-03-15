import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY no configurada");
  return new Resend(key);
}

export async function POST(request: Request) {
  const destinatario =
    process.env.RESEND_TEST_EMAIL ?? process.env.CONTACTO_EMAIL;
  if (!destinatario) {
    return NextResponse.json(
      { error: "Servicio de contacto no configurado." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { nombre, email, asunto, mensaje } = body as {
      nombre?: string;
      email?: string;
      asunto?: string;
      mensaje?: string;
    };

    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return NextResponse.json(
        { error: "Faltan nombre, email o mensaje." },
        { status: 400 }
      );
    }

    const subject = asunto?.trim() || `Contacto web: ${nombre.trim()}`;
    const html = `
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Asunto:</strong> ${escapeHtml(asunto || "—")}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(mensaje).replace(/\n/g, "<br>")}</p>
    `;

    const from =
      process.env.RESEND_FROM ?? process.env.RESEND_TEST_EMAIL ?? "onboarding@resend.dev";

    const payload = {
      from,
      to: destinatario,
      replyTo: email,
      subject,
      html,
      ...(process.env.RESEND_BCC && { bcc: [process.env.RESEND_BCC] }),
    };
    const { error } = await getResend().emails.send(payload);

    if (error) {
      console.error("Resend error:", error);
      const message =
        typeof error === "string"
          ? error
          : error?.message ?? JSON.stringify(error);
      return NextResponse.json(
        { error: `No se pudo enviar el mensaje. ${message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
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
