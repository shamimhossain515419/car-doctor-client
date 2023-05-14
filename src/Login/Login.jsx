import { Link, useLocation, useNavigate } from "react-router-dom";

import img from '../../src/assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import Socalloginpage from "../Pages/Socallogin/Socalloginpage";

const Login = () => {
    const { singup } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        singup(email, password)
            .then((result) => {
                console.log(result);
                const user = result.user;

                console.log(user);
               

                 form.reset();
                navigate(from, { replace: true })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
                // ..
            });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='mt text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/ragistation">Sign Up</Link> </p>
                             <Socalloginpage></Socalloginpage>
                            <div>

                            </div>
                        </div>
                    </div>
                  
                </div>
              
            </div>
        </div>
    );
};

export default Login;