
import React from 'react'
import Image from 'next/image'
import {productData} from "../../data/products"
import Link from 'next/link'
import { CiHeart } from 'react-icons/ci'
import Glasse from './glasse'
import WomenComponent from './women'
import Men from './men'


const topproducts = () => {
  return (
    
        <div className=" py-4 mx-auto mt-10 lg:max-w-6xl md:max-w-4xl max-sm:max-w-md">
      <h2 className="font-extrabold text-3xl text-gray-800 text-center mb-12">Top Products</h2>
      <div className='flex justify-between  items-center text-2xl my-10'>
      <h1 className='font-bold' >Shoes</h1>
      <button>
        <Link href='/shop' className='border  border-black px-7 rounded-full py-2'>Shop Now</Link>
      </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-12">
        {productData.map((item , index) => (index <=3 &&
          <Link key={index} href={`productcart/${item.slug}`}>
          <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
            <div className="mb-4 bg-gray-100 rounded p-2">
              <Image src={item.image}alt="Product 1"
                className="aspect-[33/35] w-full object-contain" />
            </div>

            <div>
              <div className="flex gap-2">
                <h5 className="text-base font-bold text-gray-800">{item.name}</h5>
                <h6 className="text-base text-gray-800 font-bold ml-auto">${item.price}</h6>
              </div>
              <p className="text-gray-500 text-[13px] mt-2">{item.describe}</p>
              <div className="flex items-center gap-2 mt-4">
                <div
                  className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
                 <CiHeart  className='text-red-500 font-bold'/>

                </div>
                <button type="button" className="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
              </div>
            </div>
          </div>

          </Link>
        ))}
      </div>
      <Glasse/>
      <WomenComponent/>
      <Men/>
    </div>
    
  )
}

export default topproducts
