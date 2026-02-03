"use client"

import Image from "next/image";
import {motion} from "motion/react";

function LearningSection() {
    return (
        <>
            <div className="flex flex-col w-full align-middle justify-center items-center">
                <div className="flex flex-row w-full">
                    <div className="bg-theme-primary-darken flex-1 h-[50px] self-end"></div>
                    <div className="flex flex-row max-w-[1600px] w-full">
                        <div className="flex-3 flex flex-row w-full h-[50px] self-end">
                            <div className="bg-theme-primary-darken w-full"></div>
                            <div className="flex flex-col">
                                <div className="overflow-hidden inline-block w-0 h-0 border-solid border-t-[50px] border-r-0 border-l-[50px] border-b-0 border-l-theme-primary-darken border-r-transparent border-t-transparent border-b-transparent"></div>
                            </div>

                        </div>
                        <div className="flex-5 font-zootopia text-5xl text-center px-20 py-6">What you will learn</div>
                    </div>
                    <div className="flex-1"></div>
                </div>
            </div>

            <div className="flex flex-col w-full min-h-screen bg-theme-primary-darken"></div>
        </>
    )
}
export default LearningSection