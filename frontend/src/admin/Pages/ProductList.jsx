import React from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getAllProductOptions, deleteProductOptions } from '../../react-queries/adminQueries'
import {Link} from 'react-router'


const ProductList = () => {
    const {data, isPending, error, refetch} = useQuery(getAllProductOptions)
    const deleteMutation = useMutation({
        ...deleteProductOptions,
        onSuccess:()=>{
            refetch();
        }
    })
  return (
    <section className='w-full pt-20 font-montserrat px-3'>

    <div className="relative overflow-x-auto">

    {isPending && <p>Loading...</p>}
    {error && <p>{error}</p>}
    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

        <tbody>
                {data && data.products?.map((item, index) => 
                     <tr className="bg-white border-b  border-gray-200" key={index}>
                        <td scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>    
                            <img src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`} alt="Product Image"  className='w-15 h-15'/>
                        </td>
                        <th  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                           {item.name}
                        </th>
                        <td className="px-6 py-4">
                            {item.category}

                        </td>
                        <td className="px-6 py-4">
                            ₱{item.price}

                        </td>
                        <td className=" px-6 py-4 flex items-center justify-center  gap-2">
                            <Link className='bg-yellow-500 px-2 py-1 rounded text-white'>Edit</Link>
                            <button onClick={()=> deleteMutation.mutate(item._id)} className='bg-red-500 px-2 py-1 rounded text-white'>Delete</button>
                        </td>
                    </tr>
                
                )}
        
           
       
        </tbody>
    </table>
</div>

    </section>
  )
}

export default ProductList
    