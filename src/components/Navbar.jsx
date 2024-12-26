import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import logo from "../assets/logo.jpeg";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Top Section: Phone and Email */}
      {!isSticky && (
        <div className="w-full px-3 py-4 text-sm text-white bg-black">
          <div className="container flex justify-end gap-3 mx-auto items-right">
            <span className="flex gap-2">
              <IoLogoWhatsapp className="text-lg" /> PHONE: 91-808599475
            </span>
            <span> EMAIL: swastikconstruction545@gmail.com</span>
          </div>
        </div>
      )}

      {/* Sticky Navbar */}
      <header
        className={`fixed w-full z-20 transition-all duration-300 ease-in-out ${
          isSticky
            ? "bg-white text-black shadow-md top-0"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container relative flex items-center justify-between px-4 py-3 mx-auto">
          {/* Logo */}
          <div className={`text-4xl font-bold transition-all`}>
            <img src={logo} alt="Logo" className="h-20 w-44" />
          </div>

          {/* Navigation */}
          <nav className="flex mt-5 space-x-10">
            <Link to="/" className="text-base font-semibold hover:underline">
              HOME
            </Link>
            <a href="#about" className="hover:underline">
              ABOUT
            </a>
            <a href="#projects" className="hover:underline">
              PROJECTS
            </a>
            <a href="#blog" className="hover:underline">
              BLOG
            </a>
            <Link
              to="/gallery"
              className=" hover:underline"
            >
              GALLERY
            </Link>
            <a href="#contact" className="hover:underline">
              CONTACT
            </a>
          </nav>

          {/* Contact Info */}
          <div className="items-center hidden mt-5 space-x-4 md:flex">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <a href="https://www.instagram.com/swastik_constructions_?igsh=YTRseXllYTFoMjVh">
                <IoLogoInstagram />
              </a>
            </span>
            <span>
              <IoLogoYoutube />
            </span>
            <span>
              <IoLogoWhatsapp />
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
