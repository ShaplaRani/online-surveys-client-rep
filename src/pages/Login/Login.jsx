import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/login.jpg"
import useAuth from "../../hooks/useAuth";
//import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
    const {signInUser,signInWithGoogle}= useAuth();
    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    console.log('login location',location);
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email,password);
        signInUser(email,password)
       .then( result => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state? location.state:'/')
       
       })
       .catch(error => {
        console.log(error);
        //Swal.fire(error.message)
       })
    }

    const handleGoogleSignIn = () => {

        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate(location?.state? location.state:'/')
            })
            
        })
        .catch(error => {
            console.log(error);
         // Swal.fire(error)
        })

    }
    return (
        <div className="bg-blue-100 py-20 container mx-auto rounded-lg my-20 ">
                <Helmet>
                <title>survey | Login</title>
            </Helmet>
              
               
               <div className="w-5/6 lg:w-3/5 bg-white rounded-lg shadow-md py-14 m-auto mt-10 ">
                    <img className="h-90 w-full" src={loginImage} alt="" /> 

                    <div>
                    <h3 className="text-2xl md:text-3xl   text-center font-medium md:font-semibold
                   text-blue-700 "> Login your account</h3>
                    </div>
                
                <form onSubmit={handleLogin} className=" w-4/5 md:w-3/4 lg:w-3/4 mx-auto">
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800  mb-1">Email:</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered"
                         required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800 mt-5 mb-1">Password:</span>
                        </label>
                        
                         <input type={showPassword? "text": "password"}
                          placeholder="password" 
                          name="password"
                         className="input input-bordered"
                         required />
                         <span onClick={() => setShowPassword(!showPassword)} 
                         className="absolute right-0 bottom-0 mb-4 mr-4 text-gray-600">
                           {
                            showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                           }
                         </span>
                        
                        
                    </div>
                     
                    <div className="form-control mt-6">
                         <button className="btn text-xl font-semibold bg-emerald-400 text-white">
                            Login</button>
                    </div>
                </form>
                 <div className="lg:w-3/4 mx-auto text-center mt-5 text-xl font-semibold ">
                       
                      <p>Login With</p>
                      
                 </div>
                 <div className="w-4/5 md:w-3/4 lg:w-3/4 mx-auto mt-6 md:flex gap-4">
                    <div className="bg-gray-50 rounded-xl flex-1 shadow-md text-center flex justify-center py-4 ">
        <button onClick={handleGoogleSignIn} className="flex justify-center gap-2  items-center">
                         <FcGoogle></FcGoogle>   Google</button>
                    </div>
                    
                 </div>
                <p className=" w-4/5 md:w-3/4 lg:w-3/4 mx-auto text-center mt-9 text-base font-semibold "> 
                Do not Have An Account ? Please <Link to="/register"
                 className="text-blue-700"> Register</Link></p>
            </div>

         </div>
    );
};

export default Login;