import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateProduct = () => {
    const product = useLoaderData();
    const {name,_id, brand, price, image, rating, type, description} = product;
    
    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const type = form.type.value;
        const updateProduct = {name, brand, price, image, rating, type, description};
        console.log(updateProduct);

        //send data to the server

        fetch(`http://localhost:5100/addProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })
       
    }
    return (
        <div className="w-3/4 mx-auto bg-slate-300 lg:p-20 mb-20">
        <div>
            <h2 className="md:text-3xl md:font-bold text-blue-500 lg:pl-72 pb-10">Update A Product</h2>
            <form onSubmit={handleUpdateProduct} className="w-full" >
                {/* form row */}
             <div className="md:flex gap-28">
             <div className="form-control ">
               <div className="join">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input className="input input-bordered join-item w-full" name="name" defaultValue={name} placeholder="product name" />
                   
                </div>
               </div>
               <div className="form-control ">
               <div className="join">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input className="input input-bordered join-item" defaultValue={image} placeholder="product image" name="image" />
                   
                </div>
               </div>
             </div>
                {/* form row */}
             <div className="md:flex gap-28">
             <div className="form-control ">
               <div className="join">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input className="input input-bordered join-item w-full" defaultValue={brand} name="brand" placeholder="Brand Name" />
                   
                </div>
               </div>
               <div className="form-control ">
               <div className="join">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <input className="input input-bordered join-item" defaultValue={type} placeholder="type" name="type" />
                   
                </div>
               </div>
             </div>
                {/* form row */}
             <div className="md:flex gap-28">
             <div className="form-control ">
               <div className="join">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input className="input input-bordered join-item w-full" defaultValue={price} name="price" placeholder="price" />
                   
                </div>
               </div>
               <div className="form-control ">
               <div className="join">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input className="input input-bordered join-item" defaultValue={description} placeholder="Short description" name="description" />
                   
                </div>
               </div>
             </div>
                {/* form row */}
             <div className="md:flex gap-28">
             <div className="form-control mt-5 ">
               <div className="join">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input className="input input-bordered join-item w-1/2" name="rating" defaultValue={rating} placeholder="rating" />
                   
                </div>
               </div>
               {/* <div className="form-control ">
               <div className="join">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input className="input input-bordered join-item" placeholder="Short description" name="description" />
                   
                </div>
               </div> */}
               <button className="btn w-1/2 mt-5">Add</button>
             </div>
            </form>
        </div>

    </div>
    );
};

export default UpdateProduct;