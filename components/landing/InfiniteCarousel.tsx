'use client';

import Marquee from 'react-fast-marquee';

import Image from 'next/image';

const InfiniteCarousel = () => {
    // ตัวอย่างรูปภาพ - คุณสามารถเปลี่ยนเป็นรูปของคุณเองได้
    const photos1 = [
        { id: 1, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel1_1.jpg`, alt: 'Photo 1' },
        { id: 2, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel1_2.jpg`, alt: 'Photo 2' },
        { id: 3, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel1_3.jpg`, alt: 'Photo 3' },
        { id: 4, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel1_4.jpg`, alt: 'Photo 4' },
        { id: 5, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel1_5.jpg`, alt: 'Photo 5' },
    ];

    const photos2 = [
        { id: 1, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel2_1.jpg`, alt: 'Photo 1' },
        { id: 2, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel2_2.jpg`, alt: 'Photo 2' },
        { id: 3, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel2_3.jpg`, alt: 'Photo 3' },
        { id: 4, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel2_4.jpg`, alt: 'Photo 4' },
        { id: 5, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel2_5.jpg`, alt: 'Photo 5' },
        { id: 6, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel2_6.jpg`, alt: 'Photo 6' },
    ];

    const photos3 = [
        { id: 1, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel3_1.jpg`, alt: 'Photo 1' },
        { id: 2, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel3_2.jpg`, alt: 'Photo 2' },
        { id: 3, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel3_3.jpg`, alt: 'Photo 3' },
        { id: 4, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel3_4.jpg`, alt: 'Photo 4' },
        { id: 5, src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/Landing/Carousel/Carousel3_5.jpg`, alt: 'Photo 5' },
    ];

    return (
        <div className="w-full relative overflow-hidden py-3 border-t-7 border-b-7 border-theme-secondary">
            <div className="absolute w-full h-full flex flex-row justify-between z-30">
                <div className="bg-linear-to-r from-theme-secondary to-transparent to-50% h-full aspect-square absolute"></div>
                <div className="bg-linear-to-l from-theme-secondary to-transparent to-50% h-full aspect-square right-0 absolute"></div>
            </div>
            <div className="space-y-4">

                <Marquee speed={35} gradient={false} autoFill={true} className="blur-[3px]">
                    {photos1.map((photo, index) => (
                        <div
                            key={`row1-${index}`}
                            className="relative ml-3 h-[200px] w-[300px] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={photo.src}
                                alt=""
                                fill
                                sizes="auto"
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    ))}
                </Marquee>

                <Marquee speed={50} gradient={false} autoFill={true} className="blur-[3px]">
                    {photos2.map((photo, index) => (
                        <div
                            key={`row2-${index}`}
                            className="relative ml-3 h-[200px] w-[300px] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={photo.src}
                                alt=""
                                fill
                                sizes="auto"
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    ))}
                </Marquee>

                <Marquee speed={35} gradient={false} autoFill={true} className="blur-[3px]">
                    {photos3.map((photo, index) => (
                        <div
                            key={`row3-${index}`}
                            className="relative ml-3 h-[200px] w-[300px] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={photo.src}
                                alt=""
                                fill
                                sizes="auto"
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default InfiniteCarousel;