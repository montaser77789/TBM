"use client";
import Image from "next/image";
import bgHeroSection from "../../../public/assets/futuristic-landscape-dubai.jpg"; // optional

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
        <Image
          src={bgHeroSection}
          alt="background"
          className="w-full h-full object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,0,0,0.55))",
          }}
        />
      </div>

      {/* المحتوى */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* ===== النصوص على اليسار ===== */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left order-1 md:order-none">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            We are more than facilitators —{" "}
            <span style={{ color: "var(--color-primary)" }}>
              we are your strategic partners
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0 mb-8">
            Dedicated to building sustainable relationships based on trust,
            transparency, and a shared passion for promoting world-class travel
            across the GCC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              className="inline-block px-6 py-3 rounded-lg text-black font-semibold shadow hover:shadow-lg transition"
              style={{ backgroundColor: "var(--color-secondary)" }}
              href="#services"
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
