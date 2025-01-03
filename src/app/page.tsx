import Categories from '@/components/categories'
import Slider from '@/components/slider'
import Topproducts from '@/components/topproduct/shose'
import ProductCard from '@/components/ProductCard'
import React from 'react'

const page = () => {
  return (
    <div>
      <Slider/>
      <Categories/>
      <Topproducts/>
     <ProductCard/>
    </div>
  )
}

export default page
