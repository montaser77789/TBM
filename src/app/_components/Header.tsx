"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/favicon.png";
import Image from "next/image";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, title: "Home", url: "#home" },
    { id: 2, title: "About", url: "#about" },
    { id: 3, title: "Vision", url: "#vision" },
    { id: 4, title: "Services", url: "#services" },
    { id: 5, title: "Our Expertise", url: "#numbers" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000]  backdrop-blur-md border-b border-primary py-3">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* ========= Logo Placeholder ========= */}
        <div className="text-2xl font-extrabold text-primary tracking-wide">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </div>

        {/* ========= Desktop Menu ========= */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-white text-nowrap font-semibold text-lg hover:text-[#FFD700] transition duration-300"
            >
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* ========= Button ========= */}
        <div className="hidden md:block">
          <a
            href="#contact"
            rel="noopener noreferrer"
            className="bg-primary text-nowrap text-black font-bold py-2 px-6 rounded-xl hover:bg-[#FFD700] hover:text-black transition"
          >
            Contact Us
          </a>
        </div>

        {/* ========= Mobile Menu Icon ========= */}
        <div className="md:hidden text-white text-2xl cursor-pointer z-[1001]">
          {isOpen ? (
            <FaTimes onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* ========= Mobile Menu ========= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-0 left-0 w-full bg-[#1E1E1E] border-t border-primary py-6 z-[999]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul className="flex flex-col items-center gap-6 py-4">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="text-white font-semibold text-lg hover:text-[#FFD700] transition"
                >
                  <a href={link.url} onClick={() => setIsOpen(false)}>
                    {link.title}
                  </a>
                </li>
              ))}
              <a href="#contact" rel="noopener noreferrer">
                <button className="bg-primary text-nowrap text-black font-bold py-2 px-6 rounded-xl hover:bg-[#FFD700] hover:text-black transition">
                  Contact Us
                </button>
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
