import React from 'react'
import Image from 'next/image'
import {men} from "../../data/products"
import { CiHeart } from 'react-icons/ci'
import Link from 'next/link'
import { BsCart3 } from 'react-icons/bs'

const MenPage = () => {
  return (
    <div>
       <div className="font-[sans-serif] ">
                    <div className="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-10">Men</h2>
              
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
                      
              {men.map((item , index) => (
                            <Link key={index}  href={`productcart/${item.slug}`}>

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
                                          <CiHeart className='text-2xl'/>
                                           </button>
                                           <button type="button" title="Add to cart" className="bg-transparent outline-none border-none">
                                            <BsCart3 className='text-2xl'/>
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
                  </div>
    </div>
  )
}

export default MenPage
