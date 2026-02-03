"use client"

import * as React from "react"
import Image from "next/image";
import { usePathname } from 'next/navigation';


function Navbar() {
    const pathname = usePathname();
    const isLandingPage = pathname === '/';
    return (
        <div className={`p-3 top-0 w-full ${isLandingPage ? 'fixed' : 'sticky'} flex justify-center font-zootopia z-50`}>
            <nav className="
                flex flex-row h-17 w-full max-w-[1671px] justify-between items-center pl-8
                rounded-4xl overflow-hidden

                backdrop-blur-lg
                bg-gradient-to-b from-white/5 to-white/2
                border border-white/20

                shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_8px_10px_-6px_rgba(0,0,0,0.1),_inset_0_1px_0_0_rgba(255,255,255,0.5),_inset_0_0_20px_0_rgba(255,255,255,0.05)]
            ">
                <div className="h-full flex-1 flex flex-row pt-[2px]">
                    <div className="relative aspect-square cursor-pointer">
                        <Image
                            className="drop-shadow-2xl"
                            src="/Comcamp-Logo.png"
                            alt="Comcamp 37 Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </div>
                <div className="flex flex-2 flex-row gap-x-5 justify-between font-bold text-lg pt-1">
                    <button className="cursor-pointer text-white transition-all duration-300 hover:[text-shadow:_0_0_20px_rgba(235,139,81,0.7)]">About</button>
                    <button className="cursor-pointer text-white transition-all duration-300 hover:[text-shadow:_0_0_20px_rgba(235,139,81,0.7)]">Learning</button>
                    <button className="cursor-pointer text-white transition-all duration-300 hover:[text-shadow:_0_0_20px_rgba(235,139,81,0.7)]">Condition</button>
                    <button className="cursor-pointer text-white transition-all duration-300 hover:[text-shadow:_0_0_20px_rgba(235,139,81,0.7)]">Timeline</button>
                    <button className="cursor-pointer text-white transition-all duration-300 hover:[text-shadow:_0_0_20px_rgba(235,139,81,0.7)]">Contact</button>
                </div>
                <div className="flex-1 flex flex-row justify-end h-full pr-2 py-2 text-lg">
                    <button className="cursor-pointer font-bold px-8 pt-1 bg-transparent transition-all duration-400 border border-white h-full rounded-2xl hover:bg-white hover:text-black">
                        Coming Soon
                    </button>
                </div>
            </nav>
        </div>
    )
}

export {Navbar}
