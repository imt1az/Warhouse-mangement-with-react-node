import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {toast } from 'react-toastify';

import axios from "axios";
import useSingleProduct from "../Hooks/useSingleProduct";
const Inventory = () => {
  const { productId } = useParams();
  // const [product,setProduct] = useSingleProduct(productId);
  const [product, setProduct] = useState({});
  // const [quantity,setQuantity] = useState(0)

  useEffect(() => {
    axios
      .get(`https://salty-fjord-90713.herokuapp.com/inventory/${productId}`)
      .then((response) => {
        const { data } = response;
        setProduct(data);
      });
  }, [product]);

  // Deliver
  const handleDeliver = (event) => {
    event.preventDefault();
    const newItem = { ...product, quantity: product.quantity - 1 };
    // setProduct(newItem);
    const url = `https://salty-fjord-90713.herokuapp.com/inventory/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
          toast('Delivered Successfully')
      });
  };

  // Restock
  const handleRestock = (event) => {
    event.preventDefault();
    const restock = parseInt(event.target.restock.value);
    if(restock>0){
        const newItem = { ...product, quantity: product.quantity + restock };
        const url = `https://salty-fjord-90713.herokuapp.com/inventory/${productId}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newItem),
        })
          .then((res) => res.json())
          .then((data) => {
              toast('Product Restock Successfully')
          });
          event.target.restock.value = '';
    }
    else{
        toast('Add a Positive Input');
    }
   
  };

  return (
    <div className="grid md:grid-cols-2 gap-5 container mx-auto mb-5">
      <div className="p-5">
        <img className=" rounded-t-lg w-full " src={product.image} alt="" />
      </div>
      <div className="mt-5 border-4 border-green-50 h-full p-8">
        <h4 className="text-3xl font-semibold text-center">Product Details</h4>
        <div className="mt-5 p-8">
          <p className="text-xl font-medium">
            Title: <span className="text-cyan-500">{product.title}</span>
          </p>
          <p className="text-xl font-medium">
            Description: <span className="text-cyan-500">{product.des}</span>
          </p>
          <p className="text-xl font-medium">
            Price: <span className="text-cyan-500">${product.price}</span>
          </p>
          <p className="text-xl font-medium">
            Quantity:{" "}
            <span className="text-cyan-500">
              {product.quantity < 1 ? "Stock Out" : product.quantity}
            </span>
          </p>
          <p className="text-xl font-medium">
            Added By: <span className="text-cyan-500">{product.email}</span>
          </p>
        </div>

        <div className="xl:ml-9 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 md:flex justify-between">
          <form onSubmit={handleDeliver}>
            <button
              type="submit"
              className="inline-block  ml-9 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Deliver
            </button>
          </form>

          {/* Restock */}
          <form onSubmit={handleRestock}>
            <input
              type="number"
              className="form-control block  ml-9 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Restock"
              name="restock"
              required
            />
            <button
              type="submit"
              className="inline-block ml-9 px-7 py-3 mt-5 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              RESTOCk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
