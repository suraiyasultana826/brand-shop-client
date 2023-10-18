import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.jpg"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {


  const {user, logOut} = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
    .then()
    .catch()

  
  }


    const navLinks = <>
     <li className="mr-2"><NavLink to='/'>Home</NavLink></li>
     <li className="mr-2"><NavLink to="addProduct">Add Product</NavLink></li>
     <li className="mr-2"><NavLink to='updateProduct'>Update Product</NavLink></li>
     <li className="mr-2"><NavLink to='mycart'>My Cart</NavLink></li>
     <li className="mr-2"><NavLink to='login'>Login</NavLink></li>
     <li className="mr-2"><NavLink to='register'>Register</NavLink></li>
     
      </>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <img className="w-30 rounded-lg h-20" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
 
  <div className="navbar-end">
  {
    user? 
    <button onClick={handleSignOut} className="btn">Sign Out</button>
    : <Link>
    <button className="btn">Login</button></Link>
  }
    
   
  </div>
</div>
            
        </div>
    );
};

export default Navbar;