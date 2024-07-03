import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import iphone from "../components/asset/image/iphone15.png";
import iphone2 from "../components/asset/image/iphone11.png";
import iphone3 from "../components/asset/image/samsung.jpg";

const images = [iphone, iphone2, iphone3];

const HeroPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
      }, []);
    

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="bg-[#eeeeee] mb-4 flex flex-col items-center md:flex-row md:items-center min-h-screen">
        <div className="flex flex-col w-full md:w-1/2 p-8 md:p-20 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-serif">New <br /> collection</h1>
          <p className="px-5 pb-6 text-lg leading-7 text-[#777777]">
          The highest quality products, sewn in Ireland from Irish materials. Quality and durability for years.
          </p>
          <div className={`flex flex-col md:flex-row transition-all duration-500`}>
            <button
              className="bg-[#e32c2c] text-white hover:bg-[#e25151] font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4"
              aria-label="Donate now"
              title="Donate now"
            //   onClick={() => setModalOpen(true)}
            >
              Donate now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 h-auto md:h-full">
          <a href="/donate/enough/" id="ctaclickableimage">
            <div className="h-auto md:h-full" style={{ height: '650px' }}>
              <img 
                src={images[currentImageIndex]} 
                alt="Trust" 
                className="w-80 h-80 object-cover md:absolute md:top-1/2 md:transform md:-translate-y-1/2" 
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
