import { useEffect, useState } from "react";
import DetailedCard from "./pages/Home/DetailedCard";

const MyCart = () => {
    const [cart, setCart] = useState([])
    const [noFound, setNoFound] = useState(false)
    useEffect( ()=>{
        const cartItems = JSON.parse(localStorage.getItem('carts'))
        if(cartItems){
            setCart(cartItems)
        }
        else{
            setNoFound('no data');
        }

    }, [])
    console.log(cart);
    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : <div>
                <div className="grid lg:grid-cols-2">
                    {cart.map(product => <DetailedCard key={product._id} product={product}></DetailedCard>)}</div></div>}
            
        </div>
    );
};

export default MyCart;