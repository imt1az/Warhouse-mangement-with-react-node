import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {image, _id} = product;
    const navigate = useNavigate();

    const handleDetail =(id)=>{
           navigate(`/inventory/${id}`);
           
          
    }
  
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="p-8 rounded-t-lg h-96" src={image} alt="" />

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          
        </h5>

        
        <div className="">
          {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">${service.price}</span> */}
          <button
            onClick={()=>handleDetail(product._id)}
            className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Details
          </button>
          {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">${service.price}</span> */}
         
        </div>
      </div>
    </div>
    );
};

export default Product;