import Image from 'next/image'
import img from "../../images/women.png"
import React from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'

const page = () => {
  return (
    <div>
      <div className="my-4 font-[sans-serif]">
          <div className="grid sm:grid-cols-3 items-center lg:p-12 p-6 gap-6 max-w-3xl min-h-[400px] mx-auto bg-green-200 rounded-lg">
              <div className="sm:col-span-2 max-sm:order-1">
                  <h2 className="text-gray-800 text-3xl font-extrabold">About</h2>
                  <p className="text-gray-800 text-sm mt-4 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>

                  <div className="mt-12 flex items-end">
                      <div>
                          <h4 className="text-gray-800 text-sm font-semibold">Simon Konecki</h4>
                          <p className="text-gray-800 text-xs mt-1">Chief Exicutive Officer, Alpha</p>
                      </div>

                      <div className=" flex  text-2xl space-x-5 ml-auto">
                      <HiArrowNarrowLeft />

                          <HiArrowNarrowRight />

                      </div>
                  </div>
              </div>

              <div className="sm:ml-auto sm:relative lg:left-24">
                  <Image 
                  src={img} 
                  alt="Woman" 
                  className="w-56 rounded-lg" />
              </div>
          </div>
      </div>
    </div>
  )
}

export default page
