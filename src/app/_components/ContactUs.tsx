"use client";
import Image from "next/image";
import image from "../../../public/contact/c2c0338de365f446993465523a3fde2e67abecfc.jpg";
import vector from "../../../public/contact/Vector.png";
import { useState, ChangeEvent, FormEvent } from "react";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    Phone: "",
    subject: "",
  });

  const [status, setStatus] = useState("");
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ وهنا كمان
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          company: "",
          email: "",
          Phone: "",
          subject: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong!");
    }
  };
  return (
    <section id="contact" className="  bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        <form onSubmit={handleSubmit} className="px-4 md:px-8 lg:px-16 py-16">
          <h2 className="font-bold text-[32px] md:text-[40px] text-center mb-12 text-white">
            Contact Us
          </h2>

          {["name", "company", "email", "Phone"].map((field) => (
            <div key={field} className="flex flex-col gap-2 mb-4">
              <label className="font-bold text-white text-[14px] capitalize">
                {field === "company"
                  ? "Organization / Company Name"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                className="bg-white rounded-[8px] text-[14px] px-3 py-4 max-w-xl focus:outline-none text-primary"
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="flex flex-col gap-2 mb-4">
            <label className="font-bold text-white text-[14px]">Subject</label>
            <textarea
              className="bg-white rounded-[8px] text-[14px] px-3 py-4 max-w-xl focus:outline-none text-primary"
              rows={6}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-secondary cursor-pointer text-black max-w-xl w-full rounded-[16px] py-[16px] text-[18px] md:text-[22px]"
          >
            Submit
          </button>

          {status && (
            <p className="text-white mt-4 text-sm font-medium">{status}</p>
          )}
        </form>
        <div className="hidden md:block relative">
          <Image src={image} alt="" className="w-full h-full " />
          <Image
            src={vector}
            alt=""
            className="absolute top-0 left-0  h-full"
          />
        </div>
      </div>
    </section>
  );
}
