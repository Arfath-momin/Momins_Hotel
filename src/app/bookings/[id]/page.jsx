'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import DateRangePicker from '@/app/components/DatePicker'
import RoomPreview from '@/app/components/RoomPreview'
import room from '@/app/utils/room_details'  // Adjust the import path according to your project structure

const countries = () => {
  return [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    // Other countries...
  ];
}

function Page() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [countryOfOrigin, setCountryOfOrigin] = useState("")
  const [townCity, setTownCity] = useState("")
  const [pincode, setPincode] = useState("")
  const [state, setState] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [single_room, setSingleRoom] = useState({
    id: 0,
    name: "",
    description: "",
    price: 0,
    qty: 0,
    image: "",
  })

  const router = useRouter()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const singleRoom = room.find(room => room.id === parseInt(id))
 
      setSingleRoom(singleRoom)
    }
  }, [id])
  // console.log(single_room)
  const totalNights = startDate && endDate ? (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) : 0
//   const price = single_room ? single_room.price : 0

//  const qty = single_room ? single_room.qty  : 1
//  console.log(qty)
console.log(single_room)
  

  const handleData = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`https://momins-hotel.vercel.app/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          countryOfOrigin,
          townCity,
          pincode,
          state,
          phoneNumber,
          emailAddress,
          single_room,
          startDate,
          endDate,
          roomId: id,
        })
      })

      if (res.ok) {
        router.push(`bookings/confirm`) // Redirect on success
      } else {
        console.error('Submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }
  return (
    <div className="bg-[#f2f2f3] gap-10 flex flex-col xl:gap-14 justify-start items-center py-10 lg:py-36 px-2 lg:px-60">
      {/* Room Preview */}
      {/* Add RoomPreview component if necessary */}

      {/* Billing Details */}
      <div className="w-full">
        <h2 className='text-black text-2xl mb-6 text-center'>Billing Details</h2>
        <form onSubmit={handleData} className='grid lg:grid-cols-2 lg:gap-6'>
          <div className="">
            <label className='text-black text-lg mb-2' htmlFor="firstName">First Name</label>
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className='w-full text-black pl-2 py-2 mb-6 border border-[#c0c6c7] border-1 bg-white ' id="firstName" />
          </div>
          <div className="">
            <label className='text-black text-lg mb-2' htmlFor="lastName">Last Name</label>
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className='w-full text-black pl-2 py-2 mb-6 border border-[#c0c6c7] border-1 bg-white' id="lastName" />
          </div>
          <div className="lg:col-span-2">
            <label className='text-black text-lg mb-2' htmlFor="countryOfOrigin">Country Of Origin</label>
            <select onChange={(e) => setCountryOfOrigin(e.target.value)} value={countryOfOrigin} className='w-full pl-2 text-black py-2 mb-6 border border-[#c0c6c7] border-1 bg-white' id="countryOfOrigin">
              <option value="">Select Country</option>
              {countries().map((country) => (
                <option key={country.code} value={country.code}>{country.name}</option>
              ))}
            </select>
          </div>
          <div className="">
            <label className='text-black text-lg mb-2' htmlFor="townCity">Town / City</label>
            <input onChange={(e) => setTownCity(e.target.value)} value={townCity} type="text" className='w-full pl-2 text-black py-2 mb-6 border border-[#c0c6c7] border-1 bg-white' id="townCity" />
          </div>
          <div className="">
            <label className='text-black text-lg mb-2' htmlFor="pincode">Pin Code</label>
            <input onChange={(e) => setPincode(e.target.value)} value={pincode} type="number" className='w-full pl-2 text-black py-2 mb-6 border border-[#c0c6c7] border-1 bg-white' id="pincode" />
          </div>
          <div className="lg:col-span-2">
            <label className='text-black text-lg mb-2' htmlFor="state">State</label>
            <input onChange={(e) => setState(e.target.value)} value={state} type="text" className='w-full pl-2 text-black py-2 mb-6 border border-[#c0c6c7] border-1 bg-white' id="state" />
          </div>
          <div className="lg:col-span-2">
            <label className='text-black text-lg mb-2' htmlFor="phoneNumber">Phone Number</label>
            <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="tel" className='w-full lg:col-span-1 pl-2 text-black py-2 mb-6 border border-[#c0c6c7] border-1 bg-white' id="phoneNumber" />
          </div>
          <div className="lg:col-span-2">
            <label className='text-black text-lg mb-2' htmlFor="emailAddress">Email Address</label>
            <input onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} type="email" className='w-full pl-2 text-black py-2 mb-6 border border-[#c0c6c7] border-1 bg-white' id="emailAddress" />
          </div>
          <div className="lg:col-span-2">
            <label className='w-full text-black text-lg mb-2' htmlFor="dateRange">Select Dates</label>
            <DateRangePicker setStartDate={setStartDate} setEndDate={setEndDate} />
          </div>
          {single_room && <RoomPreview room={single_room} totalNights={totalNights} />}
          <div className="lg:col-span-2 flex justify-center">
            <button className="bg-[#2e2e2e] text-white px-4 py-2 text-center transition-all duration-400 rounded" type="submit">Confirm Order</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
