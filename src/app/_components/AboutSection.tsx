import React from "react";
import ellepse from "../../../public/illus (1).png";
import Image from "next/image";

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
    title: "Connecting Destinations with GCC",
  },

  {
    id: 2,
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
    title: "Building powerful partnerships",
  },

  {
    id: 3,
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
    title: "Driving World Class Travel Growth",
  },

  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path
            fill="currentColor"
            d="M19.71 2.837c.733.147 1.306.72 1.453 1.453a3.56 3.56 0 0 1-.773 2.995l-2.751 3.252l1.944 7.131a1.25 1.25 0 0 1-.322 1.213l-1.302 1.302a1.01 1.01 0 0 1-1.597-.224l-2.942-5.296l-2.858 2.381l.21 1.053a1.25 1.25 0 0 1-.341 1.13L8.767 20.89a1.01 1.01 0 0 1-1.617-.263L5.89 18.11l-2.516-1.26a1.01 1.01 0 0 1-.263-1.617l1.664-1.664a1.25 1.25 0 0 1 1.129-.341l1.053.21l2.381-2.857l-5.296-2.943a1.01 1.01 0 0 1-.224-1.597L5.12 4.739a1.25 1.25 0 0 1 1.213-.322l7.13 1.944l3.253-2.751a3.56 3.56 0 0 1 2.995-.773Zm-.492 1.945a1.56 1.56 0 0 0-1.211.354l-3.65 3.089a1.01 1.01 0 0 1-.918.203L6.226 6.46l-.067.066l5.195 2.886a1.01 1.01 0 0 1 .285 1.53L8.115 15.17a1.01 1.01 0 0 1-.974.344l-1.237-.247l-.408.408l1.557.779a1.1 1.1 0 0 1 .492.492l.78 1.557l.407-.408l-.247-1.237a1.01 1.01 0 0 1 .344-.974l4.229-3.524a1.01 1.01 0 0 1 1.53.285l2.885 5.195l.066-.067l-1.967-7.213a1.01 1.01 0 0 1 .204-.918l3.088-3.65c.285-.337.412-.777.354-1.211Z"
          />
        </g>
      </svg>
    ),
    title: "Representing Destinations with Excellence",
  },
];
const AboutSection = () => {
  return (
    <section id="about" className="containe  py-16">
      <div>
        <h2 className="font-bold text-[32px] md:text-[40px] text-center mb-12 text-black">
          About Us
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ===== النصوص والبطاقات ===== */}
        <div>
          <h3 className="font-medium text-2xl sm:text-3xl md:text-[32px] text-text leading-snug">
            The power of connections and content localization.
          </h3>

          <p className="text-base sm:text-lg md:text-2xl mt-3 leading-relaxed text-gray-700">
            Based in the heart of the region, we are more than just
            facilitators; we are your strategic partners. With TBM, you gain not
            just a service provider, but a dedicated extension of your team in
            the GCC.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            {card.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 text-black bg-text h-[160px] sm:h-[180px] md:h-[196px] rounded-[16px]"
              >
                <div className="flex flex-col justify-center items-center gap-2 w-full px-2">
                  <div className="text-[18px] sm:text-[22px] md:text-[25px] w-[50px] sm:w-[55px] md:w-[60px] h-[50px] sm:h-[55px] md:h-[60px] rounded-full bg-secondary flex justify-center items-center">
                    {item.icon}
                  </div>
                  <p className="text-sm sm:text-base md:text-[20px] text-center leading-[28px] sm:leading-[32px] md:leading-[36px] px-[8px] sm:px-[10px]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== الصورة ===== */}
        <div>
          <Image
            src={ellepse}
            alt="background"
            className="w-full h-full object-contain "
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
