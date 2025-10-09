import React from "react";
import Image from "next/image";
import ourVision from "../../../public/vision/260062cf77def51622a0196efb6297b037bc7889.jpg";
import ourMision from "../../../public/vision/5037fd44a7c4e954f86f6ac6a95a70a178fb4f0f.jpg";
import ourValues from "../../../public/vision/c7c5856a79ac998aed4df298a2bea721e823edf5.jpg";

const Drives = [
  {
    id: 1,
    backGroundImage: ourVision,
    title: "Our Vision",
    description:
      "To be the bridge connecting global destinations with the GCC for growth and exceptional experiences.",
  },
  {
    id: 2,
    backGroundImage: ourMision,
    title: "Our Mission",
    description:
      "We empower tourism boards with access to trusted GCC partners, driving growth and visibility.",
  },
  {
    id: 3,
    backGroundImage: ourValues,
    title: "Our Values",
    description:
      "Trust. Transparency. Collaboration. Building lasting partnerships that drive real impact.",
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
