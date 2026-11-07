import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(80, { message: "Name cannot exceed 80 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(4, { message: "Subject must be at least 4 characters." })
    .max(120, { message: "Subject cannot exceed 120 characters." }),
  projectType: z
    .string()
    .optional(),
  budget: z
    .string()
    .optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(3000, { message: "Message cannot exceed 3000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
