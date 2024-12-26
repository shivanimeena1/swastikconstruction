import React, { useState, useEffect } from "react";
import bg2 from "../assets/bg2.jpg";
import luxury1 from '../assets/luxury1.jpg'
import fit1 from '../assets/fit1.jpg';
import fit2 from '../assets/fit2.jpg'
import secure1 from '../assets/secure1.jpg'
import secure2 from '../assets/secure2.jpg'
import secure3 from '../assets/secure3.jpg'

const Choose = () => {
  const cardData = [
    {
      id: 1,
      images: [
        { img: bg2, title: "Luxury", description: "A Home with Inimitable Style" },
        { img: luxury1, title: "Luxury", description: "Modern Living with Style" },
        { img: bg2, title: "Luxury", description: "Comfort Meets Elegance" },
      ],
    },
    {
      id: 2,
      images: [
        { img: secure1, title: "Secure", description: "Safe Living for Generations" },
        { img: secure2, title: "Secure", description: "Peace of Mind Every Day" },
        { img: secure3, title: "Secure", description: "Your Safety is Priority" },
      ],
    },
    {
      id: 3,
      images: [
        { img: fit1, title: "Fitness", description: "Health & Wellness at Home" },
        { img: fit2, title: "Fitness", description: "A Healthy Mind & Body" },
        { img: fit1, title: "Fitness", description: "Stay Active, Stay Strong" },
      ],
    },
  ];

  return (
    <div className="font-sans">
      {/* Header Section
      <section className="py-16 text-center">
        <h2 className="font-serif text-5xl text-[#444175]">
          <span className="text-[#dda54f]">WHY</span>{" "}
          <span className="text-[#444175]">CHOOSE US*</span>
        </h2>
        <div className="flex items-center justify-center mt-14 space-x-36">
          <div className="space-y-2">
            <p className="text-6xl font-semibold text-[#444175] font-cinzel">2023</p>
            <p className="text-sm text-gray-600 font-openSans">SINCE</p>
            <p className="text-lg text-gray-500 ">Delivering Quality</p>
          </div>
          <div className="space-y-2">
            <p className="text-6xl font-semibold text-[#444175] font-cinzel">22+</p>
            <p className="text-sm text-gray-600 font-openSans">Projects</p>
            <p className="text-lg text-gray-500 ">Delivered Before Time</p>
          </div>
          <div  className="space-y-2">
            <p className="text-6xl font-semibold text-[#444175] font-cinzel">4</p>
            <p className="text-sm text-gray-600 font-openSans">Ongoing</p>
            <p className="text-lg text-gray-500 ">Projects Sites</p>
          </div>
          <div  className="space-y-2" >
            <p className="text-6xl font-semibold text-[#444175] font-cinzel">12000</p>
            <p className="text-sm text-gray-600 font-openSans">Happy</p>
            <p className="text-lg text-gray-500 ">Families</p>
          </div>
        </div>
      </section> */}
    

      <section className="py- mt-[90px] text-center">
        <h1 className="text-6xl font-serif  text-[#dda54f]">A TRUE EPITOME OF ELEGANCE</h1>
      </section>



      {/* Cards Section */}
      <section className="flex justify-center py-10 space-x-7">
        {cardData.map((card) => (
          <CarouselCard key={card.id} images={card.images} />
        ))}
      </section>
    </div>
  );
};

const CarouselCard = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden rounded-full shadow-lg w-[500px] h-[500px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.img} alt={image.title} className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center w-[350px] h-[350px] bg-white rounded-full shadow-md bg-opacity-70">
              <p className="font-bold uppercase py-2 text-3xl text-[#444175]">{image.title}</p>
              <p className="text-2xl font-serif text-[#444175]">{image.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Choose;
