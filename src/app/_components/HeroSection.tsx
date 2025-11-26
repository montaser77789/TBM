"use client";
import Image from "next/image";
import bgHeroSection from "../../../public/assets/futuristic-landscape-dubai.jpg"; // optional
import bgHeroSection2 from "../../../public/assets/3d-cartoon-airplane-sky.jpg"; // optional
import bgHeroSection3 from "../../../public/assets/Gemini_Generated_Image_jvwu63jvwu63jvwu.png"; // optional
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [bgHeroSection, bgHeroSection2, bgHeroSection3];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[600px] md:h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(-135deg, var(--color-primary) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.4) 100%)",
      }}
    >
      {/* خلفية الصورة + التدرج */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          className="absolute inset-0 -z-10"
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[600px] md:h-screen ">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  priority={index === 0}
                  className="object-cover h-[600px] md:h-screen "
                  fill
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* المحتوى */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* ===== النصوص على اليسار ===== */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left order-1 md:order-none">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          Maximise the GCC tourists number to your destination.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              className="inline-block px-6 py-3 rounded-lg text-black font-semibold shadow hover:shadow-lg transition"
              style={{ backgroundColor: "var(--color-secondary)" }}
              href="#contact"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
