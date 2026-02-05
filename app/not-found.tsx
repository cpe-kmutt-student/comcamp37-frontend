"use client"

import { motion, Variants } from "motion/react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

export default function NotFoundPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // ไล่ลำดับการแสดงผลให้ดูดึ๋งๆ ต่อเนื่อง
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.6, // เพิ่มค่า bounce ให้ดูเด้งๆ Cartoony มากขึ้น
                duration: 0.8,
            },
        },
    };

    return (
        <div className='flex flex-col items-center justify-center h-dvh px-15 overflow-hidden'> {/* เพิ่มสีพื้นหลังจางๆ นิดหน่อยถ้าต้องการ */}
            <motion.div
                className='z-20 flex flex-col w-full max-w-[340px] items-center text-center mx-5'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                <motion.h1
                    variants={itemVariants}
                    className="text-8xl font-black text-orange-500 drop-shadow-sm mb-2 font-(family-name:Roboto)"
                >
                    404
                </motion.h1>

                <motion.p variants={itemVariants} className="text-white mb-6 font-bold text-xl">
                    อ้าว! หาหน้านี้ไม่เจอแฮะ 🙃
                </motion.p>

                    <motion.a
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        whileTap={{ scale: 0.95 }}
                        href={`/`}
                        className="z-20 group bg-orange-500 hover:bg-orange-600 w-full flex items-center justify-center gap-3 h-13 md:h-15 px-4 rounded-xl shadow-lg cursor-pointer transition-colors"
                    >
                        <FontAwesomeIcon icon={faHome}/>

                        <span className="text-white font-bold md:text-lg md:leading-15.5 leading-13.5 tracking-tight font-(family-name:Roboto) h-full">
                            กลับสู่หน้าหลัก
                        </span>
                    </motion.a>

            </motion.div>
        </div>
    );
}