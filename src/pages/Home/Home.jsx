import { useLoaderData } from 'react-router-dom';
import banner from '../../assets/Lamborghini-Lanzador-Drive-Featured-Gear.webp'
import ProductCard from './ProductCard';
import Middle from '../../Middle';
import LastPart from '../../LastPart';
const Home = () => {
    const products = useLoaderData();
    return (
        <div className="w-3/4 mx-auto">
            <div className='w-full h-screen mb-20 bg-no-repeat bg-cover  ' style={{backgroundImage: `url(${banner})`}}>
               <div className='backdrop-brightness-50'>
               <div className='text-white font-semibold lg:text-3xl w-3/4 lg:p-40 '>
                    <hr />
                    <div className='p-6'>
                    <p>Attract, Engage & Convert
                    <br />
                   <span className='lg:text-4xl text-blue-600 lg:pl-28 '> More </span> <br />
                    qualified vehicle shoppers</p>
                    </div>
                    <hr />
                    <br />
                    <br />
                    <br />
                    
                </div>
               </div>

            </div>
            <Middle></Middle>


            
           <div className='lg:grid lg:grid-cols-2 lg:gap-20 bg-slate-100 '>
           {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
           </div>
           <LastPart></LastPart>
            
        </div>
    );
};

export default Home;