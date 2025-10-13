// components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../../../public/favicon.png";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const links = [
  { id: 1, title: "Home", url: "#home" },
  { id: 2, title: "About", url: "#about" },
  { id: 3, title: "Vision", url: "#vision" },
  { id: 4, title: "Services", url: "#services" },
  { id: 5, title: "Our Expertise", url: "#numbers" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white py-12 containe">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo and Description */}
        <div>
          <Image
            width={120}
            height={300}
            src={logo}
            alt="Logo"
            className="mb-4"
          />
          <p className="text-[#48b7d6] leading-relaxed">
            Your strategic partner in <br />
            unlocking GCC tourism growth
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#fcc300] font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-[#48b7d6]">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="hover:underline transition">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="">
          <h4 className="text-[#fcc300] font-semibold mb-4">Contact Info</h4>
          <ul className="text-[#48b7d6] space-y-2">
            <li>info@tourismboardsmanagement.com</li>
            <li>+966 506854941</li> {/* ← استبدل الرقم لما تبعته */}
            <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
          </ul>
        </div>

        {/* Offices */}
        <div>
          <h4 className="text-[#fcc300] font-semibold mb-4">Offices</h4>
          <ul className="text-[#48b7d6] space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Riyadh
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Dubai
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Cairo
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-[#fcc300] font-semibold mb-4">Social Media</h4>
          <ul className="text-[#48b7d6] space-y-3">
            <li className="flex items-center gap-3">
              <FaFacebookF />
              <a
                href="https://www.facebook.com/thetbmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaInstagram />
              <a
                href="https://www.instagram.com/thetbmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaXTwitter />
              <a
                href="https://x.com/thetbmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaLinkedinIn />
              <a
                href="https://www.linkedin.com/company/tourism-boards-management/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-6 text-center text-[#48b7d6] text-sm">
        © {new Date().getFullYear()} Tourism Boards Management. All rights
        reserved. <br />
      </div>
    </footer>
  );
}
