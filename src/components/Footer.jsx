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
          <p className="text-sm">swastikconstruction545@gmail.com</p>
          <p className="mt-2 text-sm">+91 808599475, 8602954488</p>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="mb-4 font-bold">Address</h3>
          <p className="text-sm">
            <span className="font-bold">Site Add :</span>
<span className="text-sm ms-2">Adjacent Ruchi Life Scxape, Near Shani Mandir, Hoshangabad Road, Bhopal (M.P.)</span>  
        </p>
        <p className="text-sm mt-2">
        <span className="font-bold">Office Add :</span>
        <span className="text-sm ms-2">C-255, Shree Rameshwaram, CPA 80 Feet Road, Baghmugaliya, Bhopal (M.P.)</span>
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