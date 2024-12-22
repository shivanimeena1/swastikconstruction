import React from "react";

const Navbar = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="logo.png" alt="Logo" className="h-10" />
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:underline ">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#media" className="hover:underline">Media</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-4">
          <span>📞 PHONE: 91-7247765172</span>
          <span>✉️ EMAIL: swatikbuilders.in</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
