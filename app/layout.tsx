import type {Metadata} from "next";
import {Geist, Geist_Mono, Noto_Sans_Thai, Bai_Jamjuree, Roboto} from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import {Navbar} from "@/components/ui/navbar";
import {Footer} from "@/components/ui/footer";

const zootopiaFont = localFont({
    variable: "--font-zootopia",
    src: './zootopia-font.woff2',
})

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-roboto",
});

const notoSansThai = Noto_Sans_Thai({
    subsets: ["thai", "latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-noto-sans-thai",
});

const baiJamjuree = Bai_Jamjuree({
    subsets: ["thai", "latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    variable: "--font-bai_jamjuree",
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: '%s | ComCamp37',
        default: 'ComCamp37',
    },
    description: "ค่าย ComCamp37 จากวิศวะคอมฯ บางมด ขอเชิญน้อง ๆ ม.ปลาย มาปลดล็อกสกิลในค่ายสุดเจ๋งที่มาพร้อมกับความรู้และความสนุก สมัครฟรี เตรียมตัวให้พร้อมแล้วมาร่วมผจญภัยไปด้วยกัน!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${notoSansThai.variable} ${zootopiaFont.variable} ${baiJamjuree.variable} ${roboto.variable} font-bai_jamjuree antialiased bg-[#1F456E] dark`} /* bg-[#2D364E] #232C40 */
        >
        {children}
        <Footer/>
        </body>
        </html>
    );
}
