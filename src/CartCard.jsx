
const CartCard = ({product}) => {
    const {name,_id, brand, price, image, rating, type, description} = product ||{};
    return (
        <div className="">
            <div className="w-3/4 mx-auto">
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2  className="card-title text-5xl">{brand}</h2>
    <p className="text-2xl">{description}</p>
    <p className="text-2xl mt-5">Price: {price}</p>
    <div className="card-actions justify-end">
      {/* <button  className="btn btn-primary ">Remove</button> */}
    </div>
  </div>
</div>
            
        </div>
            
        </div>
    );
};

export default CartCard;