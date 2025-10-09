import Image from "next/image";
import image from "../../../public/contact/c2c0338de365f446993465523a3fde2e67abecfc.jpg";
import vector from "../../../public/contact/Vector.png";
export default function ContactUs() {
  return (
    <section id="contact" className="  bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        <form className="px-4 md:px-8  lg:px-16 py-16">
          <h2 className="font-bold text-[32px] md:text-[40px] text-center mb-12 text-white">
            Contact Us
          </h2>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="name" className="font-bold text-white text-[14px]">
              Name
            </label>
            <input
              className="bg-white rounded-[8px] text-[14px] px-3 py-4 max-w-xl focus:outline-none text-primary"
              type="text"
              placeholder="Name......"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="company" className="font-bold text-white text-[14px]">
              Organization / Company Name
            </label>
            <input
              className="bg-white rounded-[8px] text-[14px] px-3 py-4 max-w-xl focus:outline-none text-primary"
              type="text"
              placeholder="Organization / Company Name......"
              name="company"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email" className="font-bold text-white text-[14px]">
              Email
            </label>
            <input
              className="bg-white rounded-[8px] text-[14px] px-3 py-4 max-w-xl focus:outline-none text-primary"
              type="email"
              placeholder="mohamed15@gmail.com"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="Phone" className="font-bold text-white text-[14px]">
              Phone
            </label>
            <input
              className="bg-white rounded-[8px] text-[14px] px-3 py-4 max-w-xl focus:outline-none text-primary"
              type="tel"
              placeholder="0120457890460"
              name="Phone"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="subject" className="font-bold text-white text-[14px]">
              Subject
            </label>
            <textarea
              className="bg-white rounded-[8px] text-[14px] px-3 py-4 max-w-xl focus:outline-none text-primary"
              rows={6}
              placeholder="You can write whatever you want....."
              name="subject"
            />
          </div>
          <button className="bg-secondary cursor-pointer text-black max-w-xl w-full rounded-[16px] py-[16px] text-[18px] md:text-[22px]">
            Submit
          </button>
        </form>
        <div className="hidden md:block relative">
          <Image src={image} alt="" className="w-full h-full " />
          <Image src={vector} alt="" className="absolute top-0 left-0  h-full" />
        </div>
      </div>
    </section>
  );
}
