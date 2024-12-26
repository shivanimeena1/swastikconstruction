import React from 'react';
import Navbar from './Navbar';
import pdf1 from '../assets/pdf1.jpg'
import pdf2 from '../assets/pdf2.jpg'
import pdf3 from '../assets/pdf3.jpg'
import pdf4 from '../assets/pdf4.jpg'
import pdf5 from '../assets/pdf5.jpg'
import pdf6 from '../assets/pdf6.jpg'
import Footer from './Footer';

const Project = () => {
  return (
    <>

    <Navbar />
<div className="bg-orange-800 h-[93px]"></div>
      {/* Background Image Section */}
 <div className="">
<img src={pdf1} alt="" />
<img src={pdf2} alt="" />
<img src={pdf3} alt="" />
<img src={pdf4} alt="" />
<img src={pdf5} alt="" />
<img src={pdf6} alt="" />
 </div>
 <Footer/>
    </>
  );
};

export default Project;
