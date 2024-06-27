'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import image_34 from "../../../public/assets/34.jpg";
import image_35 from "../../../public/assets/35.jpg";
import image_37 from "../../../public/assets/37.jpg";
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

function RoomCard() {
  const [page, setPage] = useState(1);
  const [roomsPerPage, setRoomsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setRoomsPerPage(2);
      } else {
        setRoomsPerPage(1);
      }
    };

    window.addEventListener('resize', handleResize);

    // Set the initial value based on current window size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedRooms = Room.slice((page - 1) * roomsPerPage, page * roomsPerPage);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {paginatedRooms.map((item, index) => (
          <div className="border rounded-lg bg-white" key={index}>
            <Image src={item.image} alt={item.title} layout="responsive" width={600} height={400} className="mb-8" />
            <h1 className="text-xl font-bold text-black ml-8">{item.title}</h1>
            <div className="divider"></div>
            <div className="mb-8 mx-8 flex justify-between">
              <button className='bg-[#b99470] text-white px-2 py-2 hover:bg-[#b8895b] w-1/2'>₹ {item.price} / Night</button>
              <Link href={"/"}><p className='underline underline-offset-8 self-end text-[#656a70] mt-[10px]'>View More</p></Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          count={Math.ceil(Room.length / roomsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
}

export default RoomCard;
