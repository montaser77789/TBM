import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, company, email, Phone, subject } = body;

    // إعداد النقل (SMTP Transport)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ====== الإيميل المرسل إليك ======
    const adminMail = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${Phone}</p>
        <p><strong>Message:</strong><br/>${subject}</p>
      `,
    };

    // ====== رسالة الشكر للعميل ======
    const thankYouMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Your Submission!",
      html: `
        <div style="font-family: 'Arial', sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 12px;">
          <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 30px; text-align: center;">
            <h2 style="color: #00cafc;">Thank You, ${name}!</h2>
            <p style="color: #48b7d6; font-size: 16px; line-height: 1.6;">
              We’ve received your message and our team is reviewing it carefully.
              <br/>
              You can expect to hear from us within <strong>24 hours</strong>.
            </p>
            <div style="margin-top: 20px;">
              <p style="color: #555;">Best regards,</p>
              <p style="color: #fcc300; font-weight: bold;">The TBM Management Team</p>
            </div>
            <div style="margin-top: 30px; font-size: 12px; color: #999;">
              <p>This message was sent automatically. Please do not reply.</p>
            </div>
          </div>
        </div>
      `,
    };

    // إرسال الإيميلين
    await transporter.sendMail(adminMail);
    await transporter.sendMail(thankYouMail);

    return Response.json({
      success: true,
      message: "Emails sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, message: "Error sending email." },
      { status: 500 }
    );
  }
}
