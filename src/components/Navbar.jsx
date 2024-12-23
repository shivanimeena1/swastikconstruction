import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll to toggle sticky state
  useEffect(() => {
    const handleScroll = () => {
      // Increase the threshold for when the navbar becomes sticky
      setIsSticky(window.scrollY > 50); // You can adjust this value as needed
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
              <IoLogoWhatsapp className="text-lg" /> PHONE: 91-7247765172
            </span>
            <span> EMAIL: swastikbuilders.in</span>
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
          <div
            className={`${
              isSticky ? "mt-0" : "mt-[-32px]"
            } text-4xl font-bold transition-all duration-300`}
          >
            <img src={logo} alt="Logo" className="h-20 w-44" />
          </div>

          {/* Navigation */}
          <nav className="flex mt-5 space-x-10">
            <a href="#home" className="text-base font-semibold hover:underline">
              HOME
            </a>
            <a href="#about" className="hover:underline">
              ABOUT
            </a>
            <a
              href="#projects"
              className="text-base font-semibold hover:underline"
            >
              PROJECTS
            </a>
            <a href="#blog" className="text-base font-semibold hover:underline">
              BLOG
            </a>
            <a href="#media" className="text-base font-semibold hover:underline">
              MEDIA
            </a>
            <a href="#contact" className="text-base font-semibold hover:underline">
              CONTACT
            </a>
          </nav>

          {/* Contact Info */}
          <div className="items-center hidden mt-5 space-x-4 md:flex">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <IoLogoInstagram className="font-base"/>
            </span>
            <span>
              <IoLogoYoutube />
            </span>
            <span>
              <IoLogoWhatsapp className="font-base text-bold" />
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
