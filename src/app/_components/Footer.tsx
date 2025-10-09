// components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
const links = [
  { id: 1, title: "Home", url: "#home" },
  { id: 2, title: "About", url: "#about" },
  { id: 3, title: "Vision", url: "#vision" },
  { id: 4, title: "Services", url: "#services" },
  { id: 5, title: "Numbers Speak for Us", url: "#numbers" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white py-12 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <h3 className="text-2xl font-bold text-[#00cafc] mb-3">
            T<span className="text-[#48b7d6]">D</span>
            <span className="text-[#fcc300]">M</span>
          </h3>
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
        <div>
          <h4 className="text-[#fcc300] font-semibold mb-4">Contact Info</h4>
          <ul className="text-[#48b7d6] space-y-2">
            <li>12 El-Maadi Street, Cairo, Egypt</li>
            <li>hello@uxified.studio</li>
            <li>+20 111 222 3333</li>
            <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-[#fcc300] font-semibold mb-4">Social Media</h4>
          <ul className="text-[#48b7d6] space-y-3">
            <li className="flex items-center gap-3">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedinIn /> Linkedin
            </li>
            <li className="flex items-center gap-3">
              <FaXTwitter /> X
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
