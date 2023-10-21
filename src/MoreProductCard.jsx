import { Link } from 'react-router-dom';

const MoreProductCard = ({product}) => {
    const {name,_id, brand, price, image, rating, type, description} = product;
    return (
        <div>
            
             <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Product Name: {name}</h2>
    <button className="btn bg-slate-400">Brand Name:  TOYOTA</button>
    <div className="card-actions justify-end">
      {/* <Link to={`product/${_id}`}><button className="btn btn-primary">See Details</button></Link>
     <Link to={`updateProduct/${_id}`}> <button className="btn btn-primary">Update</button></Link> */}
    </div>
  </div>
</div>
            
        </div>
    );
};

export default MoreProductCard;