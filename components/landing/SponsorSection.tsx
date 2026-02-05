"use client"

import Image from "next/image";
import {motion} from "motion/react";
import * as React from "react";

function SponsorSection() {
    return (
        <div className='w-full flex flex-col md:min-h-screen justify-center items-center align-middle'>
            <div className="w-full max-w-[1600px] flex flex-col">
                <div className="flex flex-row align-middle justify-center items-center gap-10">
                    <svg width="500" height="5" viewBox="0 0 500 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M500 2.5H0" stroke="url(#paint0_linear_590_593)" strokeWidth="5"/>
                        <defs>
                            <linearGradient id="paint0_linear_590_593" x1="0" y1="3" x2="500" y2="3" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0"/>
                                <stop offset="1" stopColor="white"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="font-zootopia text-5xl">Organizer</div>

                    <svg width="500" height="5" viewBox="0 0 500 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M500 2.5H0" stroke="url(#paint0_linear_590_594)" strokeWidth="5"/>
                        <defs>
                            <linearGradient id="paint0_linear_590_594" x1="0" y1="3" x2="500" y2="3" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white"/>
                                <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>

                </div>

                <div className="flex flex-row justify-center">
                    <Image

                        src="/Landing/Kmutt_CPE.png"
                        alt="KMUTT | CPE"
                        height={429}
                        width={450}
                        priority
                    />
                </div>

            </div>
        </div>
    )
}
export default SponsorSection