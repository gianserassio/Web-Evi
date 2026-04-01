import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const mensaje = formData.get("mensaje") as string;

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "evangelinarost9@gmail.com",
    subject: `Nuevo mensaje de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
