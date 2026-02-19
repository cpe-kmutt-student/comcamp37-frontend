"use client"

import Image from "next/image";
import { motion } from "motion/react";
import FolderSwitcher from "@/components/landing/LearningSwitcher";
import {Variants} from "motion";

function LearningSection() {
    // 1. Variants สำหรับหัวข้อ (เด้งออกมาแบบ Pop)
    const titleVariants:Variants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -2 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { type: "spring", stiffness: 200, damping: 12 }
        }
    };

    // 2. Variants สำหรับแถบสี (รูดออกมาจากซ้าย)
    const barVariants:Variants = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: "100%",
            opacity: 1,
            transition: { duration: 0.8, ease: "circOut" }
        }
    };

    // 3. Variants สำหรับตัว FolderSwitcher (ค่อยๆ ขยายจากล่างขึ้นบน)
    const contentVariants:Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", bounce: 0.4, duration: 1 }
        }
    };

    return (
        <motion.div
            className="flex flex-col w-full align-middle justify-center items-center overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* --- Mobile Title --- */}
            <motion.div
                variants={titleVariants}
                className="font-zootopia text-5xl md:hidden flex-row flex items-center justify-center gap-3 w-full my-5"
            >
                <div className="h-1.5 w-full flex-1 bg-linear-to-l from-white to-transparent"></div>
                <div className="text-center">
                    What you<br/>will learn
                </div>
                <div className="h-1.5 w-full flex-1 bg-linear-to-r from-white to-transparent"></div>
            </motion.div>

            {/* --- Desktop Folder Tab Design --- */}
            <div className="flex flex-row w-full">
                {/* แถบพื้นหลังด้านซ้ายสุด */}
                <motion.div variants={contentVariants}
                    className="bg-theme-primary-darken flex-1 h-[50px] self-end origin-left"
                ></motion.div>

                <div className="flex flex-row max-w-[1600px] w-full">
                    <motion.div variants={contentVariants} className="flex-3 flex flex-row w-full h-[50px] self-end">
                        {/* แถบใน Container */}
                        <div
                            className="bg-theme-primary-darken w-full origin-left"
                        ></div>

                        <div className="flex flex-col">
                            {/* ส่วนสามเหลี่ยมมุมตัด (Corner) */}
                            <div
                                className="overflow-hidden inline-block w-0 h-0 border-solid border-t-[50px] border-r-0 border-l-[50px] border-b-0 border-l-theme-primary-darken border-r-transparent border-t-transparent border-b-transparent"
                            ></div>
                        </div>
                    </motion.div>

                    {/* หัวข้อกลาง (Desktop) */}
                    <motion.div
                        variants={titleVariants}
                        className="flex-5 font-zootopia text-5xl text-center px-20 py-6 hidden md:block whitespace-nowrap"
                    >
                        What you will learn
                    </motion.div>

                    <div className="flex-6 md:hidden"></div>
                </div>
                <div className="flex-1"></div>
            </div>

            {/* --- เนื้อหาด้านล่าง (Switcher) --- */}
            <motion.div variants={contentVariants} className="w-full">
                <FolderSwitcher/>
            </motion.div>
        </motion.div>
    )
}

export default LearningSection;