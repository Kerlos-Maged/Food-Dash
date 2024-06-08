import React from 'react'
import Product from './Product'
import { products } from '../../constants'

const ProductsList = () => {
  return (
    <div className="flex mt-10 py-12 items-center lg:justify-between justify-center lg:gap-20 gap-8 flex-wrap lg:px-10">
      {
        products.map((e) => { 
          return (
            <Product 
              key={e.orange} 
              orange={e.orange} 
              black={e.black}
              img={e.img}
              price={e.price}
              rating={e.rating}
            />
          )
        })
      }
    </div>
  )
}

export default ProductsList
