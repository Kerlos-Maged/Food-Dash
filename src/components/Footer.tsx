import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='relative py-12 border-t-2 border-primary border-dashed bg-l_orange' id='footer'>
      <div className="container size-full flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* FIRST PART */}
        <div className="flex flex-col gap-4 md:w-1/3">
          {/* UPPER PART  */}
          <div className='flex flex-col gap-6 text-font-gray' >  
            <Image src={'/Frame 18.png'} alt="" width={170} height={70} className="cursor-pointer"/>
            <p className='text-lg'>Food Dash ©2023 All Rights Reserved</p>
            <p className='text-lg'>By - <span className='text-primary font-semibold'>KERLOS MAGED</span></p>
          </div>
          {/* LOWER PART  */}
          <div className="">
            <h2 className="text-3xl text-primary font-extrabold">Follow Us On</h2>
            <div className="mt-6 flex gap-6">
              <Link href={'/'}><Image src='/facebook.png' alt='' width={28} height={28} className='cursor-pointer'/></Link>
              <Link href={'/'}><Image src='/instagram.png' alt='' width={28} height={28} className='cursor-pointer'/></Link>
              <Link href={'/'}><Image src='/twitter.png' alt='' width={28} height={28} className='cursor-pointer'/></Link>
              <Link href={'/'}><Image src='/linkedin.png' alt='' width={28} height={28} className='cursor-pointer'/></Link>
              <Link href={'/'}><Image src='/basketball.png' alt='' width={28} height={28} className='cursor-pointer'/></Link>
            </div>
          </div>
        </div>
        {/* SECONDE PART  */}
        <div className="flex flex-wrap items-center justify-between gap-8 w-2/3">
          <div className="flex flex-col gap-3">
            <h3 className='text-primary font-extrabold text-3xl'>Menu</h3>
            <ul className='text-font-gray flex flex-col gap-4 text-lg'>
              <li><Link href={'/'}>Home </Link></li>
              <li><Link href={'/'}>Offers</Link></li>
              <li><Link href={'/'}>Service</Link></li>
              <li><Link href={'/'}>About Us</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className='text-primary font-extrabold text-3xl'>Information</h3>
            <ul className='text-font-gray flex flex-col gap-4 text-lg'>
              <li><Link href={'/'}>Home </Link></li>
              <li><Link href={'/'}>Quality</Link></li>
              <li><Link href={'/'}>Make a choice</Link></li>
              <li><Link href={'/'}>Fast Delivery</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className='text-primary font-extrabold text-3xl'>Contact</h3>
            <ul className='text-font-gray flex flex-col gap-4 text-lg'>
              <li><Link href={'/'}>+1233456789</Link></li>
              <li><Link href={'/'}>Explore</Link></li>
              <li><Link href={'/'}>Info@FoodDash.com</Link></li>
              <li><Link href={'/'}>Giza</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
