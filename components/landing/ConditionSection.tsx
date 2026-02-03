"use client"

import Image from "next/image";
import {motion} from "motion/react";
import FootTrail from "@/components/landing/FootTrail";

function ConditionSection() {
    return (
        <div className='w-full min-h-screen bg-theme-primary-darken relative'>
            <div className="absolute w-full">
                <FootTrail/>
            </div>
        </div>
    )
}
export default ConditionSection