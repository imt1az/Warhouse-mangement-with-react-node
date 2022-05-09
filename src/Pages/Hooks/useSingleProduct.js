import { useEffect, useState } from "react";
import axios from "axios";

const useSingleProduct = (productId)=>{
    const [product,setProduct] = useState({});
    useEffect(()=>{
        axios.get(`https://salty-fjord-90713.herokuapp.com/inventory/${productId}`)
        .then(response =>{
            const {data} = response;
          setProduct(data)
        }) 
     },[])
     return [product,setProduct]
}
export default useSingleProduct;