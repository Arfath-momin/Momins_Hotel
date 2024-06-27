import React from 'react'
import { FaInstagram , FaFacebook  } from "react-icons/fa";
import { FaC, FaXTwitter } from "react-icons/fa6";
import { FaLocationDot ,FaPhone ,} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { AiOutlineCopyrightCircle } from "react-icons/ai";



function Footer() {
    return (
        <footer className='relative bottom-0 w-full border border-t]'>
            <div className="px-2 py-10 space-y-12 lg:space-y-0 bg-white lg:flex lg:gap-20 lg:justify-center lg:py-24 lg:px-8">
                <div className="space-y-4 ">
                    <h3 className='text-center text-black lg:text-left text-xl lg:text-2xl'>Follow Us</h3>
                    <p className='font-thin text-gray-600 text-center lg:text-left'>And Keep Update With Momin's Hotel</p>
                    <div className="flex justify-center gap-4 lg:justify-start">
                        <div className=" p-4 bg-[#b99470] hover:bg-[#b8895b]  rounded-full"><FaInstagram size={18} color='#ffffff'/></div>
                        <div className="p-4 bg-[#b99470] hover:bg-[#b8895b]  rounded-full"><FaFacebook size={18} color='#ffffff'/></div>
                        <div className="p-4 bg-[#b99470] hover:bg-[#b8895b]  rounded-full"><FaXTwitter size={18} color='#ffffff'/></div>
                        
                    </div>

                </div>
                <div className="space-y-4">
                <h3 className='text-center text-black lg:text-left text-xl lg:text-2xl'>Contact</h3>
                <div className="flex justify-center gap-2 lg:justify-start">
                    <FaLocationDot size={22} color='#b99470'/>
                    <p className='font-thin text-gray-600'>#122 Gandhi Nagar,Mangalore</p>
                </div>
                <div className="flex justify-center gap-2 lg:justify-start">
                    <FaPhone size={22} color='#b99470'/>
                    <p className='font-thin text-gray-600'>+91 88670 57358</p>
                </div>
                <div className="flex justify-center gap-2 lg:justify-start">
                    <IoIosMail size={22} color='#b99470'/>
                    <p className='font-thin text-gray-600'>momins.hotel@gmail.com</p>
                </div>

                </div>
                <div className="space-y-4">
                <h3 className='text-center text-black lg:text-left text-xl lg:text-2xl'>News Letter</h3>
                <p className='font-thin text-gray-600 text-center dm'>Sign Up to our news letter for exclusive offers</p>
                <form action="" className='flex gap-2 justify-center lg:justify-start'>
                <input type="text" className=' border border-[#b99470] p-2 bg-white text-black  '/>
                <button className=' bg-[#b99470] text-white px-2 py-2 hover:bg-[#b8895b] '>Subscribe</button>

                </form>
                </div>  

            </div>
            <div className=" bg-[#b99470] ">
                <p className=' text-white flex justify-center p-4 items-center gap-2 s'><AiOutlineCopyrightCircle color='#ffffff' size={20}/> 2024 Momin's Hotel.All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer