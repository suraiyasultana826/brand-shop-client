import Swal from 'sweetalert2'
const AddProduct = () => {


    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const type = form.type.value;
        const newProduct = {name, brand, price, image, rating, type, description};
        console.log(newProduct);

        //send data to the server

        fetch('http://localhost:5100/addProduct', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })
       
    }

    return (
        <div className="w-3/4 mx-auto bg-slate-300 lg:p-20 mb-20">
            <div>
                <h2 className="md:text-3xl md:font-bold text-blue-500 lg:pl-72 pb-10">Add A Product</h2>
                <form onSubmit={handleAddProduct} className="w-full" >
                    {/* form row */}
                 <div className="md:flex gap-28">
                 <div className="form-control ">
                   <div className="join">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input className="input input-bordered join-item w-full" name="name" placeholder="product name" />
                       
                    </div>
                   </div>
                   <div className="form-control ">
                   <div className="join">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input className="input input-bordered join-item" placeholder="product image" name="image" />
                       
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
                        <input className="input input-bordered join-item w-full" name="brand" placeholder="Brand Name" />
                       
                    </div>
                   </div>
                   <div className="form-control ">
                   <div className="join">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <input className="input input-bordered join-item" placeholder="type" name="type" />
                       
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
                        <input className="input input-bordered join-item w-full" name="price" placeholder="price" />
                       
                    </div>
                   </div>
                   <div className="form-control ">
                   <div className="join">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <input className="input input-bordered join-item" placeholder="Short description" name="description" />
                       
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
                        <input className="input input-bordered join-item w-1/2" name="rating" placeholder="rating" />
                       
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
}
export default AddProduct;