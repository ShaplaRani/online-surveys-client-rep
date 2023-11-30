import { Helmet } from "react-helmet-async";
import { BsDatabaseAdd } from "react-icons/bs";
import './survey.css'
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useSurveyor from "../../../hooks/useSurveyor";
import { useState } from "react";
// import { useEffect, useState } from "react";
 import useAuth from "../../../hooks/useAuth";
const CreateSurvey = () => {
   // const [data, setDate] = useState(true)
    const {user} = useAuth()
   const axiosSecure  = useAxiosSecure();
   const [isSurveyor] = useSurveyor();
   const [qs,setqs] =useState([]);
   //ds
//    const [isQuestionField, setIsQuestionField] = useState(false);
//    const [question, setQuestion] = useState([]);

//    const handleQuestion = () => {
//     setIsQuestionField(true)
 //  }


    // console.log(user.email);
    // useEffect(() => {
    //     axiosSecure.get(`/users/${user.email}`)
    //     .then(res => {
    //         console.log('data',res.data);
    //         // if(res.data.role === 'surveyor'){
    //         //     setDate(false)
    //         // }
    //         // else{
    //         //     setDate(true)
    //         // }
    //     })
   
    //  },[axiosSecure,user])
    

    const handleAddSurvey = async(e) => {
           e.preventDefault();
           const form = e.target;
           const title = form.title.value;
           //const photo = form.photo.value;
           const category = form.category.value;
           const description = form.description.value;
        //    const question = form.qs.value;
        //    console.log(question);
           const surveyData = {
            title,
            email:user?.email,
            category,
            description,
            question:[],
            like:0,
            dislike: 0,
            // isPublish:false,
            isPublish:true,
            feedback:'',
            isReport: false,
            timestamp: new Date().toLocaleString(),
           }

           console.log(surveyData);
           
           const surveyRes = await axiosSecure.post('/create-survey', surveyData);
           console.log(surveyRes.data)
           if(surveyRes.data.insertedId){
               // show success popup
               e.target.reset();
               Swal.fire({
                   icon: 'success',
                   title: `${title} is added to the survey.`,
                  
                  confirmButtonText: 'Cool'
                 });
           }
 }
        return (
            <div>
            
            <Helmet>
                 <title>Dashboard | create survey</title>
             </Helmet>
              <div className="text-center mb-7 mt-10 ">
                    <p className="text-3xl font-bold flex justify-center mb-3"><BsDatabaseAdd /></p>
                   <h2 className="text-3xl font-bold">Create Survey</h2>
                </div> 

            <div className="bg-blue-200 py-14 rounded-lg px-10">
            <form onSubmit={handleAddSurvey} className="card-body  max-auto   space-y-6">                     
                    
                       
                    {/* title */}
                    <div className="form-control ">
                        <label className="label">
                        <span className="label-text text-2xl font-bold">Title:</span>
                       </label>
                        <input type="text" placeholder="Survey Title" name="title" className="input input-bordered" required />
                    </div>
                    {/* image */}
                    {/* <div className="form-control ">
                        <label className="label">
                        <span className="label-text text-2xl font-bold">Image:</span>
                       </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div> */}
                     {/* category */}
                    <div className="form-control ">
                        <label className="label">
                        <span className="label-text text-2xl font-bold">Category:</span>
                       </label>
                        <input type="text" placeholder="Survey Category" name="category" className="input input-bordered" required />
                    </div>
                     {/* description */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-bold">Description</span>
                    </label>  
                     <textarea name="description" id="" cols="30" rows="10" placeholder="Your Message"
                     className="input-bordered p-4 input h-40"></textarea>
                   
                 </div> 
                   {/* qs */}
                   {/* <div>

                   {
                     isQuestionField && <div className="form-control ">
                     <label className="label">
                     <span className="label-text text-2xl font-bold">Title:</span>
                    </label>
                     <input type="text" placeholder="question" name="qs" className="input input-bordered" required />
                 </div>
                   }
                     <button onClick={handleQuestion}>addQuestionField</button>
                   </div> */}
                 <div className=" ">
                         <button disabled={!isSurveyor} className="w-full text-white mt-6 py-2 text-center rounded-lg text-xl font-semibold bg-emerald-400">
                            Create Survey</button>
                    </div>
            </form>
            </div>
        </div>
    );
};

export default CreateSurvey;






// const CreateSurvey = () => {
//     const {user} = useAuth();
//     const navigate =useNavigate();
//     const handleAddJob = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const title = form.title.value;
//         const date = form.date.value;
//         const category = form.category.value;
//         const maxPrice = form.maxPrice.value;
//         const minPrice = form.minPrice.value;
//         const description= form.message.value;
//         const email = user?.email;
//         const addJob = {
//             title,
//             email,
//             date,
//             category,
//             maxPrice,
//             minPrice,
//             description
            
//         }
//         console.log(addJob);
//         fetch('https://online-marketplaces-server.vercel.app/api/user/create-product', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(addJob)
//         })
//             .then(res => res.json())
//             .then(data => {
                
//                 if (data.insertedId) {
//                       Swal.fire({
                        
//                         title: 'Success!',
//                         text: 'Job Added Successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     })
//                     navigate('/postedJob')
//                 }
//             })
//     }
//     return (
//         <div className="container mx-auto">
//             <Helmet>
//                 <title>Bid Jobs | Add Job</title>
//             </Helmet>
//             <h3 className="text-center mt-20 text-4xl font-bold text-blue-700"> Please Add Job</h3>
//             <div className="hero p-20 bg-blue-100 mb-20 mt-10 rounded-lg " >
           
//                 <form onSubmit={handleAddJob} className="card-body w-full space-y-4">
//                     {/* email and job tile */}
//                     <div className="md:flex gap-4">
//                        {/* Email */}
//                        <div className="form-control flex-1">
//                             <input type="email" placeholder="Your Email" 
//                             defaultValue={user?.email} name="email" className="input input-bordered"
//                              required readOnly />
//                         </div>
//                         {/* title */}
//                         <div className="form-control flex-1">
//                             <input type="text" placeholder="Job Title" name="title" className="input input-bordered" required />
//                         </div>
//                     </div>

//                     {/* category and date */}
//                     <div className="md:flex gap-4">
//                         {/* category */}
                        
//                         <div className="form-control flex-1">
//                         <select name="category" id="" className="input input-bordered">
//                              <option value="Web Development">Web Development</option>
//                              <option value="Digital Marketing">Digital Marketing</option>
//                              <option value="Graphics Design">Graphics Design</option>
//                         </select>
//                         </div>
                       
//                         {/* date */}
//                         <div className="form-control flex-1">
//                             <input type="date" placeholder="Deadline" name="date" className="input input-bordered" required />
//                         </div>
//                     </div>
//                       {/* maximum and minimum price */}
//                     <div className="md:flex gap-4">
                      
//                         {/* minimum */}
//                         <div className="form-control flex-1">
//                             <input type="text" placeholder="Minimum Price" name="minPrice" className="input input-bordered" required />
//                         </div>
//                          {/* maximum */}
//                        <div className="form-control flex-1">
//                             <input type="text" placeholder="Maximum Price" name="maxPrice" className="input input-bordered" required />
//                         </div>
//                     </div>


//                     <div className="form-control">
//                         <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"
//                         className="input-bordered p-4 input h-40"></textarea>
                       
//                     </div> 

//                     <div className="form-control mt-6">

//                         <input type="submit" value="Add JOb" className="btn bg-emerald-400 text-xl font-bold 
//                          text-white" />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default CreateSurvey;


