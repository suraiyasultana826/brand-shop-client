import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center content-center mt-80">
            <div>
                <h1 className="text-6xl text-red-800">404 Page Not Found</h1>
               <Link to='/'> <button className="btn bg-red-800 text-white ml-44 mt-10">Go To Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;