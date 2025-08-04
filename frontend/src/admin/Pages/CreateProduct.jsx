
import { uploadArea } from "../../assets/images";
import { Formik, Form,Field } from "formik";
import { createProductSchema } from "../../validation";
import { useState } from "react";
import { createProductQuery } from "../../react-queries/adminQueries";
import { useMutation } from "@tanstack/react-query";

const CreateProduct = () => {
  const [imagePreview, setImagePreview] = useState(null)

  const createProductMutation = useMutation(createProductQuery)
  
  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFieldValue("image", file); // Save file to Formik state
    }
  };

  return (
    <section className="w-full pt-20 font-montserrat px-3">
      <Formik initialValues={{
        name:"",
        description:"",
        category:"",
        subCategory:"",
        price: "",
        size: [],
        isBestSeller: false,
        stock: "",
        image:"",
      }} 
      validationSchema={createProductSchema}

      onSubmit={(values, actions)=>{
        
        createProductMutation.mutate(values)
        actions.resetForm();
        setImagePreview(null)
      }}

      
      >
        {(props)=>
          <Form  encType="multipart/form-data">
        <div className="mt-4  w-40">
                  <label className="text-center">Upload Image</label>
              <label htmlFor="image">
                 {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-40 h-40 object-cover  rounded"
                  />
                ) : (<img
                    src={uploadArea}
                    alt="Preview"
                    className="w-40 h-40 object-cover  rounded"
                  />)}
                <input type="file" className="hidden" id="image" name="image" accept='image/*' onChange={(event) =>
                    handleImageChange(event, props.setFieldValue)
                  }/>
             {props.touched.image && props.errors.image && <p className="text-xs text-red-500">{props.errors.image}</p>}
                  
              </label>
        </div>
        
        <div className="mb-2">
          <label>Product name</label> <br />
          <Field
            type="text"
            className={`w-full ${props.touched.name && props.errors.name ? 'border-red-500' : 'border-gray-300'} border  rounded px-3 py-1.5`}
            placeholder="e.g. Bapesta"
            name='name'
          />
          {props.touched.name && props.errors.name && <p className="text-xs text-red-500">{props.errors.name}</p>}
        
        </div>

        <div className="mb-2">

          <label>Product description</label> <br />
          <Field as='textarea'
            className={`w-full ${props.touched.description && props.errors.description ? 'border-red-500' : 'border-gray-300'} border  rounded px-3 py-1.5`}
            placeholder="Write description here"
            name="description"
          />
          {props.touched.description && props.errors.description && <p className="text-xs text-red-500">{props.errors.description}</p>}

        </div>

        <div className="flex flex-col md:flex-row  md:items-center gap-4 mb-2">
          <div>
            <label className="">Category</label>
            <br />
            <Field as='select' name="category" className={`${props.touched.category && props.errors.category ? 'border-red-500' : 'border-gray-300'} border rounded px-3 py-1.5`}>
                              <option value="" >--- Select ---</option>

              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </Field>
          {props.touched.category && props.errors.category && <p className="text-xs text-red-500">{props.errors.category}</p>}


          </div>
          <div>
            <label className="">Sub Category</label>
            <br />
              <Field as='select' name="subCategory" className={`${props.touched.subCategory && props.errors.subCategory ? 'border-red-500' : 'border-gray-300'} border rounded px-3 py-1.5`}>
                <option value="" >--- Select ---</option>
                <option value="Topwear" >Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
            </Field>
          {props.touched.subCategory && props.errors.subCategory && <p className="text-xs text-red-500">{props.errors.subCategory}</p>}

          </div>

          <div>
            <label>Price</label>
            <Field
              type="number"
              className={`w-full ${props.touched.price && props.errors.price ? 'border-red-500' : 'border-gray-300'} border  rounded px-3 py-1.5`}
              placeholder="500"
              name="price"
              min='1'
            />
          {props.touched.price && props.errors.price && <p className="text-xs text-red-500">{props.errors.price}</p>}

         

          </div>
          <div>
            <label>Stock</label>
            <Field
              type="number"
              className={`w-full ${props.touched.stock && props.errors.stock ? 'border-red-500' : 'border-gray-300'} border  rounded px-3 py-1.5`}
              placeholder="500"
              name="stock"
            />
          {props.touched.stock && props.errors.stock && <p className="text-xs text-red-500">{props.errors.stock}</p>}

          </div>
        </div>

        <div className="mb-2 ">
          <div className="flex gap-2">
            <label className={`border px-2 rounded cursor-pointer ${props.values.size.includes('S') ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`} htmlFor='S' >S
            <Field type="checkbox" name="size" value='S' id="S"  className='hidden'/>
          </label>
         
          <label className={`border px-2 rounded cursor-pointer ${props.values.size.includes('M') ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`} htmlFor='M'>M
            <Field type="checkbox" name="size" value='M' id="M"  className='hidden'/>
          </label>
          <label className={`border px-2 rounded cursor-pointer ${props.values.size.includes('L') ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`} htmlFor='L'>L
            <Field type="checkbox" name="size" value='L' id="L"  className='hidden'/>

          </label>
          <label className={`border px-2 rounded cursor-pointer ${props.values.size.includes('XL') ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`} htmlFor='XL'>XL
            <Field type="checkbox" name="size" value='XL' id="XL"  className='hidden'/>
          </label>

          </div>
          
            {props.touched.size && props.errors.size && <p className="text-xs text-red-500">{props.errors.size}</p>}

        </div>

        <div className="mb-2 ">
          <label className="text-sm flex  items-center gap-2">
            <Field type="checkbox" className="accent-black" name="isBestSeller" /> 
             Add to best seller 
          </label>
        </div>

          <div>
              <button type="submit" disabled={createProductMutation.isPending} className={`bg-black text-white px-3 py-1.5 rounded hover:bg-neutral-800 cursor-pointer ${ createProductMutation.isPending && 'opacity-30'}`}>{createProductMutation.isPending ? 'Creating...' : 'Create product'}</button>
          </div>

          </Form>
        }
      </Formik>
       
    
    </section>
  );
};

export default CreateProduct;
