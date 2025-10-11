import React from "react";
import Image from "next/image";
import ourVision from "../../../public/vision/Gemini_Generated_Image_6iw6ee6iw6ee6iw6 (1).png";
import ourMision from "../../../public/vision/Gemini_Generated_Image_6iw6ee6iw6ee6iw6 (2).png";
import ourValues from "../../../public/vision/Gemini_Generated_Image_6iw6ee6iw6ee6iw6.png";

const Drives = [
  {
    id: 1,
    backGroundImage: ourVision,
    title: "Our Vision",
    description:
      "To be the indispensable bridge connecting the world's leading tourism destinations with the dynamic travel market of the GCC, fostering a new era of collaborative growth and unparalleled travel experiences.",
  },
  {
    id: 2,
    backGroundImage: ourMision,
    title: "Our Mission",
    description:
      "To empower tourism boards by providing streamlined access to a qualified and extensive network of GCC partners. We facilitate strategic, mutually beneficial agreements that enhance destination visibility, drive tangible sales growth, and equip local agents with the knowledge they need to succeed.",
  },
  {
    id: 3,
    backGroundImage: ourValues,
    title: "Our Values",
    description:
      "Partnerships, Transparency, Integrity, Global Insights, Local Expertise, Excellence, and Cultural Fluency",
  },
];

export default function OurVision() {
  return (
    <section className="bg-[#4dc2f1] py-16" id="vision">
      <div className="containe ">
        <h2 className="font-bold text-[32px] md:text-[40px] text-center mb-12 text-white">
          What Drives TBM Forward
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Drives.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[16px] overflow-hidden shadow-lg group"
            >
              {/* الخلفية */}
              <Image
                src={item.backGroundImage}
                alt={item.title}
                className="w-full h-[420px] md:h-[505px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* التدرّج الداكن فوق الصورة */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* النصوص فوق الصورة */}
              <div className="absolute bottom-6 left-0 right-0 text-left px-6">
                <h3 className="text-[#fcc300] text-[24px] md:text-[28px] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-[16px] md:text-[18px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
