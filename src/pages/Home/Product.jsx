import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailedCard from "./DetailedCard";

const Product = () => {

    const [product, setProduct] = useState()

    const {_id} = useParams()
   
    const products = useLoaderData()
   
    useEffect( () => {
        const findProduct = products?.find(product => product._id === _id)

        console.log(findProduct);
        setProduct(findProduct)
    }, [_id, products])
    console.log(
        product
    );
    return (
        <div>
         <DetailedCard product={product}></DetailedCard>
            
        </div>
    );
};

export default Product;