import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [regError, setRegError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        console.log(name, email, password);

        
        if(password.length< 6){
            setRegError('Password should be at least 6 characters or longer');
            return;
  
          }
  
          else if(!/[A-Z]/.test(password)){
            setRegError('Your Password should have at least a capital character');
            return;
          }
          else if(!/[#?!@$%^&*-]/.test(password)){
            setRegError('Your Password should have at least a special  character');
            return;
          }

        //create USer
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" name="name" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        {
            regError && <p className="text-red-700">{regError}</p>
        }
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center m-4">Already have an account? <Link className="text-blue-900 font-bold" to='/login'> Login</Link></p>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Register;