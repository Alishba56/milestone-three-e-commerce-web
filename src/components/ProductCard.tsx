
import React from 'react'

const ProductCard = () => {
  return (
    <div>
        <div className="bg-gradient-to-r from-gray-900 vew-gray-800 to-gray-700 font-[sans-serif] p-6">
      <div className="grid lg:grid-cols-2 items-center gap-16 max-w-7xl mx-auto min-h-[350px]">
        <div>
          <h3 className="text-white text-4xl font-bold">Subscribe to Our Newsletter</h3>
          <p className="text-base mt-6 text-gray-300">Subscribe to our newsletter and stay up to date with the latest news,
            updates, and exclusive offers. Get valuable insights. Join our community today!</p>
          <div className="bg-transparent border border-gray-500 flex p-1 rounded-full mt-12">
            <input type='email' placeholder='Enter your email' className="text-gray-300 w-full outline-none bg-transparent text-sm px-4 py-3" />
            <button type='button'
              className="bg-blue-700 hover:bg-blue-800 transition-all text-white text-sm rounded-full px-6 py-3">Submit</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
        
            <h3 className="text-white text-xl font-semibold mb-3">Customization</h3>
            <p className="text-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
          </div>
          <div>
      
            <h3 className="text-white text-xl font-semibold mb-3">Security</h3>
            <p className="text-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default ProductCard
