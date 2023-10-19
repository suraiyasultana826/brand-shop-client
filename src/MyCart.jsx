import { useEffect, useState } from "react";
import DetailedCard from "./pages/Home/DetailedCard";
import CartCard from "./CartCard";

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
    const handleRemove = () => {
        localStorage.clear()
        setCart([])
    }
    console.log(cart);
    return (
        <div>
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :
           <div>
            <button className="btn bg-slate-600 text-white flex justify-center items-center" onClick={handleRemove}>Remove</button>
                <div className="grid lg:grid-cols-2">
                    {cart?.map(product => <CartCard key={product._id} product={product}></CartCard>)}</div></div>}
            
        </div>
    );
};

export default MyCart;