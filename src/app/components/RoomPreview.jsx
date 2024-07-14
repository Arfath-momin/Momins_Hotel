import React from 'react';


function RoomPreview({ room , totalNights } ) {
  console.log(room)
   const totalPrice = room.price * totalNights
  

  
  if (!room) {
    console.log(room)
    return null;
  }

  return (
    <div className="w-full mb-6">
      <h2 className='text-black text-2xl mb-4 text-center'>Room Preview</h2>
      <div className="flex flex-col items-center">
        <img src={room.image} alt="Room Image" className="w-full h-64 object-cover mb-4" /> {/* Replace with room.image */}
        <div className="text-black text-lg mb-2">{room.roomType}</div>
        <div className="text-black text-lg mb-2">Nights: {totalNights}</div>
        <div className="text-black text-lg mb-2">Price: ₹{totalPrice}</div>
       
       
      </div>
    </div>
  );
}

export default RoomPreview;
