

import React from 'react'

import Image from 'next/image'

import Category from "../data/category"



const categories = () => {
return (

 <div className='bg-gray-400 pt-10 py-32'>

<div className="font-sans py-4 mx-auto lg:max-w-7xl md:max-w-3xl max-w-xl ">

<h2 className="text-2xl sm:text-4xl font-bold text-black text-center mb-20">Top Categories</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">

{Category.map((data , index)=>(

 <div key={index} className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">

<div className="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">

 <Image src={data.Image} alt="product1"

 className="h-full w-full bg-gray-100 object-contain" />

</div>



<div className="absolute mx-auto left-0 right-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white w-11/12 p-2 lg:p-3 rounded-lg transition-all duration-300">

 <div className="text-center">

 <h3 className="text-sm lg:text-base font-bold text-white lg:text-gray-800">{data.name}</h3>



</div>





</div>

</div>

))}



 </div>

</div>

</div>

)

}



export default categories