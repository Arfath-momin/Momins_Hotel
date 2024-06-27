import Link from "next/link"
import React from "react"
import image_01 from "../../public/assets/01.jpg"
import image_03 from "../../public/assets/03.jpg"
import Image from "next/image"
import RoomCard from "./components/RoomCard"
import { RiDoubleQuotesL } from "react-icons/ri";
import { BsBuildings } from "react-icons/bs";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaCompass } from "react-icons/fa";
import { FaSubway } from "react-icons/fa";
export default function Home() {

  return (
    <div className="">

      {/*Hero Section*/}
      <div className="px-2 relative bg-cover bg-center bg-overlay-gradient flex flex-col justify-center gap-6 items-center py-20 lg:py-60 ">
        <h2 className="relative z-10 text-center text-white text-4xl lg:text-6xl ">Luxurious Hotel Experience</h2>
        <Link href={"/"}><button className=' bg-[#b99470] text-white px-2 py-2 hover:bg-[#b8895b] '>View Rooms</button></Link>
      </div>

      {/* Welcome */}

      <div className="  bg-[#f2f2f3] flex flex-col  justify-center items-center py-10 lg:py-36 px-6 lg:px-60 ">
        <h2 className="text-black text-2xl ">Welcome To Soho Hotel</h2>
        <div className=" divider h-[1px] w-24 bg-[#b99470] mx-auto "></div>
        <p className="text-[#656a70] text-sm text-center mb-8 lg:mx-30 leading-6"> Nullam et aliquam leo. Pellentesque eget sapien massa. Cras ac est faucibus, 
          auctor urna sed, mollis magna. Vestibulum a ante porttitor,
           tincidunt neque in, semper ipsum. Morbi hendrerit sed risus in venenatis.</p>
           <Link href={"/about"}><button className=' bg-[#b99470] text-white px-2 py-2 hover:bg-[#b8895b] '>Learn More</button></Link>
      </div>

      {/*About us*/}

      <div className="lg:flex bg-white  lg:items-center ">
        <div className="lg:hidden "><Image src={image_01} ></Image></div>
        <div className=" bg-white flex flex-col justify-center py-10 lg:py-30 px-6 lg:w-1/2 lg:pl-20">
        <h2 className="text-black text-2xl ">About Us</h2>
        <div className=" divider h-[1px] w-24 bg-[#b99470]  "></div>
        <p className="text-[#656a70] text-sm mb-8 lg:mr-40 leading-6"> Nullam et aliquam leo. Pellentesque eget sapien massa. Cras ac est faucibus, 
          auctor urna sed, mollis magna. Vestibulum a ante porttitor,
           tincidunt neque in, semper ipsum. Morbi hendrerit sed risus in venenatis.</p>
           <Link href={"/about"}><button className=' bg-[#b99470] text-white px-2 py-2 hover:bg-[#b8895b] '>Learn More</button></Link>
        </div>
        <div className="hidden lg:block  lg:w-1/2 "><Image src={image_01} ></Image></div>
        
      </div>

      {/*Our Rooms*/}
      <div className="bg-[#f2f2f3] flex flex-col  justify-center items-center py-10 lg:py-36 px-6 lg:px-60 ">
      <h2 className="text-black text-2xl ">Our Rooms</h2>
        <div className=" divider h-[1px] w-24 bg-[#b99470] mx-auto "></div>
        <p className="text-[#656a70] text-sm text-center mb-8 lg:mx-30 leading-6"> Nullam et aliquam leo. Pellentesque eget sapien massa. Cras ac est faucibus, 
          auctor urna sed, mollis magna. Vestibulum a ante porttitor,
           tincidunt neque in, semper ipsum. Morbi hendrerit sed risus in venenatis.</p>

        <div className="w-full">
          <RoomCard />
        </div>
      </div>

      {/*Testimonial section*/}
      <div className="lg:flex bg-white  lg:items-center ">
        <div className="lg:w-1/2  "><Image src={image_03}  ></Image></div>
        <div className=" bg-white flex flex-col justify-center py-10 lg:py-36 px-6 lg:w-1/2  lg:pl-20">
        <RiDoubleQuotesL size={32} className="" />
        <h2 className="text-black text-2xl  ">We enjoyed our stay at Momin's Hotel greatly, the staff were friendly and attentive to every one of our needs</h2>
        <div className=" divider h-[1px] w-24 bg-[#b99470]  "></div>
        <p className="text-[#656a70] text-sm mb-8">- Muhammed Zain</p>
           
        </div>
        
        
                  
      </div>
      {/* Hotel Facilites */}

      <div className="bg-[#f2f2f3] flex flex-col  justify-center items-center py-10 lg:py-36 px-6 lg:px-60 ">
      <h2 className="text-black text-2xl ">Hotel facilites</h2>
        <div className=" divider h-[1px] w-24 bg-[#b99470] mx-auto "></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 space-y-10 lg:justify-center lg:items-center lg:space-y-0 lg:gap-10">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <BsBuildings size={42} color="#b99470"/>
            <div className="space-y-2">
              <h3 className="text-black text-center text-xl">City Views</h3>
              <p className="text-center text-[#656a70] lg:mx-20">Proin felis mauris, fermentum non condimentum id, porttitor in nisl curabitur euismod convallis.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <FaCompass size={42} color="#b99470"/>
            <div className="space-y-2">
              <h3 className="text-black text-center text-xl">South Facing</h3>
              <p className="text-center text-[#656a70] lg:mx-20">Proin felis mauris, fermentum non condimentum id, porttitor in nisl curabitur euismod convallis.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <LiaSwimmingPoolSolid size={42} color="#b99470"/>
            <div className="space-y-2">
              <h3 className="text-black text-center text-xl">Swimming Pool</h3>
              <p className="text-center text-[#656a70] lg:mx-20">Proin felis mauris, fermentum non condimentum id, porttitor in nisl curabitur euismod convallis.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <FaSubway size={42} color="#b99470"/>
            <div className="space-y-2">
              <h3 className="text-black text-center text-xl">Transportation</h3>
              <p className="text-center text-[#656a70] lg:mx-20">Proin felis mauris, fermentum non condimentum id, porttitor in nisl curabitur euismod convallis.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
};
