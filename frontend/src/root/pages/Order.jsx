import React from 'react'
import { p_img38 } from '../../assets/images'
import { useQuery } from '@tanstack/react-query'
import { getOrderOptions } from '../../react-queries/userQueries'
const Order = () => {
  const {data, isPending, error} = useQuery(getOrderOptions);

  console.log(data);
  
  return (
    <section className='pt-25'>
                <h1 className='font-montserrat text-4xl mb-4'>Your Orders</h1>
                   {isPending && <p>Loading...</p>}
                  {error && <p>{error}</p>}

                  {data && data.orders.map((order)=> 
                    order.items.map((product, index) => 
                      <div key={index} className='grid grid-cols-1 gap-5 my-3 sm:grid-cols-2 place-content-center border-b border-slate-200 pb-3 text-xs font-montserrat '>
                        <div className='flex gap-4 '>

                          <img src={`${import.meta.env.VITE_BACKEND_URL}/${product.image}`} alt="Product Image" className='w-20 object-contain' />
                            <div>
                              <p>{product.name}</p>
                                <div className='flex gap-3'>
                                  <p>₱ {product.productPrice}</p>
                                  <p>Quantity: {product.quantity}</p>
                                  <p>Size: {product.size}</p>
                                </div>
                                  <p>Date:  {new Date(order.createdAt).toLocaleDateString('en-US', { 
                                        month: 'short', 
                                        day: 'numeric', 
                                        year: 'numeric' 
                                      })} </p>
                                  <p>Payment: COD</p>
                            </div>
                        </div>

                 
                        <div className='flex justify-between items-center '>

                            <div className='flex items-center gap-2'>
                              <p className='bg-green-500 w-3.5 h-3.5 rounded-full'></p>
                                <p>{order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}</p>
                            </div>

                            <div>
                                <button className='border border-slate-300 px-2 py-1 rounded cursor-pointer'>Track Order</button>
                            </div>
                        </div>
              </div>

                  )
                  )}
                

         
           
        
    </section>
  )
}

export default Order
