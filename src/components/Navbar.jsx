import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import logo from "../assets/logo.jpeg";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
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
        <div className="w-full px-3 py-3 text-white bg-gradient-to-r from-[#fa9a5a] to-[#ca7411]">

          <div className="container flex flex-col justify-between gap-3 mx-auto md:flex-row">
            <span className="flex gap-2 text-center md:text-left">
              <TbBrandWhatsappFilled className="text-2xl text-white" /> PHONE:
              91-808599475
            </span>
            <span className="flex items-center gap-2 text-left">
              <MdEmail className="text-2xl" />
              EMAIL: swastikconstruction545@gmail.com
            </span>
          </div>
        </div>
      )}

      {/* Sticky Navbar */}
      <header
        className={`fixed w-full z-20 transition-all duration-500 ease-in-out ${
          isSticky
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container relative flex items-center justify-between px-4 py-2 mx-auto">
          {/* Logo */}
          {/* Logo */}
<div className="text-6xl font-bold transition-all">
  <img
    src={logo}
    alt="Logo"
    className="w-28 h-14 sm:h-14 sm:w-28 md:h-14 md:w-28" // Adjust sizes for smaller screens
  />
</div>


          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center md:hidden">
            <button
              className="text-3xl text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars /> {/* You can replace this with a hamburger icon */}
            </button>
          </div>

          {/* Navigation for larger screens */}
          <nav className="hidden mt-5 md:flex space-x-14">
            <Link to="/" className=" hover:underline">
              HOME
            </Link>
            <Link to="/aboutUs" className="hover:underline">
              ABOUT
            </Link>
            <Link to="/project" className="hover:underline">
              PROJECTS
            </Link>
            <Link to="/gallery" className=" hover:underline">
              GALLERY
            </Link>
            <Link to="/Contact" className=" hover:underline">
              CONTACT
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="items-center hidden mt-5 md:flex space-x-7">
            <span>
              <FaFacebookF className="text-2xl" />
            </span>
            <span>
              <a href="https://www.instagram.com/swastik_constructions_?igsh=YTRseXllYTFoMjVh">
                <IoLogoInstagram className="text-2xl" />
              </a>
            </span>
            <span>
              <IoLogoYoutube className="text-2xl" />
            </span>
            <span>
              <IoLogoWhatsapp className="text-2xl" />
            </span>
          </div>
        </div>
      </header>

      {/* Mobile Navigation (Toggle Menu) */}
      <div
        className={`md:hidden flex flex-col items-center mt-5 space-y-4 bg-white shadow-md p-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/" className="font-semibold hover:underline"
         onClick={() => setIsMenuOpen(false)} >
          HOME
        </Link>
        <Link to="/aboutUs" className="hover:underline">
          ABOUT
        </Link>
        <Link to="/project" className="hover:underline">
          PROJECTS
        </Link>
        <Link to="/gallery" className="font-semibold hover:underline">
          GALLERY
        </Link>
        <Link to="/Contact" className="font-semibold hover:underline">
          CONTACT
        </Link>

        {/* Social Media Icons */}
        <div className="flex mt-4 space-x-5">
          <span>
            <FaFacebookF className="text-2xl" />
          </span>
          <span>
            <IoLogoInstagram className="text-2xl" />
          </span>
          <span>
            <IoLogoYoutube className="text-2xl" />
          </span>
          <span>
            <IoLogoWhatsapp className="text-2xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
