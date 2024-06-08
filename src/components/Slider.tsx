'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/carousel"
import { regions } from '../../constants'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'

const Slider = () => {
  return (
    <section className='py-12 bg-l_orange '>
      <Carousel   opts={{ loop: true, }}   plugins={[Autoplay({delay: 2000,}), ]}>
        <CarouselContent>
          {
            regions.map((e)=>{
              return (
                <CarouselItem className="md:basis-1/2 lg:basis-1/5 flex items-center justify-center gap-4">
                  <Image src={'/star.png'} alt='' width={60} height={60}/>
                  <h2 className='text-2xl font-semibold'>{e}</h2>
                </CarouselItem>
              )
            })
          }
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default Slider
