import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import BasicRating from './ui/rating'

const Product = ({
  orange,
  black,
  img,
  price,
  rating,
}: {
  orange: string,
  black: string,
  img: string,
  price: string,
  rating: string,
}) => {
  return (
    <div className='relative w-[300px] h-[420px] lg:h-[360px] bg-l_orange rounded-2xl py-6 px-4'>
      <div className="relative w-full flex items-center justify-center pb-2 lg:h-[160px] h-max">
        <Image src={img} alt='' width={225} height={200} className="object-contain lg:absolute -top-[50%] -right-20"/>
      </div>
      <div className="flex flex-col items-between ">
        <h3 className='text-2xl font-semibold'><span className='text-primary'>{orange}</span> {black}</h3>
        <div className="flex text-center items-center gap-4 my-2">
          <BasicRating rate={Number(rating)}/>
          <span className='font-semibold'>({rating})</span>
        </div>
        <div className="flex justify-between items-center">
          <h2 className='text-3xl font-bold'>{price}</h2>
          <Button variant={'primary'}>Buy Now</Button>
        </div>
      </div>
    </div>
  )
}

export default Product
