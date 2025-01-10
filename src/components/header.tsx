"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-gray-300">
      <header className="flex bg-white border-b py-3 sm:px-6 px-4 font-[sans-serif] min-h-[75px] relative z-50">
        <div className="flex max-w-screen-xl mx-auto w-full">
          <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
            <div className="font-bold text-2xl px-10 cursor-pointer">
              <Link href="/">
                <h1>MY Store</h1>
              </Link>
            </div>

            <div className="lg:ml-6 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
              <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <Link href="/" className="text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold">
                    New
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <Link href="/shop" className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold">
                    Shop
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <Link href="/contact" className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold">
                    Contact
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <Link href="/about" className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-x-6 gap-y-4 ml-auto">
              <div className="flex bg-gray-50 border focus-within:border-gray-400 rounded-full mx-10 items-center py-2.5 overflow-hidden max-w-64 max-lg:hidden">
                <input
                  type="text"
                  placeholder="Search something..."
                  className="w-full text-sm bg-transparent outline-none pl-6"
                />
                <FiSearch className="mr-4" />
              </div>

              <div className="flex items-center sm:space-x-8 space-x-6">
                <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                  <div className="relative text-3xl">
                    <CiHeart />
                  </div>
                  <span className="text-[13px] font-semibold text-[#333]">Wishlist</span>
                </div>
                <Link href="/shoppingcarts">
                <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                  <div className="relative text-2xl">
                    <BsCart3 />
                  </div>
                  <span className="text-[13px] font-semibold text-[#333]">Cart</span>
                </div>
                </Link>
              </div>

              <button
                className="lg:hidden block"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white z-50">
            <div className="p-6">
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold">
                    New
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="javascript:void(0)" className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
