"use client"

import Image from "next/image";
import {motion} from "motion/react";
import {FootTrail, FootTrailColor} from "@/components/landing/FootTrail";

function ConditionSection() {
    return (
        <div className='w-full min-h-screen bg-theme-primary-darken relative flex flex-col justify-end items-center'>

            <div className="top-0 flex flex-col justify-center align-middle items-center w-full max-w-[1600px] h-full p-3 md:p-20 z-10 gap-5">

                <div className="font-zootopia text-5xl max-w-[1600px] w-full mb-10 hidden md:block">
                    Condition
                </div>

                <div className="font-zootopia text-5xl md:hidden flex-row flex items-center justify-center gap-3 w-full">
                    <div className="h-1.5 w-full flex-1 bg-linear-to-l from-white to-transparent"></div>
                    <div>
                        Condition
                    </div>
                    <div className="h-1.5 w-full flex-1 bg-linear-to-r from-white to-transparent"></div>
                </div>

                <div className="md:h-[180px] xl:w-[75%] backdrop-blur-sm rounded-4xl flex flex-col md:flex-row align-middle items-center self-center md:self-start lg:w-full

                    bg-gradient-to-b from-[#1F456E]/30 to-[#1F456E]/20
                    border border-white/20

                    shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_8px_10px_-6px_rgba(0,0,0,0.1),_inset_0_1px_0_0_rgba(0,0,0,0.5),_inset_0_0_20px_0_rgba(0,0,0,0.05)]"
                >
                    <div className="md:w-[320px] relative">
                        <Image src="/Landing/Conditions/Condition_1.png" alt="" width={600} height={320} className="object-cover p-[10px] rounded-4xl"/>
                    </div>
                    <div className="text-center flex-1 font-semibold text-xl p-5">น้อง ๆ ที่กำลังศึกษาอยู่ชั้นมัธยมศึกษาปีที่ 4 - 5 <br/>(ปีการศึกษา 2569) หรือเทียบเท่า(GPAX 3.00 ขึ้นไป)</div>
                </div>

                <div className="md:h-[180px] xl:w-[75%] backdrop-blur-sm rounded-4xl flex flex-col md:flex-row align-middle items-center self-center xl:self-end lg:w-full

                    bg-gradient-to-b from-[#151E3D]/30 to-[#151E3D]/20
                    border border-white/20

                    shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_8px_10px_-6px_rgba(0,0,0,0.1),_inset_0_1px_0_0_rgba(0,0,0,0.5),_inset_0_0_20px_0_rgba(0,0,0,0.05)]"
                >
                    <div className="text-center flex-1 font-semibold text-xl p-5 order-2 md:order-1">สามารถเข้าพักได้ในระยะเวลาและสถานที่ที่กำหนด<br/>ตลอดโครงการ</div>
                    <div className="md:w-[320px] relative order-1 md:order-2">
                        <Image src="/Landing/Conditions/Condition_2.png" alt="" width={600} height={320} className="object-cover p-[10px] rounded-4xl"/>
                    </div>
                </div>

                <div className="md:h-[180px] xl:w-[75%] backdrop-blur-sm rounded-4xl flex flex-col md:flex-row align-middle items-center self-center md:self-start xl:mx-30 lg:w-full

                    bg-gradient-to-b from-[#151E3D]/30 to-[#151E3D]/20
                    border border-white/20

                    shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_8px_10px_-6px_rgba(0,0,0,0.1),_inset_0_1px_0_0_rgba(0,0,0,0.5),_inset_0_0_20px_0_rgba(0,0,0,0.05)]"
                >
                    <div className="md:w-[320px] relative">
                        <Image src="/Landing/Conditions/Condition_3.png" alt="" width={600} height={320} className="object-cover p-[10px] rounded-4xl"/>
                    </div>
                    <div className="text-center flex-1 font-semibold text-xl p-5">มีความสนใจในด้านคอมพิวเตอร์และภาควิชาวิศวกรรมคอมพิวเตอร์<br/>โดยไม่จำเป็นต้องมีพื้นฐานการเขียนโปรแกรม</div>
                </div>

                <div className="md:h-[180px] xl:w-[75%] backdrop-blur-sm rounded-4xl md:rounded-4xl flex flex-col md:flex-row align-middle items-center self-center xl:self-end xl:mx-30 lg:w-full

                    bg-gradient-to-b from-[#4C3B33]/30 to-[#4C3B33]/20
                    border border-white/20

                    shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_8px_10px_-6px_rgba(0,0,0,0.1),_inset_0_1px_0_0_rgba(0,0,0,0.5),_inset_0_0_20px_0_rgba(0,0,0,0.05)]"
                >
                    <div className="text-center flex-1 font-semibold text-xl p-5 order-2 md:order-1">ผู้ปกครองอนุญาตและยินยอมให้นักเรียนเข้าร่วมโครงการ</div>
                    <div className="md:w-[320px] relative order-1 md:order-2">
                        <Image src="/Landing/Conditions/Condition_4.png" alt="" width={600} height={320} className="object-cover p-[10px] rounded-4xl"/>
                    </div>
                </div>

            </div>
            <div className="absolute w-full">
                <FootTrailColor/>
            </div>
        </div>
    )
}
export default ConditionSection