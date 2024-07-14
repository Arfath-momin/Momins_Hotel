'use client'
import { TiTick } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";



function page() {

    return (
        <div className='bg-[#f2f2f3] gap-10 flex flex-col xl:gap-14 justify-start items-center py-10 lg:py-36 px-2 lg:px-60'>
           
            <div className="space-y-2">
                <TiTick size={42} color='#ffffff' style={{ backgroundColor: "#b99470", borderRadius: "50%", margin: "auto" }} />
                <h2 className='text-black text-2xl mb-6 text-center'>Booking Complete!</h2>
                <div className="bg-white rounded-sm  p-4 flex flex-col lg:flex-row justify-start items-center space-y-2 lg:space-x-4 lg:space-y-0">
                <IoMdMail size={26} color='#b99470' />
                <h3 className='text-black text-md text-center font-extralight'>
                    A member of our team will contact you shortly to complete the payment process.
                </h3>
            </div>

            </div>

        
            <div className="">
            <h2 className="text-black text-2xl text-center">Thank You</h2>
            <div className=" divider h-[1px] w-24 bg-[#b99470] m-auto mb-5 mt-2 "></div>
            <p className="text-[#656a70] text-sm mb-8  leading-6 text-center "> Nullam et aliquam leo. Pellentesque eget sapien massa. Cras ac est faucibus, 
          auctor urna sed, mollis magna. Vestibulum a ante porttitor,
           tincidunt neque in, semper ipsum. Morbi hendrerit sed risus in venenatis.</p>
            </div>

        

        </div>
    )
}

export default page