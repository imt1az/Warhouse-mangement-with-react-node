import { useEffect, useState } from "react";
import axios from "axios";

const useSingleProduct = (productId)=>{
    const [product,setProduct] = useState({});
   
     return [product,setProduct]
}
export default useSingleProduct;