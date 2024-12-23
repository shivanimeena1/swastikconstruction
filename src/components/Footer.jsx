import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 py-8 text-white bg-yellow-900">
        <div className="flex items-center justify-center gap-6 py-4 text-xl ">
<span >Whatsapp</span>
<span className="font-archivo">Instagram</span>
<span>Facebook</span>
<span>Twitter</span>
        </div>
      <div className="grid grid-cols-1 gap-8 mx-auto mt-5 text-center max-w-7xl md:grid-cols-3 md:text-left">
        
        {/* Get In Touch Section */}
        <div>
          <h3 className="mb-4 font-bold">Get In Touch</h3>
          <p className="text-sm">fortunebuildersbpl@yahoo.co.in</p>
          <p className="mt-2 text-sm">0755-4049500, 9111006626</p>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="mb-4 font-bold">Address</h3>
          <p className="text-sm">
            Fortune House, 157, Zone-I, <br />
            M.P. Nagar Bhopal-462011 (M.P.) India
          </p>
        </div>

        {/* Privacy Policy Section */}
        <div>
          <h3 className="mb-4 font-bold">Privacy Policy</h3>
          <ul>
            <li className="text-sm">
              <a href="#" className="hover:underline">
                Disclaimer
              </a>
            </li>
            <li className="mt-2 text-sm">
              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-4 mt-8 text-sm text-center border-t border-gray-700">
        <p>
          © 2024 <span className="font-semibold text-orange-500">Swastik Builders</span>. All Rights Reserved. | Powered by{" "}
          <span className="font-semibold text-orange-500">SynQues</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;