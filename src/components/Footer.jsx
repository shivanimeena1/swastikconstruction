import React from "react";
import footerImage from "../assets/footer_111111.jpg";

const Footer = () => {
  return (
    <footer className="text-white bg-[#2a1771] mt-28">
      {/* Image as background, ensuring it's fully visible and centered */}
      <div
        className="top-[50px] w-full h-[320px] bg-cover bg-center"
        style={{ backgroundImage: `url(${footerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      <div className="container px-6 py-6 mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="text-center lg:w-1/2 lg:text-left">
            <h3 className="mb-4 text-xl md:text-xl font-futura">
              Move into the majestic marvel with absolute exclusivity
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-2 text-2xl font-futura">Contact Us</h4>
            <p>
              <span className="font-bold">Site Add :</span>
              <span className="ms-2">Adjacent Ruchi Life Scxape, Near Shani Mandir, Hoshangabad Road, Bhopal (M.P.)</span>
            </p>
            <p>
              <span className="font-bold">Office Add :</span>
              <span className="ms-2">C-255, Shree Rameshwaram, CPA 80 Feet Road, Baghmugaliya, Bhopal (M.P.)</span>
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-2xl font-futura">Quick Link</h4>
            <ul className="space-y-2">
              <li>→ About</li>
              <li>→ Redevelopment</li>
              <li>→ FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-2xl font-futura">Get In Touch</h4>
            <ul className="space-y-2">
              <li>→ swastikconstruction545@gmail.com</li>
              <li>→ +91 808599475, 8602954488</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-2xl font-futura">Completed Projects</h4>
            <ul className="space-y-2">
              <li>→ Emerald Park</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
  <span className="text-base">&copy; 2024 Swastik Constructions. All Rights Reserved.</span>
  <br />
  <span className="text-base">
    Made by: <a href="https://ssstechies.com/" target="_blank" rel="noopener noreferrer" className="text-orange-400">SSS Technologies</a>
  </span>
</div>

      </div>
    </footer>
  );
};

export default Footer;
