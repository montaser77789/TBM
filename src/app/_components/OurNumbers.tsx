import React from "react";

const card = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        viewBox="0 0 576 512"
      >
        <path
          fill="currentColor"
          d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120m8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4c15.8-6.3 32.9 5.3 32.9 22.3v270.8c0 9.8-6 18.6-15.1 22.3L416 503zm-278.4-62.1c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6v251.4L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77v249.3l-192-54.9V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0M288 152a40 40 0 1 0 0-80a40 40 0 1 0 0 80"
        />
      </svg>
    ),
    title: "GCC Markets Deep Regional Insights",
    number: "+6",
  },

  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M3.4 18L2 16.6l7.4-7.45l4 4L18.6 8H16V6h6v6h-2V9.4L13.4 16l-4-4z"
        />
      </svg>
    ),
    title: "Years of Travel & Tourism Expertise",
    number: "+20",
  },

  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M341.333 42.667c70.693 0 128 54.292 128 121.263q0 30.083-12.208 63.25l-34.12-34.026c2.069-8.638 3.258-16.943 3.575-24.907l.087-4.317c0-42.876-37.705-78.597-85.334-78.597c-16.237 0-31.658 4.17-44.915 11.775l-59.732 57.571c-8.331 8.331-8.331 21.838 0 30.169c8.331 8.332 21.839 8.332 30.17 0l57.896-60.211l29.04 29.432l82.37 82.364c24.994 24.994 24.994 65.517 0 90.51c-7.998 7.998-17.586 13.437-27.746 16.316l-1.055.274c4.479 20.576-1.28 42.932-17.276 58.928c-16.465 16.465-39.669 22.083-60.733 16.855c-2.891 9.893-8.279 19.013-16.137 26.173c-22.449 20.456-55.242 22.352-79.798 4.414l-3.782-3.284l-16.611-14.899Q42.666 276.306 42.666 163.93c0-66.972 57.308-121.263 128.001-121.263c32.792 0 62.704 11.682 85.351 30.893c22.63-19.218 52.533-30.893 85.315-30.893M170.667 85.333c-47.629 0-85.334 35.721-85.334 78.597c0 59.965 50.908 139.989 156.18 236.028l9.58 8.597c8.44 8.515 24.062 15.111 33.143 6.355c8.248-7.954 7.404-19.021.935-27.226l-13.168-13.434l-49.297-49.296l-.907-.797l30.528-30.549l44.188 44.823l16.7 16.693a62 62 0 0 1 3.265 3.528l10.659 10.86c11.108 11.109 24.879 11.521 33.21 3.19s8.068-22.251-3.04-33.36l-51.024-51.772l-23.942-23.957l30.165-30.187l15.433 15.439a65 65 0 0 1 4.5 4.098l19.455 19.887l23.927 23.923c8.331 8.331 21.838 8.331 30.169 0c8.332-8.331 8.332-21.838 0-30.17l-80.296-80.278l-28.67 28.693c-24.994 24.994-65.516 24.994-90.51 0c-24.993-24.993-24.993-65.516 0-90.509l19.959-19.976l-2.059-1.628c-15.021-11.26-33.772-17.572-53.749-17.572"
        />
      </svg>
    ),
    title: "Partnerships Built Across the Industry",
    number: "+100",
  },
];
export default function OurNumbers() {
  return (
    <section
      id="numbers"
      className="py-16 containe"
      style={{
        background: "linear-gradient(135deg, #00cafc 0%, #fcc300 100%)",
      }}
    >
      <div>
        <h2 className="font-bold text-[32px] md:text-[40px] text-center mb-12 text-black">
          Shaping the Future of GCC Tourism.
        </h2>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 ">
          {card.map((item, index) => {
            // Check if it's the middle card
            const isMiddle = index === 1;

            return (
              <div
                key={item.id}
                className={`rounded-[16px] shadow-lg py-10 px-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105
                ${
                  isMiddle
                    ? "bg-[#00cafc] text-white"
                    : "bg-white text-[#22677A]"
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`w-[60px] h-[60px] rounded-lg flex items-center justify-center text-[28px] mb-4 transition
                  ${
                    isMiddle
                      ? "bg-white text-[#00cafc]"
                      : "bg-[#00cafc] text-white"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Number */}
                <p
                  className={`text-[36px] sm:text-[44px] md:text-[48px] font-bold leading-tight ${
                    isMiddle ? "text-white" : "text-[#22677A]"
                  }`}
                >
                  {item.number}
                </p>

                {/* Title */}
                <p
                  className={`mt-2 text-sm sm:text-base md:text-lg leading-snug px-2 ${
                    isMiddle ? "text-white/90" : "text-[#22677A]"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
