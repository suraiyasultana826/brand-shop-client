
const ProductCard = ({product}) => {
    const {name, brand, price, image, rating, type, description} = product;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <button className="btn bg-slate-400">{brand}</button>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See Details</button>
      <button className="btn btn-primary">Update</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductCard;