
import React from 'react'
import Image from 'next/image'
import {glass} from "../../data/products"
import Link from 'next/link'
import { CiHeart } from 'react-icons/ci'
import { BsCart3 } from 'react-icons/bs'


const glasse = () => {
  return (
    <div>
      <div className='flex justify-between  items-center text-2xl my-10'>
      <h1 className='font-bold' >Glasses</h1>
      <button>
        <Link href='/shop ' className='border  border-black px-12 rounded-full py-2'>Shop Now</Link>
      </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-12">
        {glass.map((item , index) => (index <=3 &&
          <Link key={index} href={`productcart/${item.slug}`}>
           <div className="group overflow-hidden cursor-pointer relative">
          <div className="bg-gray-100 w-full overflow-hidden">
            <Image src={item.Image} alt="Product 1"
              className="aspect-[4/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
          </div>

          <div className="p-4 relative">
            <div className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
              <button type="button" title="Add to wishlist" className="bg-transparent outline-none border-none">
             <CiHeart/>
              </button>
              <button type="button" title="Add to cart" className="bg-transparent outline-none border-none">
               <BsCart3 />
              </button>
            </div>
            <div className="z-20 relative bg-white">
              <h6 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h6>
              <h6 className="text-sm text-gray-600 mt-2">${item.price}</h6>
            </div>
          </div>
        </div>

          </Link>
        ))}
      </div>
    </div>
  )
}

export default glasse
