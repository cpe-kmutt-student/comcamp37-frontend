"use client"

import InfiniteCarousel from "@/components/landing/InfiniteCarousel";
import Image from "next/image";
import {motion} from "motion/react";

function HeroSection() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
            <div className="absolute w-full h-screen flex flex-col items-center justify-center align-middle gap-3 z-10">
                <div className="w-full max-w-[340px] drop-shadow-xl drop-shadow-black/70">
                    <Image
                        className=""
                        src="/Comcamp-Logo.png"
                        alt="Comcamp 37 Logo"
                        width={800}
                        height={800}
                        priority
                    />
                </div>
                <div className="text-center font-medium px-10 py-6 rounded-4xl -mt-3
                    backdrop-blur-sm

                bg-gradient-to-b from-black/30 to-black/20
                border border-white/20

                shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_8px_10px_-6px_rgba(0,0,0,0.1),_inset_0_1px_0_0_rgba(0,0,0,0.5),_inset_0_0_20px_0_rgba(0,0,0,0.05)]
                ">
                    <span className="drop-shadow-sm drop-shadow-black text-lg">
                        ขอเชิญน้อง ๆ ที่สนใจด้านคอมพิวเตอร์ ร่วมเปิดประสบการณ์การเรียนรู้กับ ComCamp ครั้งที่ 37<br/>
                        ค่ายที่จะพาน้อง ๆ มาค้นหาและปลดล็อกศักยภาพด้านวิศวกรรมคอมพิวเตอร์ ผ่านกิจกรรมและเวิร์กชอปที่ทั้งสนุกและได้ความรู้<br/>
                        พร้อมสัมผัสชีวิตนักศึกษาวิศวะคอมฯ อย่างใกล้ชิด กับเพื่อน ๆ และพี่ ๆ CPE<br/>
                        การผจญภัยครั้งใหม่กำลังรออยู่ แล้วพบกันใน ComCamp ครั้งที่ 37
                    </span>
                </div>
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white w-full max-w-[340px] flex items-center justify-center gap-3 h-15 px-4 rounded-xl shadow-lg shadow-black/50 cursor-pointer"
                >
                    <span className="text-black font-bold text-xl leading-15.5 tracking-tight font-zootopia h-full">
                        Coming Soon
                    </span>
                </motion.button>
            </div>
            <div className="absolute w-full overflow-y-visible h-screen">
                <div className="absolute w-full h-screen overflow-y-visible overflow-x-clip pt-40 z-2">
                    <div className="rotate-10 py-20 scale-120 overflow-hidden origin-center">
                        <InfiniteCarousel/>
                    </div>
                </div>

                <div className="absolute w-full h-screen z-1">
                    <div className="bg-gradient-to-t from-theme-primary-darken to-transparent h-[20%] w-full"></div>
                    <div className="bg-theme-primary-darken h-[60%] w-full"></div>
                    <div className="bg-gradient-to-b from-theme-primary-darken to-transparent h-[40%] w-full"></div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection