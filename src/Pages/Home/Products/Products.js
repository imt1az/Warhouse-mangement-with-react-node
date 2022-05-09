import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products] = useProducts();

    // useEffect(()=>{
    //     axios.get('https://salty-fjord-90713.herokuapp.com/products')
    //     .then(response =>{
    //         const {data} = response;
    //         setProducts(data);
    //     })
    // },[])

    return (
        <div>
             <h1 className='text-3xl font-bold my-5 text-center '>My Storage</h1>
            <hr className='container mx-auto p-5 h-2'></hr>

            <div className='grid md:grid-cols-3 gap-4 container justify-items-center mx-auto '>
               {
                   products.map(product=>
                    <Product
                    key={product._id}
                    product={product}
                    ></Product>)
                    
               }
            </div>
        </div>
    );
};

export default Products;