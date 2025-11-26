"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

/* ============ Import All Logos ============ */
import logoAbuDhabi from "../../../public/logos/logo_ABU DHABI.png";
import logoAseer from "../../../public/logos/logo_ASEER.png";
import logoBahrain from "../../../public/logos/logo_Bahrain.png";
import logoDubai2 from "../../../public/logos/logo_DUBAI copy.png";
import logoDubai from "../../../public/logos/logo_DUBAI.png";
import logoGermany from "../../../public/logos/logo_GERMANY.png";
import logoHongkong from "../../../public/logos/logo_HONKKONG.png";
import logoMorocco from "../../../public/logos/logo_MOROCCO.png";
import logoQatar from "../../../public/logos/logo_Qatar.png";
import logoEgypt from "../../../public/logos/logo_egypt.png";
import logoManchester from "../../../public/logos/logo_manchester.png";
import logoOman from "../../../public/logos/logo_oman.png";
import logoRasAlKhaimah from "../../../public/logos/logo_ras al khaimah.png";
import logoSaudia from "../../../public/logos/logo_saudia.png";
import logoSingapore from "../../../public/logos/logo_singapore.png";
import logoSpain from "../../../public/logos/logo_spain.png";

/* ============ Logos Array ============ */
const logos = [
  { id: 1, src: logoAbuDhabi },
  { id: 2, src: logoAseer },
  { id: 3, src: logoBahrain },
  { id: 4, src: logoDubai2 },
  { id: 5, src: logoDubai },
  { id: 6, src: logoGermany },
  { id: 7, src: logoHongkong },
  { id: 8, src: logoMorocco },
  { id: 9, src: logoQatar },
  { id: 10, src: logoEgypt },
  { id: 11, src: logoManchester },
  { id: 12, src: logoOman },
  { id: 13, src: logoRasAlKhaimah },
  { id: 14, src: logoSaudia },
  { id: 15, src: logoSingapore },
  { id: 16, src: logoSpain },
];

export default function ExpertsLogosSlider() {
  return (
    <section className="w-full py-10 bg-white">
      <h2 className="font-bold py-10 text-[28px] md:text-[40px] text-center text-black">
        Our Experts have worked with
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={2500}
        loop={true}
        slidesPerView={4}
        spaceBetween={40}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {logos.map((logo) => (
          <SwiperSlide
            key={logo.id}
            className="flex justify-center items-center"
          >
            <div className="w-[120px] h-[100px] flex justify-center items-center">
              <Image
                src={logo.src}
                alt="logo"
                className="object-contain transition"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
