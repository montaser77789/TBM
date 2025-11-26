"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // const links = [
  //   { id: 1, title: "Home", url: "#home" },
  //   { id: 2, title: "About Us", url: "#about" },
  //   { id: 3, title: "Culture", url: "#vision" },
  //   { id: 4, title: "TBM Consultants", url: "#advisory" },
  //   { id: 5, title: "Services", url: "#services" },
  //   { id: 6, title: "Expertise", url: "#numbers" },
  // ];

  const links = [
    { id: 1, title: "Home", url: "#home" },
    { id: 2, title: "About", url: "#about" },
    { id: 3, title: "Services", url: "#services" },
    { id: 4, title: "Expertise", url: "#numbers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] border-b border-primary py-3 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0d0d]/95   shadow-lg"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* ========= Logo ========= */}
        <div className="flex items-center min-w-[80px] md:min-w-[100px]">
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            className="w-[60px] md:w-[80px] h-auto object-contain"
            priority
          />
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
            className="bg-primary text-nowrap text-white font-bold py-2 px-6 rounded-xl hover:bg-[#FFD700] hover:text-black transition"
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
                  <Link href={link.url} onClick={() => setIsOpen(false)}>
                    {link.title}
                  </Link>
                </li>
              ))}
              <a href="#contact" rel="noopener noreferrer">
                <button className="bg-primary text-nowrap text-white font-bold py-2 px-6 rounded-xl hover:bg-[#FFD700] hover:text-black transition">
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
