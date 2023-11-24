
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash,FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import registerImage from "../../assets/login.jpg"
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
    const [showPassword,setShowPassword] = useState(false)
    const {createUser} = useAuth();
    const axiosPublic = useAxiosPublic(); 
    const navigate = useNavigate(); 
    
    const handleRegister = e => {
        e.preventDefault();
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get ('password');
        const accepted= e.target.terms.checked
        console.log(name,photo,email,password,accepted);
       
        if(password.length < 6){
            
            Swal.fire('password should be a least 6 characters or larger')
            return;
        }
        if(!/[A-Z]/.test(password)){
            
            Swal.fire('Your password should have at least one capital letter')
            return;
        }
        if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
            
            Swal.fire('Your password should have at least one special character')
            return;
        }
        if(!accepted){
            Swal.fire('Please accept our terms and condition')
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // update profile
            updateProfile(result.user,{
                displayName:name,
                photoURL:photo  
              })
              .then(() => {
                console.log("profile update")
                const userInfo = {
                    name: name,
                    email:email
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log('user added to the database')
                        e.target.reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    }
                })
            })
              .catch( error => console.error(error))
            
        })
        .catch(error => {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })

    }
    
    return (
        <div className=" bg-blue-100 py-20 container mx-auto rounded-lg my-20">
              <Helmet>
                <title> survey | Register</title>
            </Helmet>
              
            <div className="w-5/6 lg:w-3/5 bg-white  rounded-lg shadow-md pb-5 m-auto mt-10 ">
            <img className="h-90 w-full" src={registerImage} alt="" />
                 <div >
                 <h3 className="text-2xl md:text-3xl mt-3  text-center font-medium md:font-bold
                 text-blue-700 "> Register your account</h3>
                  <form onSubmit={handleRegister} className="w-4/5 md:w-3/4 lg:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800 mb-1 ">Your Name:</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name"
                         className="input input-bordered"
                         required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800 mt-5 mb-1">Photo URL:</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered"
                         required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800 mt-5 mb-1">Email:</span>
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
                     <div className="mt-5 text-base  font-normal text-gray-600">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2 " htmlFor="terms"> <a href="">Accept Term & Conditions</a></label>
                     </div>
                    <div className="form-control mt-6">
                        <button className="btn text-xl font-semibold bg-emerald-400 text-white">Register</button>
                    </div>
                </form>

                <p className=" w-4/5 md:w-3/4 lg:w-3/4 m-auto
                 text-center my-7 text-base font-semibold "> Already have an account ? Please <Link to="/login"
                 className="text-blue-700"> Login</Link></p>

                 </div>
               
               
                
            </div>
        </div>
        

    )              
};

export default SignUp;