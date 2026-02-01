import type {Metadata} from "next";
import {Geist, Geist_Mono, Noto_Sans_Thai} from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const zootopiaFont = localFont({
    variable: "--font-zootopia",
    src: './zootopia-font.woff2',
})

const notoSansThai = Noto_Sans_Thai({
    subsets: ["thai", "latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-noto-sans-thai",
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
            className={`${notoSansThai.variable} ${zootopiaFont.variable} font-sans antialiased bg-[#232E40] dark`} /* bg-[#2D364E] #232C40 */
        >
        {children}
        </body>
        </html>
    );
}
