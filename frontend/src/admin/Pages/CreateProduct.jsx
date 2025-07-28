import React from "react";
import { uploadArea } from "../../assets/images";
import { Formik, Form } from "formik";
const CreateProduct = () => {
  return (
    <section className="w-full pt-20 font-montserrat px-3">
     
        <div className="flex gap-2 items-center mt-4">
            <label htmlFor="image1">
              <img src={uploadArea} alt="Upload Area" className="w-30"/>
              <input type="file" className="hidden" id="image1" />
            </label>
            <label htmlFor="image2">
              <img src={uploadArea} alt="Upload Area" className="w-30"/>
              <input type="file" className="hidden" id="image2" />
            </label>
            <label htmlFor="image3">
              <img src={uploadArea} alt="Upload Area" className="w-30" />
              <input type="file" className="hidden" id="image3" />
            </label>
            <label htmlFor="image4">
              <img src={uploadArea} alt="Upload Area" className="w-30" />
              <input type="file" className="hidden" id="image4" />
            </label>
        </div>
        

        <div className="mb-2">
          <label>Product name</label> <br />
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-1.5"
            placeholder="e.g. Bapesta"
          />
        </div>
        <div className="mb-2">

          <label>Product description</label> <br />
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-1.5"
            placeholder="Write description here"
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row  md:items-center gap-4 mb-2">
          <div>
            <label className="">Category</label>
            <br />
            <select className="border border-gray-300 rounded px-3 py-1.5">
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <label className="">Sub Category</label>
            <br />
            <select className="border border-gray-300 rounded px-3 py-1.5">
              <option value="Topwear">Topwear</option>
              <option value="WomBottomwearen">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          <div>
            <label>Price</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-1.5"
              placeholder="500"
            />
          </div>
        </div>

        <div className="mb-2 flex gap-2">
          <p className="border px-2  rounded border-gray-300">S</p>
          <p className="border px-2  rounded border-gray-300">M</p>
          <p className="border px-2  rounded border-gray-300">L</p>
          <p className="border px-2  rounded border-gray-300">XL</p>
        </div>

        <div className="mb-2">
          <label className="text-sm flex  items-center gap-2">
            <input type="checkbox" className="accent-black" /> 
             Add to best seller
          </label>
        </div>

        <div>
            <button className="bg-black text-white px-3 py-1.5 rounded hover:bg-neutral-800 cursor-pointer">Create product</button>
        </div>
    
    </section>
  );
};

export default CreateProduct;
