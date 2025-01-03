import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { SlEnvolope } from 'react-icons/sl'

const page = () => {
  return (
    <div className='bg-white'>
      <div className="grid sm:grid-cols-2 items-start gap-16  p-14 mx-auto max-w-4xl bg-white font-[sans-serif]">
            <div>
                <h1 className="text-gray-800 text-3xl font-extrabold">Lets Talk</h1>
                <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we d love to hear about your project  and provide help.</p>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Email</h2>
                    <ul className="mt-4">
                        <li className="flex items-center">
                            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <SlEnvolope  className='text-[#007bff]'/>

                            </div>
                            <Link href="javascript:void(0)" className="text-[#007bff] text-sm ml-4">
                                <small className="block">Mail</small>
                                <strong>info@example.com</strong>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Socials</h2>

                    <ul className="flex mt-4 space-x-4">
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Link href="javascript:void(0)">
                            <FaFacebookF className='text-[#007bff]'/>

                            </Link>
                        </li>
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Link href="javascript:void(0)">
                            <FaLinkedinIn className='text-[#007bff]' />

                            </Link>
                        </li>
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Link href="javascript:void(0)">
                            <FaInstagram className='text-[#007bff]'/>

                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <form className="ml-auto space-y-4">
                <input type='text' placeholder='Name'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <input type='email' placeholder='Email'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <input type='text' placeholder='Subject'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <textarea placeholder='Message' 
                    className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
                <button type='button'
                    className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
            </form>
        </div>
    </div>
  )
}

export default page
