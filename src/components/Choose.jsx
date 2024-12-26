import React, { useState, useEffect } from "react";
import bg2 from "../assets/bg2.jpg";
import luxury1 from '../assets/luxury1.jpg';
import fit1 from '../assets/fit1.jpg';
import fit2 from '../assets/fit2.jpg';
import secure1 from '../assets/secure1.jpg';
import secure2 from '../assets/secure2.jpg';
import secure3 from '../assets/secure3.jpg';

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
      <section className="py- mt-[90px] text-center">
        <h1 className="text-6xl font-serif text-[#dda54f]">A TRUE EPITOME OF ELEGANCE</h1>
      </section>

      {/* Cards Section */}
      <section className="flex justify-center py-10 space-x-7 flex-wrap md:flex-nowrap">
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
    <div className="relative overflow-hidden rounded-full shadow-lg w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] mb-6">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.img} alt={image.title} className="object-cover w-full h-full rounded-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-white rounded-full shadow-md bg-opacity-70">
              <p className="font-bold uppercase py-2 text-xl sm:text-2xl text-[#444175]">{image.title}</p>
              <p className="text-sm sm:text-xl font-serif text-[#444175]">{image.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Choose;
