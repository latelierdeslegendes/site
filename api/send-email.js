export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, subject, message } = req.body;

  const fullName = `${firstName} ${lastName}`.trim();

  const html = `
    <div style="font-family: 'Helvetica, Arial, sans-serif'; color: #2a2765; padding: 20px;">
      <h1 style="font-size: 24px; margin-bottom: 20px;">Nouvelle demande de contact</h1>
      ${fullName ? `<p><strong>Nom:</strong> ${fullName}</p>` : ""}
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
      ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ""}
      ${subject ? `<p><strong>Sujet:</strong> ${subject}</p>` : ""}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@latelier-des-legendes.fr",
        to: "contact@latelier-des-legendes.fr",
        subject: `Prise de contact - ${subject}`,
        html,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to send email" });
  }
}
