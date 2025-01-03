import React from 'react'
import {productData} from "../../data/products"
import Image from 'next/image'
import { CiHeart } from 'react-icons/ci'
import Glasses from './glasses'
import WomenComponent from './women'
import MenPage from './men'

const page = () => {
  return (
    <div>
      <div className="font-[sans-serif] bg-gray-100">
      <div className="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-10">Premium Sneakers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
        
{productData.map((item , index) => (
          <div  key={index} className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
            <div className="mb-4 bg-gray-100 rounded p-2">
              <Image src={item.image} alt="Product 3"
                className="aspect-[33/35] w-full object-contain" />
            </div>

            <div>
              <div className="flex gap-2">
                <h5 className="text-base font-bold text-gray-800">{item.name}</h5>
                <h6 className="text-base text-gray-800 font-bold ml-auto">{item.price}</h6>
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
        ))}
        </div>
      </div>
    </div>
    <Glasses/>
    <WomenComponent/>
    <MenPage/>
    </div>
  )
}

export default page
