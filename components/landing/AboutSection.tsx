"use client"

import Image from "next/image";
import {motion} from "motion/react";

function AboutSection() {
    return (
        <div className="min-h-screen flex flex-row justify-center">
            <div className="flex flex-row w-full max-w-[1600px] justify-evenly">
                <div className="w-full h-screen flex flex-col items-start justify-center align-middle gap-15 z-10 max-w-180 p-20">
                    <div className="font-zootopia text-5xl">
                        About
                    </div>
                    <span className="text-white font-medium text-lg">
                        ComCamp คือ โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น จัดโดยภาควิชาวิศวกรรมคอมพิวเตอร์ มจธ. โดยภายในค่าย น้อง ๆ จะได้เรียนรู้พื้นฐานด้านคอมพิวเตอร์ผ่านกิจกรรมอันสนุกที่หลากหลาย พร้อมกับการแนะแนวทางการศึกษาต่อในสายวิศวกรรมคอมพิวเตอร์
                        <br/>เปิดโลกมุมมองใหม่ ๆ ผ่านการเรียนรู้ลงมือปฏิบัติและสร้าง
                        <br/>แรงบันดาลใจ ให้ค้นพบตัวเองและรู้จักโลกของ
                        <br/>วิศวกรรมคอมพิวเตอร์มากยิ่งขึ้น
                    </span>

                </div>

                <div className="w-[40%] h-screen flex flex-col items-center justify-center align-middle gap-3 z-10 max-w-180 ">
                    <div className="w-full p-20">
                        <Image
                            className=""
                            src="/Landing/Callcenter.png"
                            alt="Comcamp 37 Logo"
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