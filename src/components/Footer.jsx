import React from "react";
import footerImage from "../assets/footer_111111.jpg";

const Footer = () => {
  return (
    <footer className=" text-white bg-[#2a1771] mt-28">
      {/* Image as background, ensuring it's fully visible and centered */}
      <div
        className=" top-[50px] w-full h-[320px] bg-cover bg-center "
        style={{ backgroundImage: `url(${footerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="text-center lg:w-1/2 lg:text-left">
            <h3 className="mb-4 text-4xl uppercase font-futura">
              Move into the majestic marvel with absolute exclusivity
            </h3>
          </div>
         
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-2 text-3xl font-futura">Contact Us</h4>
            <p className="text-xl">
              2, Swastik Disa Corporate Park, Opp. Shreyas Cinemas, LBS Rd,
              Ghatkopar (West), Mumbai-86.
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-3xl font-futura">Quick Link</h4>
            <ul className="space-y-2">
              <li className="text-xl">→ About</li>
              <li className="text-xl">→ Redevelopment</li>
              <li className="text-xl">→ FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-3xl font-futura">Ongoing Projects</h4>
            <ul className="space-y-2">
              <li className="text-xl">→ Swastik Avighna</li>
              <li className="text-xl">→ Swastik Divine</li>
              <li className="text-xl">→ Swastik Onyx</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-3xl font-futura">Completed Projects</h4>
            <ul className="space-y-2">
              <li className="text-xl">→ Swastik Goldcrest Business Park</li>
              <li  className="text-xl">→ Swastik Sapphire Business Annexe</li>
              <li className="text-xl">→ Swastik Signature Business Park</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <span className="text-lg">&copy; 2024 Swastik Constructions. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
