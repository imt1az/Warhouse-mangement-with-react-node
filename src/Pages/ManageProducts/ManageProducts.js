import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import {signOut} from 'firebase/auth'

const ManageProducts = () => {
    const [user] = useAuthState(auth);
    const [products,setProducts] = useState([]);
    const navigate = useNavigate();

    const deleteProduct = (id)=>{
         axios.delete(`https://salty-fjord-90713.herokuapp.com/inventory/${id}`)
         .then(response =>{
             console.log(response);
             toast('Deleted Successfully')
         })
    }

    useEffect(()=>{
       const getProducts = async()=>{
           const email = user.email;
          const url =`https://salty-fjord-90713.herokuapp.com/manageProducts?email=${email}`
         try{
          const {data} = await axios.get(url,{
            headers:{
              authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
          });
          setProducts(data);
         }
         catch(error){
           console.log(error.message)
           if(error.response.status ===401 || error.response.status ===403){
             
             navigate('/login');
             signOut(auth);
             toast('Forbidden')
           }
         }
       }
       getProducts();
    },[products])
  return (
    <div className="container mx-auto mt-5">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Title
              </th>
              <th scope="col" className="px-6 py-3">
                Added By
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
              
              
           {
               products.map(p=>  <tr key={p._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               <th
                 scope="row"
                 className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
               >
                {p.title} 
               </th>
               <td className="px-6 py-4">{p.email}</td>
               <td className="px-6 py-4">${p.price}</td>
               <td className="px-6 py-4">{p.quantity}</td>
               <td className="px-6 py-4 text-right">
                   <button onClick={()=>deleteProduct(p._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                
               </td>
             </tr>)
           }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
