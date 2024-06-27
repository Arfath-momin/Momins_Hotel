import React from 'react';

import { Button} from '@mui/material';
import { BiSolidDish } from "react-icons/bi";
import Link from 'next/link';
import { Radley } from 'next/font/google';
import Drawer from '../components/Drawer';


const radley = Radley({ subsets: ['latin'], weight: '400' }); 

function Header() {
  return (
    <header className='grid md:grid-cols-12  items-center justify-center py-4 gap-4 md:px-8  bg-white relative top-0 w-full'>
      
      
      <div className='m-auto md:col-span-4  md:flex md:justify-start w-full'>
     <Link href={"/"}><h3 className={`${radley.className} text-black text-4xl`} >Momin's Hotel</h3></Link> 
      </div>
      <nav className='md:col-span-8  md:flex md:justify-end '>
        <ul className='flex gap-3 items-center'>
          
        <Drawer />
        <Button startIcon={<BiSolidDish />} href='/contact' className='text-white bg-[#b99470]  px-4 py-2 hover:bg-[#b8895b]  hover:text-white rounded '>Book Now</Button>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
