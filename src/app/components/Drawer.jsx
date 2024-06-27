import React from 'react'
import { BiSolidDish } from "react-icons/bi";
import Link from 'next/link';
import { Button} from '@mui/material';
function Drawer() {
  return (
    <div className=''>
        <div className="drawer z-30 ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar ">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal ">
          {/* Navbar menu content here */}
          <li>
            <Link href="/" className='text-gray-700 hover:text-gray-900 '>Home</Link>
          </li>
          <li>
            <Link href="/about" className='text-gray-700 hover:text-gray-900'>About</Link>
            </li>
          <li>
            <Link href="/contact" className='text-gray-700 hover:text-gray-900'>Contact</Link>
            </li>
            <li>
            <Link href="/rooms" className='text-gray-700 hover:text-gray-900'>Rooms</Link>
            </li>
        </ul>
      </div>
    </div>
    {/* Page content here */}

  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 ">
      {/* Sidebar content here */}
      <li>
            <Link href="/" className='text-white text-2xl  '>Home</Link>
          </li>
          <li>
            <Link href="/about" className='text-white text-2xl '>About</Link>
            </li>
          <li>
            <Link href="/contact" className='text-white text-2xl '>Contact</Link>
            </li>
           <li> <Link href="/rooms" className='text-white text-2xl '>Rooms</Link>
            </li>
            
    </ul>
  </div>
</div>
    </div>
  )
}

export default Drawer