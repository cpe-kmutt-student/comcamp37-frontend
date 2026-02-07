"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';
import { motion } from "motion/react";

function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const isLandingPage = pathname === '/';

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <motion.div
            initial={{ y: -100, opacity: 1 }} // เริ่มต้น: อยู่ข้างบน -100px และโปร่งใส
            animate={{ y: 0, opacity: 1 }}    // จบที่: ตำแหน่งเดิม และชัดเจน
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // ใช้ Ease curve แบบ Apple style (นุ่มๆ)
            className={`p-3 top-0 w-full ${isLandingPage ? 'sticky md:fixed' : 'sticky'} flex flex-col items-center font-zootopia z-[1000]`}
        >

            {/* --- Main Navbar Bar --- */}
            <nav className="
                relative z-50
                flex flex-row h-17 w-full max-w-[1671px] justify-between items-center pl-6
                rounded-4xl overflow-hidden

                backdrop-blur-lg
                bg-gradient-to-b from-white/5 to-white/2
                border border-white/20

                shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_8px_10px_-6px_rgba(0,0,0,0.1),_inset_0_1px_0_0_rgba(255,255,255,0.5),_inset_0_0_20px_0_rgba(255,255,255,0.05)]
            ">
                {/* Logo */}
                {/* เพิ่ม motion ให้ Logo เด้งเข้ามานิดหน่อย */}
                <div
                    className="h-full flex-1 flex flex-row pt-[2px]"
                >
                    <a className="relative aspect-square cursor-pointer" onClick={() => {
                        router.push('/');
                        closeMenu();
                    }}>
                        <Image
                            className="drop-shadow-lg drop-shadow-black/20"
                            src="/Comcamp-Logo.png"
                            alt="Comcamp 37 Logo"
                            fill
                            sizes="auto"
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </a>
                </div>

                {/* Desktop Links (ซ่อนบน Mobile) */}
                <div className={`${isLandingPage ? 'lg:flex hidden' : 'hidden'} flex-2 flex-row gap-x-5 justify-between font-bold xl:text-lg pt-1`}>
                    {['About', 'Learning', 'Condition', 'Timeline', 'Contact'].map((item, index) => (
                        <a
                            key={item}
                            className="cursor-pointer text-white transition-all duration-300 hover:[text-shadow:_0_0_20px_rgba(235,139,81,0.7)]"
                            href={`#${item.toLowerCase()}`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA (ซ่อนบน Mobile) */}
                <div
                    className="flex-1 flex-row justify-end h-full pr-2 py-2 xl:text-lg hidden lg:flex"
                >
                    <button className="cursor-pointer font-bold px-6 xl:px-8 pt-1 bg-transparent transition-all duration-400 border border-white h-full rounded-2xl hover:bg-white hover:text-black">
                        Coming Soon
                    </button>
                </div>

                {/* Mobile Burger Button (แสดงเฉพาะ Mobile) */}
                <div className="lg:hidden mr-5 flex items-center h-full">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="cursor-pointer font-bold bg-transparent transition-all duration-400 w-8 h-8 flex flex-col justify-center gap-y-1.5 z-50"
                    >
                        {/* Burger Animation Lines */}
                        <span className={`w-8 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-8 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-8 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* --- Mobile Menu Dropdown --- */}
            <div className={`
                absolute top-22 w-[calc(100%-1.5rem)] max-w-[1671px] overflow-hidden transition-all duration-500 ease-in-out
                rounded-3xl lg:hidden
                
                backdrop-blur-lg
                bg-gradient-to-b from-white/10 to-white/5
                border border-white/20
                shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_inset_0_1px_0_0_rgba(255,255,255,0.2)]

                ${isMenuOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'}
            `}>
                <div className="flex flex-col items-center gap-y-6 py-8 font-bold text-xl text-white">
                    {/* Mobile Links */}
                    {isLandingPage && (
                        <>
                            <a onClick={closeMenu} className="hover:text-orange-300 transition-colors" href="#about">About</a>
                            <a onClick={closeMenu} className="hover:text-orange-300 transition-colors" href="#learning">Learning</a>
                            <a onClick={closeMenu} className="hover:text-orange-300 transition-colors" href="#condition">Condition</a>
                            <a onClick={closeMenu} className="hover:text-orange-300 transition-colors" href="#timeline">Timeline</a>
                            <a onClick={closeMenu} className="hover:text-orange-300 transition-colors" href="#contact">Contact</a>
                        </>
                    )}

                    {/* Mobile CTA Button */}
                    <button className="cursor-pointer font-bold px-10 py-3 mt-2 bg-white/10 border border-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300">
                        Coming Soon
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export {Navbar}