"use client"

import * as React from "react"
import Image from "next/image";
import { usePathname } from 'next/navigation';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faFacebookSquare, faInstagram, faTiktok} from "@fortawesome/free-brands-svg-icons";


function Footer() {
    const pathname = usePathname();
    const isLandingPage = pathname === '/';
    return (
        <div id={`contact`} className='w-full border-t-7 border-theme-secondary flex flex-col justify-center items-center align-middle bg-theme-primary-darken'>
            <div className="w-full max-w-[1600px] bg-theme-primary-darken flex-col flex gap-y-10 md:grid grid-rows-2 grid-cols-2 md:gap-5 pt-10 pb-20 relative p-20">
                <div className="row-span-2 col-span-1 flex flex-col gap-10">
                    <div className="font-zootopia text-4xl">Social Media</div>
                    <div className="text-xl xl:text-2xl flex flex-col gap-3">
                        <a href={`https://www.facebook.com/KMUTTcomcamp/`} target="_blank" className="hover:underline underline-offset-3"><FontAwesomeIcon icon={faFacebookSquare} /> Comcamp KMUTT</a>
                        <a href={`https://www.instagram.com/comcamp.kmutt/`} target="_blank" className="hover:underline underline-offset-3"><FontAwesomeIcon icon={faInstagram} /> @comcamp.kmutt</a>
                        <a href={`https://www.tiktok.com/@comcamp.kmutt`} target="_blank" className="hover:underline underline-offset-3"><FontAwesomeIcon icon={faTiktok} /> @comcamp.kmutt</a>
                    </div>
                </div>
                <div className="row-span-1 col-span-1 flex flex-col gap-5">
                    <div className="font-zootopia text-4xl">Address</div>
                    <div className="pl-2 xl:text-lg">
                        ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์<br/>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ชั้น 10 อาคารวิศววัฒนะ<br/>เลขที่ 126 ถ.ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140
                    </div>
                </div>
                <div className="row-span-1 col-span-1 flex flex-col gap-5">
                    <div className="font-zootopia text-4xl">Contanct</div>
                    <div className="pl-2 xl:text-lg">
                        พี่โดนัท : 093 370 7960<br/>
                        พี่เกน : 062 594 1597<br/>
                        พี่กร : 093 529 9514<br/>
                        พี่ไทม์ : 098 287 0453
                    </div>
                </div>

            </div>

            <div className="w-full max-w-[1600px] bg-theme-primary-darken relative ">
                <div className="h-50 w-50 absolute bottom-0 right-0 hidden md:block">
                    <Image
                        src="/gooseNick.png"
                        alt="Comcamp 37 Logo"
                        fill
                        priority
                    />
                </div>
                <div className="w-full text-center p-3 text-sm leading-5 text-slate-500">
                    ©2026 ComCamp37. All rights reserved.<br className="md:hidden"/> Made with 🧡 by CPE39.
                </div>
            </div>

        </div>
    )
}

export {Footer}
