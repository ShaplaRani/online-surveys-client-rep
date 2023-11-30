import useAxiosSecure from "../../../hooks/useAxiosSecure";




const UpdateModal = ({ isOpen, onClose,survey,refetch}) => {
    const axiosSecure = useAxiosSecure();
    console.log(survey);
     const id = survey._id;
     console.log(id);
    const handleUpdateSurvey = (e) => {
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
         category,
          description,
          
         }

         console.log('modal cliek' ,surveyData);
         axiosSecure.put(`/surveyor/survey-update/${id}`, surveyData)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    // Swal.fire({
                    //     position: "top-end",
                    //     icon: "success",
                    //     title: `${title} unpublished`,
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // });
                }
            })
    }
    

    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-2xl mx-auto my-6">
        {/* Modal content */}
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-3xl font-semibold">Survey Update</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black">×</span>
            </button>
          </div>
          
          {/* Add a form element */}

          <form onSubmit={handleUpdateSurvey} className="card-body  max-auto   space-y-6">                     
                    
                       
                    {/* title */}
                    <div className="form-control ">
                        <label className="label">
                        <span className="label-text text-2xl font-bold">Title:</span>
                       </label>
                        <input defaultValue={survey?.title} type="text" placeholder="Survey Title" name="title" className="input input-bordered" required />
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
                        <input defaultValue={survey?.category} type="text" placeholder="Survey Category" name="category" className="input input-bordered" required />
                    </div>
                     {/* description */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-bold">Description</span>
                    </label>  
                     <textarea defaultValue={survey?.description} name="description" id="" cols="30" rows="10" placeholder="Your Message"
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
                         <button  className="w-full text-white mt-6 py-2 text-center rounded-lg text-xl font-semibold bg-emerald-400">
                            Update Survey</button>
                    </div>
            </form>
          
          {/* <form onSubmit={handleReject} className="p-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="exampleFormControlInput1">
              Feedback
            </label>
            <textarea name="feedback"  placeholder="Feedback" className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md">
            
            </textarea>
            
           
           
            <button
            
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;

// const UpdateModal = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default UpdateModal;