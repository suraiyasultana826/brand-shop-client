

import Swal from 'sweetalert2'

const DetailedCard = ({product}) => {
    const {name,_id, brand, price, image, rating, type, description} = product ||{};


    const handleAddToCart = () => {
        const addToCartArray = [];
        const cartItems = JSON.parse(localStorage.getItem('carts'))
        if(!cartItems){
            addToCartArray.push(product)
            localStorage.setItem('carts', JSON.stringify(addToCartArray))
            Swal.fire({
                title: 'Success!',
                text: 'Product added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
        else{


            const isExist = cartItems.find(product => product._id === _id)
            if(!isExist){
                addToCartArray.push(...cartItems, product)
                localStorage.setItem('carts', JSON.stringify(addToCartArray))
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
            else{
                Swal.fire({
                    title: 'error!',
                    text: 'Product already exist',
                    icon: 'error',
                    confirmButtonText: 'okay'
                  })
            }

           
        }
    }

    return (
        <div className="w-3/4 mx-auto">
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-5xl">{brand}</h2>
    <p className="text-2xl">{description}</p>
    <p className="text-2xl mt-5">Price: {price}</p>
    <div className="card-actions justify-end">
      <button onClick={handleAddToCart} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default DetailedCard;