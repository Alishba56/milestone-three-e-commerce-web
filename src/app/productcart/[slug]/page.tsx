import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productData } from '../../../data/products';

async function page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const product = productData.filter((item) => item.slug === slug)[0]
  if(product) {
    return (
    <div className="font-sans bg-gray-100">
      <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="w-full lg:sticky top-4 sm:flex gap-2">
            <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
              <div className="relative aspect-square w-full">
                <Image
                  src={product.image}
                  alt="Product"
                  className="cursor-pointer object-contain rounded-md"
                />
              </div>
            </div>
            <div className="relative w-full lg:w-4/5 aspect-[4/5]">
              <Image src={product.image} alt="Product" className="rounded-md object-contain" priority />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">${product.price}</p>
              <p className="text-gray-400 text-xl">
                <s>${product.price}</s> <span className="text-sm ml-1.5">Tax included</span>
              </p>
            </div>

            <div className="flex space-x-2 mt-4">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
              <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {['SM', 'MD', 'LG', 'XL'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0 ${size === 'MD' ? 'border-blue-600' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <Link href="/shoppingcarts">
              <button type="button" className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md">Add to cart</button>
            </Link>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">About the item</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>A gray t-shirt is a wardrobe essential because it is so versatile.</li>
                <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
                <li>This is easy to care for. They can usually be machine-washed and dried on low heat.</li>
                <li>You can add your own designs, paintings, or embroidery to make it your own.</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
              <div className="space-y-3 mt-4">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const percentage = rating === 5 ? 66 : rating === 4 ? 33 : rating === 3 ? 16 : rating === 2 ? 8 : 6;
                  return (
                    <div key={rating} className="flex items-center">
                      <p className="text-sm text-gray-800 font-bold">{rating}.0</p>
                      <svg className="w-5 fill-blue-600 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                        <div className={`h-full rounded-md bg-blue-600`} style={{ width: `${percentage}%` }}></div>
                      </div>
                      <p className="text-sm text-gray-800 font-bold ml-3">{percentage}%</p>
                    </div>
                  );
                })}
              </div>
              <button type="button" className="w-full mt-8 px-6 py-2.5 border border-blue-600 bg-transparent text-gray-800 text-sm font-semibold rounded-md">Read all reviews</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  } else {
    return <h1>Product not found</h1>
  }
}

export default page;
