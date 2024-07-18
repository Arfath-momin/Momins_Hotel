'use client';
import room_details from "../utils/room_details";
const RoomCard = () => {
  const Rooms = room_details;
  return (
  
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {Rooms.map((item, index) => (
          <div className="border rounded-lg bg-white" key={index}>
            <img src={item.image} alt={item.roomType} layout="responsive" width="" height="" className="mb-8 w-full"  />
            <h1 className="text-xl font-bold text-black ml-8">{item.roomType}</h1>
            <div className="divider"></div>
            <div className="mb-8 mx-8 flex justify-between">
              <button className='bg-[#b99470] text-white px-2 py-2 hover:bg-[#b8895b] w-1/2'>₹ {item.price} / Night</button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default RoomCard;


