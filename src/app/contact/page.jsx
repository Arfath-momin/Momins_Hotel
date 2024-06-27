import React from 'react'
import contactBanner from "../../../public/assets/08.jpg"
import { FaLocationDot, FaPhone, } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import map from "../../../public/assets/map.png"
import Image from 'next/image';
function page() {
  return (
    <div>
      {/* Banner Title */}
      <div className="h-40 md:h-50 lg:h-60 flex flex-col justify-center items-center "
        style={{ backgroundImage: `url(${contactBanner.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <h2 className="text-black text-2xl text-center ">Contact Us</h2>
        <div className=" divider h-[1px] w-24 bg-[#b99470] mx-auto "></div>
      </div>

      {/* Contact Section */}
      <div className=" bg-white lg:space-y-32   py-10 lg:py-36 px-6 lg:px-60 ">
          
        <div className=" lg:flex  xl:gap-14 justify-center items-center">
             {/* Contact Form */}
        <div className="w-full">
          <form action="" className='flex flex-col '>
            <label htmlFor="" className='text-black text-lg mb-2'>
              Your Name
            </label>
            <input type="text" className='py-2 mb-6 border border-[#c0c6c7] border-1 bg-white' />

            <label htmlFor="" className='text-black text-lg mb-2'>
              Your Email
            </label>
            <input type="email" className='py-2 mb-6 border border-[#c0c6c7] border-1 bg-white' />
            <label htmlFor="" className='text-black text-lg mb-2'>
              Subject
            </label>
            <input type="text" className='py-2 mb-6 border border-[#c0c6c7] border-1 bg-white' />
            <label htmlFor="" className='text-black text-lg mb-2'>
              Your Message (Optional)
            </label>
            <textarea className='py-2 mb-6 border border-[#c0c6c7] border-1 bg-white' name="" id="" rows={10}></textarea>

            <button type='submit' className=' bg-[#b99470] text-white px-2 py-2 hover:bg-[#b8895b] '>Submit</button>
          </form>
        </div>


        <div className=" flex flex-col   justify-center items-center lg:items-start py-10 lg:py-36 px-6  ">
          <h2 className="text-black text-2xl ">Get In Touch</h2>
          <div className=" divider h-[1px] w-24 bg-[#b99470] self-center lg:self-start "></div>
          <p className="text-[#656a70] text-center lg:text-left text-sm mb-8 lg:mr-30 leading-6"> Duis commodo ipsum quis ante venenatis rhoncus. Vivamus imperdiet felis ac
            facilisis hendrerit. Nulla eu elementum ex, ut pulvinar est. Nam aliquet et tortor sed aliquet..</p>

          <h2 className="text-black text-2xl ">Contact Details</h2>
          <div className=" divider h-[1px] w-24 bg-[#b99470] self-center lg:self-start "></div>
          <div className="space-y-4">

            <div className="flex justify-start gap-2 lg:justify-start">
              <FaLocationDot size={22} color='#b99470' />
              <p className='font-thin text-gray-600'>#122 Gandhi Nagar,Mangalore</p>

            </div>

            <div className="flex justify-start gap-2 lg:justify-start">
              <FaPhone size={22} color='#b99470' />
              <p className='font-thin text-gray-600'>+91 88670 57358</p>

            </div>

            <div className="flex justify-start gap-2 lg:justify-start">
              <IoIosMail size={22} color='#b99470' />
              <p className='font-thin text-gray-600'>momins.hotel@gmail.com</p>

            </div>

          </div>
          
        </div>
        
        </div>
        <div className="w-full bg-white flex justify-center border border-none">
           <Image src={map} width={"100%"} height={600} />
       </div>


     

        
      </div>
   
      
    </div>
  )
}

export default page