import { Router } from "express";
import { z } from "zod/v4";

const router = Router();

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
});

router.post("/contact", async (req, res) => {
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: "Invalid request", details: result.error.issues });
    return;
  }

  const { name, email, company, service, message } = result.data;

  req.log.info({ name, email, service }, "New contact form submission");

  res.status(200).json({
    success: true,
    message: "Thank you for your message. We will get back to you within 24 hours.",
  });
});

export default router;
