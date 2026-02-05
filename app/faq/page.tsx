"use client";

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
        question: "ค่ายเปิดรับสมัครถึงวันไหนคะ",
        answer: "ค่ายเปิดรับสมัครตั้งแต่วันที่ 23 กุมภาพันธ์ - 10 มีนาคม 2568 ค่ะ",
    },
    {
        id: "2",
        question: "ถ้าเรียนเตรียมวิศวะอยู่ สมัครค่ายนี้ได้ไหมครับ",
        answer: "สมัครได้ค่ะ",
    },
    {
        id: "3",
        question: "กรณีเป็นเด็กต่างจังหวัด พอจะมีคำแนะนำในการเดินทางมาค่ายไหมครับ",
        answer:
            "หากน้อง ๆ เดินทางมาจากต่างจังหวัด สามารถเดินทางมาตามจุดนัดพบที่ระบุไว้ในใบสมัครได้เลยค่ะ และในวันเข้าร่วมโครงการ จะมีพี่ ๆ ไปดูแลและอำนวยความสะดวกในการเดินทางค่ะ",
    },
    {
        id: "4",
        question: "รูปแบบการจัดค่ายเป็นแบบ Onsite หรือเปล่าคะ",
        answer:
            "รูปแบบค่ายจัดแบบ Onsite ที่ภาควิชาวิศวกรรมคอมพิวเตอร์ อาคารวิศววัฒนะ (ตึกแดง) ชั้น 10 - 11 มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีค่ะ",
    },
    {
        id: "5",
        question: "ถ้าไม่มีพื้นฐานทางด้านคอมพิวเตอร์ สามารถสมัครได้ไหมครับ",
        answer:
            "เพียงแค่มีความสนใจทางด้านคอมพิวเตอร์ ไม่จำเป็นต้องมีพื้นฐานมาก่อนก็สามารถสมัครได้ค่ะ",
    },
    {
        id: "6",
        question: "ต้องขอเอกสารจากทางโรงเรียนไหมคะ",
        answer:
            "เอกสารที่ต้องขอกับทางโรงเรียน ได้แก่ ปพ.1 (ใบแสดงผลการเรียน) และ ปพ.7 (เอกสารรับรองการเป็นนักเรียน) ค่ะ",
    },
    {
        id: "7",
        question:
            "ในการกรอกเกรดเพื่อทำการสมัครค่าย จะต้องกรอกเกรดเทอมล่าสุด (GPA) หรือเกรดเฉลี่ยสะสม (GPAX) คะ",
        answer: "กรอกเป็นเกรดเฉลี่ยสะสม (GPAX) ค่ะ",
    },
    {
        id: "8",
        question: "ค่ายนี้รับจำนวนกี่คน และสมัครก่อนมีสิทธิ์ก่อนหรือเปล่าคะ",
        answer:
            "80 คนค่ะ โดยจะมีการคัดเลือกจากข้อมูลและการตอบคำถามที่ให้น้อง ๆ ได้ทำการตอบเข้ามา ดังนั้นสมัครก่อนหรือหลังจึงไม่มีผลต่อการพิจารณาค่ะ",
    },
    {
        id: "9",
        question: "ค่ายนี้มีเรียนอะไรบ้างครับ",
        answer:
            "ค่าย Comcamp 37 จะมีการสอนทั้งหมด 3 วิชา ได้แก่ C Programming,... และ Game .... อีกทั้งยังมีการทำมินิโปรเจกต์เพื่อให้น้อง ๆ ได้นำสิ่งที่น้อง ๆ เรียนรู้มาใช้แก้ไขปัญหาร่วมกันภายในค่ายค่ะ",
    },
    {
        id: "10",
        question: "ค่ายนี้ต้องค้างคืนไหมคะ แล้วพักที่ไหนคะ",
        answer:
            "ค่ายนี้จะมีการค้างคืนทั้งหมด 4 คืน โดยจะพักที่หอพักนักศึกษาชายและหญิง (บ้านธรรมรักษา 1 และ 2) ของมหาวิทยาลัย ซึ่งจะมีพี่ ๆ CPE ดูแลตลอด 24 ชั่วโมงค่ะ",
    },
    {
        id: "11",
        question: "ในการเข้าค่ายนี้ จะได้รับเกียรติบัตรไหมครับ",
        answer: "น้อง ๆ ที่เข้าร่วมค่ายนี้จะได้รับเกียรติบัตรจากค่ายค่ะ",
    },
    {
        id: "12",
        question: "ค่ายนี้มีเกณฑ์ในการรับคนอย่างไรบ้างคะ",
        answer:
            "เกณฑ์ในการคัดเลือกจะพิจารณาจากข้อมูลและความถูกต้องในใบสมัคร ประกอบกับพิจารณาจากการตอบคำถามของน้อง ๆ ที่ส่งเข้ามาด้วยค่ะ",
    },
]

export default function Register() {
    return (
      <>
      <div className="flex flex-col justify-center items-center">
        <div className='flex flex-col justify-center w-full items-center pt-16 pb-10 mb-10'>
            <p className='text-8xl mb-4'>FAQ</p><p className='text-neutral-700'>Frequently Asked Question</p>
        </div>
        {/* 1 ก้อน */}
        <div className="z-20 flex-3 bg-theme-secondary w-full px-5 py-5 md:p-10 md:pl-15 relative">
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
        </div>
        </div>
        
    </>
    );
}