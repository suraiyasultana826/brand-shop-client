import { useLoaderData } from 'react-router-dom';
import MoreProductCard from './MoreProductCard';

const MoreProduct = () => {
    const products = useLoaderData();
    return (
        <div>
            <div className='flex justify-center items-center mt-10 mb-20'>
                <hr />
                <h1 className='text-6xl'>Product Of Same Brand</h1>
                <hr />
            </div>
            <div className="grid lg:grid-cols-4 gap-5">
                    {products?.map(product => <MoreProductCard key={product._id} product={product}></MoreProductCard>)}</div></div>
            
        
    );
};

export default MoreProduct;