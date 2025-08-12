import React from 'react'
import { getAllOrderOptions } from '../../react-queries/adminQueries'
import { useQuery } from '@tanstack/react-query'
import { Package } from 'lucide-react';

const Orders = () => {

  const {data, isPending, error} = useQuery(getAllOrderOptions);
  return (
    <section className='w-full pt-20 font-montserrat px-3'>

        <h1 className='font-montserrat text-2xl'>CART TOTALS</h1>
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {data &&
          data.orders?.map((order, index) => 
             <div className='border border-slate-300 rounded text-xs py-2 px-4 mt-2' key={index}>
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>

                    <div>
                      <Package size={70} className='border border-slate-400 py-2'/>
                    </div>

                    <div>
                        {order.items.map((item, index) => 
                          <p key={index}>{item.name}, {item.size}</p>
                      
                        )}
                       
                        <div className='py-2'>
                          <p>{order.firstname + " " + order.lastname}</p>
                          <p>{order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipcode}, {order.address.country}</p>
                        </div>
                    </div>

                    <div className=''>
                          <p>Items: {order.items.length}</p>
                          <p>Method: COD</p>
                          <p>Date:{new Date(order.createdAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}</p>
                    </div>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-3 items-center py-2'>
                        <p>₱ {order.totalPrice.toFixed(2)}</p>
                        <select className='border border-slate-300 rounded px-2 py-1'>
                            <option value="packing">Packing</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="out of delivery">out of delivery</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                  </div>
              </div>
          
          )
        }

       
    </section>
  )
}

export default Orders
