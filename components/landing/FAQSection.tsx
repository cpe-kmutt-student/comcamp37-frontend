"use client"

import Image from "next/image";
import {motion} from "motion/react";
import { useRouter } from 'next/navigation';


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQQuestions = [
    {
        id: "1",
        question: "นักเรียนระดับชั้นอะไรสามารถสมัครได้คะ ?",
        answer: "ชั้นมัธยมศึกษาปีที่ 4 และมัธยมศึกษาปีที่ 5 ในปีการศึกษา 2568 ค่ะ",
    },
    {
        id: "2",
        question: "นักเรียนที่กำลังจะขึ้น ม.6 ในปีการศึกษาหน้า สามารถสมัครได้ไหมคะ ?",
        answer: "สมัครได้ค่ะ โดยการรับสมัครนักเรียนชั้น ม.4 - 5 ในปีการศึกษา 2568 หมายถึง การเปิดรับสมัครนักเรียนที่กำลังจะขึ้นชั้น ม.5 - 6 ในปีการศึกษา 2569 นี้ค่ะ",
    },
    {
        id: "3",
        question: "เรียน ปวช. สามารถสมัครได้ไหมครับ ?",
        answer: "สมัครได้ค่ะ โดยรับนักเรียน ปวช.1 - 2 ปีการศึกษา 2568 ค่ะ",
    },
    {
        id: "4",
        question: "สามารถใช้ใบเกรดในการสมัครแทนเอกสาร ปพ.1 ได้ไหมคะ ?",
        answer: "สามารถใช้แทนได้ค่ะ แต่ต้องเป็นผลการเรียนของภาคปีการศึกษาล่าสุดเท่านั้นนะคะ",
    },
    {
        id: "5",
        question: "สามารถใช้เอกสารใบรับรองการเป็นนักเรียนจากภาคเรียนที่ 1 ได้ไหมคะ ?",
        answer: "ใบรับรองสถานภาพการเป็นนักเรียนมีอายุ 120 วัน นับจากวันที่ออกเอกสาร หากยังอยู่ภายในระยะเวลาดังกล่าวสามารถใช้ได้ค่ะ",
    },
    {
        id: "6",
        question: "สามารถใช้เอกสาร ปพ.1 หรือ ปพ.7 เพียงอย่างใดอย่างหนึ่งในการสมัครหรือจำเป็นต้องใช้ทั้งสองฉบับคะ ?",
        answer: "จำเป็นต้องใช้ทั้งสองฉบับค่ะ",
    },
    {
        id: "7",
        question: "หนังสือขออนุญาตผู้ปกครอง ต้องเตรียมยังไงคะ",
        answer: "น้อง ๆ สามารถโหลดได้ที่เว็บไซต์ค่ายในวันที่เปิดรับสมัครนะคะ (ขออุ้บอิ้บไว้ก่อน><)",
    }
]


function FAQSection() {
    const router = useRouter();
    return (
        <div className='w-full relative overflow-hidden flex flex-row justify-center items-center'>

            <div className="z-20 flex flex-col md:flex-row w-full max-w-[1600px] h-full">
                <div className="flex-1 flex flex-col justify-center items-center p-20">
                    <div className="absolute">
                        <div className="text-4xl font-bold font-zootopia p-40 bg-radial from-theme-primary to-transparent from-20% to-100%">FAQ</div>
                    </div>
                </div>
                <div className="z-20 flex-3 bg-theme-secondary w-full px-5 py-5 md:p-10 md:pl-15 relative">
                    <div className="bg-theme-secondary absolute w-[100vw] h-full origin-top-left top-0 -z-1 text-black"></div>
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-1"
                        className="z-20"
                    >
                        {FAQQuestions.map((question) => (
                            <AccordionItem key={question.id} value={question.id} className="z-20 border-b-2 border-black cursor-pointer">
                                <AccordionTrigger className="text-black font-bold text-lg px-4 hover:no-underline hover:pl-6 [&>svg]:text-black cursor-pointer">{question.question}</AccordionTrigger>
                                <AccordionContent className="text-lg z-20 pr-4 pl-8 text-black">{question.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <button className="text-theme-primary font-bold text-lg relative group pl-5 cursor-pointer" onClick={() => {router.push(`/faq`);}}>
                        <div className="absolute -left-0 transition-all group-hover:left-1.5">{'>'}</div><div>คำถามเพิ่มเติม</div>
                    </button>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full">
            <div className="overflow-hidden h-full flex flex-col justify-end align-middle items-center relative">
                <div
                    className="absolute w-[110dvw] h-[200dvh] rotate-13 origin-left"
                    style={{
                        backgroundColor: "transparent",
                        backgroundImage: `
                            linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px' // This defines the grid density
                    }}
                ></div>
            </div>
            </div>

        </div>
    )
}
export default FAQSection