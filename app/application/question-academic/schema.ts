import { z } from "zod";

export const questionAcademicSchema = z.object({
    question1: z.string().min(1, "กรุณาตอบคำถาม"),
    question201: z.string().min(1, "กรุณาตอบคำถาม"),
    question202: z.string().min(1, "กรุณาตอบคำถาม"),
    question203: z.string().min(1, "กรุณาตอบคำถาม"),
});