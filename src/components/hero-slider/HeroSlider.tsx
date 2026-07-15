'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import HeroSection from './HeroSection';
import HeroSectionTwo from './HeroSectionTwo';
import HeroSectionThree from './HeroSectionThree';

export default function HeroSlider() {
    const slides = [
        { id: 1, component: <HeroSection /> },
        { id: 2, component: <HeroSectionTwo /> },
        { id: 3, component: <HeroSectionThree /> },
    ];

    return (

        <div className="w-full min-h-[75vh] md:h-screen bg-[#060b19] overflow-hidden relative">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoHeight={false}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                className="w-full h-full bg-[#060b19]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="w-full h-full bg-[#060b19] overflow-hidden">
                        <div className="w-full h-full bg-[#060b19]">
                            {slide.component}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}