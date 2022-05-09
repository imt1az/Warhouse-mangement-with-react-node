import axios from "axios";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {toast } from 'react-toastify';

const AddItems = () => {
    const [user, loading, error] = useAuthState(auth);

    const titleRef = useRef('');
    const desRef = useRef('');
    const quantityRef = useRef('');
    const priceRef = useRef('');
    const email = user.email;
    const imageRef = useRef('')
    
   

    const handleSubmit = (event)=>{
        event.preventDefault();
        const product = {
            title : titleRef.current.value,    
            des : desRef.current.value,
            price : parseInt(priceRef.current.value),
            quantity : parseInt(quantityRef.current.value),
            image : imageRef.current.value,
            email :user.email
       }
       axios.post('https://salty-fjord-90713.herokuapp.com/products',product)
       .then(response =>{
           console.log(response);
           toast('Product Added Successfully')
       })
       
       
        

        console.log(product);
    }
  return (
    <div className="bg-green-200 py-32 px-10 min-h-screen ">
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form onSubmit={handleSubmit} action="">
        <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Added By
            </label>
            <input
              type="text"
             
              placeholder=""
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none" value={user.email} readOnly
            />
          </div>
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Title
            </label>
            <input
            required
              type="text"
             ref={titleRef}
              placeholder="Title"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Description
            </label>
            <input
            required
              type="text"
              ref={desRef}
              placeholder="Description"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Price
            </label>
            <input
            required
              type="text"
              ref={priceRef}
              placeholder="Price"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Quantity
            </label>
            <input
            required
              type="text"
              ref={quantityRef}
              placeholder="Quantity"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Img Url
            </label>
            <input
            required
              type="text"
              ref={imageRef}
              placeholder="Image Url"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>
         

          <div className="text-right">
            <button className="py-3 px-8 bg-green-400 text-white font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
