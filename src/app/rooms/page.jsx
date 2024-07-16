'use client';
import React from 'react';
import roomBanner from "../../../public/assets/08.jpg";

const getRooms = async () => {
  try {
    const res = await fetch("https://momins-hotel.vercel.app/api/rooms", {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return { Room: [] }; // Provide a default value
  }
};

const Page = async () => {
  let Room = [];
  Room = await getRooms();

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
          <div className="lg:grid lg:grid-cols-2 lg:gap-10 mb-10 lg:mb-0">
            {Room.map((item, index) => (
              <div key={index} className="mb-10 border rounded-lg bg-white">
                <img src={item.image} alt={item.roomType} className="mb-8 w-full lg:h-[400px]" />
                <h1 className="text-xl font-bold text-black ml-8">{item.roomType}</h1>
                <div className="divider"></div>
                <div className="mb-8 mx-8 flex justify-between">
                  <button className='bg-[#b99470] text-white px-2 py-2 hover:bg-[#b8895b] w-1/2'>₹ {item.price} / Night</button>
                  <a href={`/bookings/${item._id}`} className='underline underline-offset-8 self-end text-[#656a70] mt-[10px]'>Book Now</a>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Page;
