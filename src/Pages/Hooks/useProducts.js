import axios from "axios";
import { useEffect, useState } from "react";


const useProducts = ()=>{
    const [products,setProducts] = useState([]);

   
    return [products,setProducts] 
}
export default useProducts;