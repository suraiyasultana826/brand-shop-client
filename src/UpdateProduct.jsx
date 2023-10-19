import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const product = useLoaderData();
    const {name,_id, brand, price, image, rating, type, description} = product;
    return (
        <div>
            <h4>this is updating : {name}</h4>
            
        </div>
    );
};

export default UpdateProduct;