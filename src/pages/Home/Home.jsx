import banner from '../../assets/Lamborghini-Lanzador-Drive-Featured-Gear.webp'
const Home = () => {
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
            
        </div>
    );
};

export default Home;