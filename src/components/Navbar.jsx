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

          <div className="container flex flex-col md:flex-row justify-between gap-3 mx-auto">
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
          <div className="text-6xl font-bold transition-all">
            <img src={logo} alt="Logo" className="h-20 w-44" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white text-3xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars /> {/* You can replace this with a hamburger icon */}
            </button>
          </div>

          {/* Navigation for larger screens */}
          <nav className="hidden md:flex mt-5 space-x-14">
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
          <div className="hidden md:flex items-center mt-5 space-x-7">
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
        <Link to="/" className="font-semibold hover:underline">
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
        <div className="flex space-x-5 mt-4">
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
