import React from 'react';
import roomBanner from "../../../public/assets/08.jpg";
import image_34 from "../../../public/assets/34.jpg";
import image_35 from "../../../public/assets/35.jpg";
import image_37 from "../../../public/assets/37.jpg";
import Image from 'next/image';
import Link from 'next/link';

const Room = [
    {
        image: image_34,
        title: "Single Room",
        price: 600,
    },
    {
        image: image_35,
        title: "Double Room",
        price: 1000,
    },
    {
        image: image_37,
        title: "Suite Room",
        price: 2500,
    },
    {
        image: image_34,
        title: "Family Room",
        price: 3200,
    },
];

function Page() {
    return (
        <div>
            {/* Banner Title */}
            <div className="h-40 md:h-50 lg:h-60 flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${roomBanner.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <h2 className="text-black text-2xl text-center">All Rooms</h2>
                <div className="divider h-[1px] w-24 bg-[#b99470] mx-auto"></div>
            </div>

            {/* Room Main Section */}
            <div className="bg-[#f2f2f3] flex flex-col xl:gap-14 justify-center items-center py-10 lg:py-36 px-6 lg:px-60">
                
                    <div className="lg:grid lg:grid-cols-2 lg:gap-10 mb-10 lg:mb-0" >
                    {Room.map((item, index) => (
                        <div key={index} className=" mb-10 border rounded-lg bg-white">
                            <Image src={item.image} alt={item.title}  width={600} height={400} className="mb-8" />
                            <h1 className="text-xl font-bold text-black ml-8">{item.title}</h1>
                            <div className="divider"></div>
                            <div className="mb-8 mx-8 flex justify-between">
                                <button className='bg-[#b99470] text-white px-2 py-2 hover:bg-[#b8895b] w-1/2'>₹ {item.price} / Night</button>
                               <button className='underline underline-offset-8 self-end text-[#656a70] mt-[10px]'>Book Now</button>
                            </div>
                        </div>
                   
                ))}
                 </div>
            </div>
        </div>
    );
}

export default Page;
