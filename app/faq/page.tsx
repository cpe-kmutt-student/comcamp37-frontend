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
        question: "ถาม",
        answer: "ตอบ",
    },
    {
        id: "2",
        question: "ถาม",
        answer: "ตอบ",
    },
    {
        id: "3",
        question: "ถาม",
        answer: "ตอบ",
    },
    {
        id: "4",
        question: "ถาม",
        answer: "ตอบ",
    },
    {
        id: "5",
        question: "ถาม",
        answer: "ตอบ",
    },
    {
        id: "6",
        question: "ถาม",
        answer: "ตอบ",
    },
    {
        id: "7",
        question: "ถาม",
        answer: "ตอบ",
    }
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