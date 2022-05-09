import axios from "axios";
import { useEffect, useState } from "react";


const useProducts = ()=>{
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get('https://salty-fjord-90713.herokuapp.com/products')
        .then(response =>{
            const {data} = response;
            setProducts(data);
        })
    },[])
    return [products,setProducts] 
}
export default useProducts;