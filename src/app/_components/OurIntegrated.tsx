"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MarketImage from "../../../public/OurIntegrated/aa597124f321c15f98ce22ea6e157db626ffbed2.jpg";
import inDesignImage from "../../../public/OurIntegrated/77ad44ce13796c11cf75d2dd964d3c8bec9ae10e.jpg";
import MediaImage from "../../../public/OurIntegrated/promtion.png";
import PerformanceImage from "../../../public/OurIntegrated/Mediaplans.png";
import PerformanceImage2 from "../../../public/OurIntegrated/f41b05f22496c7eeb7d1962624b23ae0b544efe2.jpg";
import FamImage from "../../../public/OurIntegrated/31ffef62c275b398b49b178c833a5fad869edf83.jpg";
import Tripod from "../../../public/OurIntegrated/Tripod.jpg";
import Influencers from "../../../public/OurIntegrated/Influencers.jpg";
import PartnerImage from "../../../public/OurIntegrated/PartnerImage.png";
const cards = [
  {
    id: 1,
    title: "Market Intelligence, and Data Access",
    image: MarketImage,
  },
  {
    id: 2,
    title: "On-ground surveys, and questionnaires",
    image: inDesignImage,
  },
  {
    id: 3,
    title: "Partners Evaluation, and Deck Vetting",
    image: PartnerImage,
  },
  {
    id: 4,
    title: "Media Plans Preparation",
    image: PerformanceImage,
  },
  {
    id: 5,
    title: "Campaigns, and Promotions Monitoring",
    image: MediaImage,
  },
  {
    id: 6,
    title: "Audit and performance Reporting",
    image: PerformanceImage2,
  },
  {
    id: 7,
    title: "Tripod partnerships with corporations",
    image: Tripod,
  },
  {
    id: 8,
    title: "Roadshows, and Networking Events",
    image: Influencers,
  },
  {
    id: 9,
    title: "FAM Trips, and Influencers Marketing",
    image: FamImage,
  },
];

export default function OurIntegrated() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="containe mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-bold text-[28px] md:text-[40px] text-black">
            Our Integrated Growth Solutions
          </h2>
          <div className="flex items-center gap-3">
            <button className="swiper-button-prev-custom cursor-pointer w-[40px] h-[40px] flex justify-center items-center  text-[20px] bg-[#4dc2f1] hover:bg-[#3ab4e6] text-white p-3 rounded-full transition">
              &#10094;
            </button>
            <button className="swiper-button-next-custom cursor-pointer  w-[40px] h-[40px]  flex justify-center items-center text-[20px] bg-[#4dc2f1] hover:bg-[#3ab4e6] text-white p-3 rounded-full transition">
              &#10095;
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="!pb-10 "
        >
          {cards.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#F5F5F5] rounded-[32px] p-[16px] shadow-md hover:shadow-xl transition h-full flex flex-col">
                <div className="bg-[#FFFFFF] rounded-[16px] p-[8px] flex flex-col h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] object-cover rounded-[8px]"
                  />
                  <h3 className="font-semibold text-[20px] md:text-[24px] text-[#4dc2f1] mt-4 text-center leading-snug flex-1 flex items-center justify-center">
                    {item.title.split(" ").length === 2 ||
                    item.title.split(" ").length === 3 ? (
                      <>
                        {item.title.split(" ")[0]} <br />{" "}
                        {item.title.split(" ")[1] +
                          " " +
                          item.title.split(" ")[2]}
                      </>
                    ) : (
                      item.title
                    )}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination color override */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #fcc300;
          opacity: 0.7;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background-color: #4dc2f1;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
