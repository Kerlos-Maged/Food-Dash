import { Button } from '@/components/ui/button'
import React from 'react'
import { advas, foodArray, offers, regions } from '../../../constants'
import Image from 'next/image';
import ProductsList from '@/components/ProductsList';
import Slider from '@/components/Slider';
import Link from 'next/link';
import BasicGrid from '@/components/ui/grid';


const HomePage = () => {
  return (
    <>
      {/* HERO CONTAINER  */}
      <section className='h-[calc(100vh_-_80px)] bg-l_orange'>
        {/* HERO CONTAINER  */}
        <div className="relative container h-full flex lg:flex-row justify-between items-center flex-col">
          {/* TEXT CONTAINER  */}
          <div className="lg:w-1/2 flex flex-col gap-8 lg:text-start w-full text-center h-1/2 items-center lg:items-start justify-center">
            <h1 className='md:text-6xl text-5xl font-extrabold lg:leading-[80px] text-font-active max-w-[700px]'>
              <span className='text-primary'>Quick </span>and<span className='text-primary'> Tasty</span> 
              <span className='text-primary'>Food Delivered </span>with <span className='text-primary'>a Dash of Speed</span>
            </h1>
            <div className="flex flex-col gap-6 max-w-[270px] w-[80%] lg:items-stretch ">
              <Button variant='primary'>Order Now</Button>
              <Button variant='secondary'>Track Order</Button>
            </div>
          </div>
          {/* IMAGE CONTAINER  */}
          <div className="md:w-1/2 flex justify-center lg:items-center relative h-1/2 ">
            <Image src={'/home.png'} alt="" width={500} height={450} className='object-contain' />
          </div>
        </div>
      </section>
      {/* ADVANTAGES CONTAINER  */}
      <section className="h-fit lg:absolute relative w-full container lg:left-1/2 transform lg:-translate-x-1/2 lg:-bottom-10 md:bg-white rounded-2xl shadow-[#929292] md:shadow-lg">
        <div className="mt-8 size-full lg:py-5 lg:mt-0 lg:px-4 py-12 flex items-center justify-center flex-wrap md:gap-0 gap-8">
          {
            advas.map((e) => { 
              return (
                <div key={e.id} className='text-wrap lg:w-1/3 md:w-1/2 w-full flex items-center justify-center gap-5 px-3 md:flex-row md:text-start flex-col text-center'>
                  {/* IMAGE CONTAINER  */}
                  <div className="">
                    <Image src={e.img} alt="Icon" width={90} height={90} className='object-contain' />
                  </div>
                  {/* TEXT CONTAINER  */}
                  <div className="flex flex-col gap-3 justify-center max-w-[200px] lg:w-2/3">
                    <h2 className='text-font-h font-extrabold text-3xl'>{e.title}</h2>
                    <p className='text-font-p text-lg'>{e.text}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
      {/* DELIVERD PAGE  */}
      <section className='py-12 lg:mt-24'>
          <div className="container flex flex-col ">
            {/* HEAD CONTAINER  */}
            <div className="flex-col lg:flex-row text-center lg:text-start flex justify-between items-center gap-4">
              <h2 className='lg:leading-relaxed  font-extrabold text-5xl'>Our <span className='text-primary'>Best Delivered</span> <br /> Indian Dish</h2>
              <p className='text-font-p text-lg'>It’s Not Just About Bringing You Good Food <br /> From Restaurants, We Deliver You Experience</p>
            </div>
            {/* ITEMS CONTAINER  */}
            <div className="mt-12 flex gap-8 flex-wrap items-center lg:justify-between justify-center py-12">
              {
                foodArray.map((e, i)=>{
                  return (
                    <div key={e.name} >
                      {/* IMAGE CONTAINER  */}
                      <div className="transform hover:animate-spin">
                        <Image src={e.image} alt="" width={300} height={200} className='object-contain'/>
                      </div>
                      {/* TEXT CONTAINER  */}
                      <div className="flex text-center flex-col gap-4">
                        <h2 className='text-2xl text-font-black font-semibold'>{e.name}</h2>
                        <button className='flex items-center justify-center text-primary font-semibold text-xl'>
                          Order Now 
                          <Image src={'/arrowRight.png'} alt="" width={26} height={26} className='size-[26px]'/>
                        </button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      </section>
      {/* MENU PAGE CONTAINER  */}
      <Slider/>
      {/* REGULAR MENU CONTAINER  */}
      <section className='py-12'>
        <div className="container">
          <div className="flex-col lg:flex-row text-center lg:text-start flex justify-between items-center gap-8">
            <div className="flex flex-col lg:gap-2 gap-8">
              <h2 className='lg:leading-relaxed  font-extrabold text-5xl'>Our <span className='text-primary'>Regular</span> Menu</h2>
              <p className='text-font-p text-lg'>There Are Our Regular Menus.<br /> You Can Order Anything You Like.</p>
            </div>
            <Button className={'text-lg px-8'} variant={'primary'}>See All</Button>
          </div>
          <ProductsList/>
        </div>
      </section>
      {/* OFFERS PAGE  */}
      <section className='py-12'>
        <div className="container h-max flex gap-4 items-center justify-center flex-wrap">
          <div className='relative'>
            <Link href={'/'}><Image src={'/offer3.png'} alt='' width={500} height={500} className='object-contain'/></Link>
          </div>
          <div className='relative flex flex-col gap-8'>
            <Link href={'/'}><Image src={'/offer2.png'} alt=''  width={620} height={250} className='object-contain'/></Link>
            <Link href={'/'}><Image src={'/offer1.png'} alt=''  width={620} height={350} className='object-contain'/></Link>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default HomePage
