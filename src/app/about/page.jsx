import React from 'react'
import aboutBanner from "../../../public/assets/08.jpg"
import Image from 'next/image';
import image_01 from "../../../public/assets/01.jpg"
import image_03 from "../../../public/assets/03.jpg"
import image_04 from "../../../public/assets/04.jpg"
import { RiDoubleQuotesL } from "react-icons/ri";
import { BsBuildings } from "react-icons/bs";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaCompass } from "react-icons/fa";
import { FaSubway } from "react-icons/fa";
import Link from 'next/link';
function page() {
  return (
    <div>
      {/* Banner Title */}
      <div className="h-40 md:h-50 lg:h-60 flex flex-col justify-center items-center "
       style={{ backgroundImage: `url(${aboutBanner.src})`,backgroundSize:"cover", backgroundPosition:"center" }}>
           <h2 className="text-black text-2xl text-center ">About Us</h2>
           <div className=" divider h-[1px] w-24 bg-[#b99470] mx-auto "></div>
      </div>

      {/* About Main Section */}
      <div className="bg-[#f2f2f3] flex flex-col xl:gap-14  justify-center items-center py-10 lg:py-36 px-6 lg:px-60 ">

        {/* Our Hotel  */}

        <div className="lg:flex  lg:items-center ">
        <div className="lg:hidden "><Image src={image_01} ></Image></div>
        <div className="  flex flex-col justify-center py-10 lg:py-30 px-6 lg:w-1/2 lg:pr-20 lg:pl-0">
        <h2 className="text-black text-2xl ">Our Hotel</h2>
        <div className=" divider h-[1px] w-24 bg-[#b99470]  "></div>
        <p className="text-[#656a70] text-sm mb-8 lg:mr-30 leading-6"> Nullam tincidunt tellus vel nibh facilisis, in vestibulum metus volutpat.
           Suspendisse vestibulum, purus pulvinar commodo commodo, sem nisi luctus tellus, nec suscipit purus nisi vel tellus.<br/> <br/>

Ut eget eros cursus augue gravida imperdiet. Sed vitae lobortis tortor. In justo eros, blandit ac dapibus vitae, gravida molestie enim. Praesent dictum ligula vitae.</p>
        </div>
        <div className="hidden lg:block  lg:w-1/2 "><Image src={image_01} ></Image></div>
        
      </div>

        {/* The Location  */}
            <div className="lg:flex  lg:items-center ">
        <div className="lg:w-1/2 "><Image src={image_03} ></Image></div>
        <div className="  flex flex-col justify-center py-10 lg:py-30 px-6 lg:w-1/2 lg:pl-20">
        <h2 className="text-black text-2xl ">The Location </h2>
        <div className=" divider h-[1px] w-24 bg-[#b99470]  "></div>
        <p className="text-[#656a70] text-sm mb-8 lg:mr-30 leading-6"> Nullam tincidunt tellus vel nibh facilisis, in vestibulum metus volutpat.
           Suspendisse vestibulum, purus pulvinar commodo commodo, sem nisi luctus tellus, nec suscipit purus nisi vel tellus.<br/> <br/>

Ut eget eros cursus augue gravida imperdiet. Sed vitae lobortis tortor. In justo eros, blandit ac dapibus vitae, gravida molestie enim. Praesent dictum ligula vitae.</p>
        </div>
        
        
      </div>

          {/* Hotel Services */}

          <div className="lg:flex  lg:items-center ">
        <div className="lg:hidden "><Image src={image_04} ></Image></div>
        <div className="  flex flex-col justify-center py-10 lg:py-30 px-6 lg:w-1/2 lg:pl-0 lg:pr-20">
        <h2 className="text-black text-2xl ">Hotel Services</h2>
        <div className=" divider h-[1px] w-24 bg-[#b99470]  "></div>
        <p className="text-[#656a70] text-sm mb-8 lg:mr-30 leading-6"> Nullam tincidunt tellus vel nibh facilisis, in vestibulum metus volutpat.
           Suspendisse vestibulum, purus pulvinar commodo commodo, sem nisi luctus tellus, nec suscipit purus nisi vel tellus.<br/> <br/>

Ut eget eros cursus augue gravida imperdiet. Sed vitae lobortis tortor. In justo eros, blandit ac dapibus vitae, gravida molestie enim. Praesent dictum ligula vitae.</p>
        </div>
        <div className="hidden lg:block  lg:w-1/2 "><Image src={image_04} ></Image></div>
        
      </div>

  
      </div>

      <div className="bg-white flex flex-col  justify-center items-center py-10 lg:py-36 px-6 lg:px-60 ">
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
}

export default page