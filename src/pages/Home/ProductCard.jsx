import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const {name,_id, brand, price, image, rating, type, description} = product;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
   <Link to='/moreProduct'> <button className="btn bg-slate-400">Brand: {brand}</button></Link>
    <div className="card-actions justify-end">
      <Link to={`product/${_id}`}><button className="btn btn-primary">See Details</button></Link>
     <Link to={`updateProduct/${_id}`}> <button className="btn btn-primary">Update</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductCard;