"use client"

import Image from "next/image";
import {motion} from "motion/react";

function AboutSection() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center">
            <div className="flex flex-col md:flex-row w-full max-w-[1600px] justify-evenly">
                <div className="w-full h-screen flex flex-col items-start justify-center align-middle gap-15 z-10 md:max-w-180 p-5 md:p-10 lg:p-20">
                    <div className="font-zootopia text-5xl hidden md:block">
                        About
                    </div>
                    <div className="font-zootopia text-5xl md:hidden flex-row flex items-center justify-center gap-3 w-full">
                        <div className="h-1.5 w-full flex-1 bg-linear-to-l from-white to-transparent"></div>
                        <div>
                        About
                        </div>
                        <div className="h-1.5 w-full flex-1 bg-linear-to-r from-white to-transparent"></div>
                    </div>
                    <div className="w-full max-w-80 mx-auto md:mx-0 p-5 lg:hidden">
                        <Image
                            className=""
                            src="/Landing/Callcenter.png"
                            alt=""
                            width={800}
                            height={800}
                            priority
                        />
                    </div>
                    <span className="text-white font-medium text-lg text-center md:text-left">
                        ComCamp คือ โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น จัดโดยภาควิชาวิศวกรรมคอมพิวเตอร์ มจธ. โดยภายในค่าย น้อง ๆ จะได้เรียนรู้พื้นฐานด้านคอมพิวเตอร์ผ่านกิจกรรมอันสนุกที่หลากหลาย พร้อมกับการแนะแนวทางการศึกษาต่อในสายวิศวกรรมคอมพิวเตอร์
                        <br/>เปิดโลกมุมมองใหม่ ๆ ผ่านการเรียนรู้ลงมือปฏิบัติและสร้าง
                        <br/>แรงบันดาลใจ ให้ค้นพบตัวเองและรู้จักโลกของ
                        <br/>วิศวกรรมคอมพิวเตอร์มากยิ่งขึ้น
                    </span>

                </div>

                <div className="w-[40%] h-screen flex-col items-center justify-center align-middle gap-3 z-10 max-w-180 hidden lg:flex">
                    <div className="w-full p-10 lg:p-20">
                        <Image
                            className=""
                            src="/Landing/Callcenter.png"
                            alt=""
                            width={800}
                            height={800}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSection