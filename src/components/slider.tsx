"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Category from "../data/category";
import { motion } from 'framer-motion';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Link from 'next/link';

const Slider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Category.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + Category.length) % Category.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(handleNext, 3000); // Start timer after each slide change

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentImageIndex]);

  return (
    <div className="relative w-full h-[100vh] bg-[#faf1f1] overflow-hidden">
      {Category.map((item, index) => (
        <motion.div
          key={index}
          className={`flex justify-around items-center ${index === currentImageIndex ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0, scale: index === currentImageIndex ? 1 : 0.9 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold mx-10 text-black mb-4">{item.name}</h1>
            <h1 className="text-2xl font-bold text-black mx-20 mb-10">{item.desc}</h1>
            <button className="text-black px-20 py-4 border border-gray-400 rounded-full hover:bg-opacity-75">
              <Link href="/shop" className="">Shop Now</Link>
            </button>
          </div>

          <motion.div
            animate={{ scale: 1.1 }}
            transition={{ yoyo: Infinity, duration: 2 }}
            className="w-full h-[70vh] object-contain mt-40 pl-32"
          >
            <Image 
              src={item.Image} 
              alt={item.name} 
              className='mix-blend-color-burn'
              width={500}
              height={500}
            />
          </motion.div>
        </motion.div>
      ))}
      <div className="absolute bottom-5 left-1/2 flex gap-2 transform -translate-x-1/2">
        <button onClick={handlePrev} className="bg-gray-400 text-black px-4 py-2 rounded-full hover:bg-opacity-75">
          <SlArrowLeft />
        </button>
        <button onClick={handleNext} className="bg-gray-400 text-black px-4 py-2 rounded-full hover:bg-opacity-75">
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;