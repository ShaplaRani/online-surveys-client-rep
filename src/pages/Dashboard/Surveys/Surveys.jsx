import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
//import Swal from "sweetalert2";
import { useState } from "react";
// import Modal from "./Modal";
import { FcSurvey } from "react-icons/fc";
import Swal from "sweetalert2";


const Surveys = () => {
    const axiosSecure = useAxiosSecure();

    

    const { data: surveys = [], refetch, isPending } = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const res = await axiosSecure.get('/survey');
            console.log(res.data);
            return res.data;
        }
    })

    const [selectedSurvey, setSelectedSurvey] = useState(null);

    // Function to set the selected survey and open the modal
    const handleFeedbackButtonClick = (survey) => {
        setSelectedSurvey(survey);
        document.getElementById('my_modal_5').showModal();
    };
    console.log(selectedSurvey);
    const handleReject = (e) => {
        e.preventDefault();
       
        const feedback = e.target.feedback.value;
        console.log(feedback,selectedSurvey._id,selectedSurvey);
        console.log('modal cliek');
        axiosSecure.patch(`/survey-unpublished/${selectedSurvey._id}`, { feedback })
           .then(res => {
               console.log(res.data)
               if (res.data.modifiedCount > 0) {
                   refetch();
                   e.target.reset();
                   Swal.fire({
                       position: "top-end",
                       icon: "success",
                       title: `${selectedSurvey?.title} update successfully`,
                       showConfirmButton: false,
                       timer: 1500
                   });
               }
           })
   }
    

    //console.log(surveys);
    return (
        <div className="my-10">
            <div className=" mb-10 text-4xl font-bold ">
                <p className="flex justify-center mb-2"><FcSurvey ></FcSurvey></p>
                <h2 className="text-4xl font-bold text-center">All surveys</h2>

            </div>
            <div className="w-11/12 mx-auto bg-white rounded-lg">
                <table className="text-center table w-full">
                    {/* head */}
                    <thead className="bg-emerald-400 text-lg font-medium text-white">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {

                            isPending ? <span className="loading loading-spinner text-primary"></span> : surveys?.map((survey, index) => <tr key={survey._id}>
                                <th>{index + 1}</th>
                                <td>{survey?.email}</td>
                                <td>{survey?.category}</td>
                                <td>{survey?.title}</td>
                                <td>
                                    {survey?.isPublish
                                        ? "published"
                                        : "unPublished"
                                    }

                                    


                                </td>

                                

                                <td>

                                    <div>
                                        <button
                                            disabled={!survey.isReport || !survey?.isPublish}
                                            className="btn btn-primary"
                                            onClick={() => handleFeedbackButtonClick(survey)}
                                        >
                                            Reject
                                        </button>
                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <p className="py-4">{selectedSurvey?.title}</p>
                                                <form onSubmit={handleReject} className="p-6">
                                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="exampleFormControlInput1">
                                                        Feedback
                                                    </label>
                                                    <textarea name="feedback" placeholder="Feedback" className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md">

                                                    </textarea>
                                                    <button

                                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
                                                    >
                                                        Submit
                                                    </button>
                                                </form>

                                                {/* Add other details you want to display */}
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        {/* If there is a button in the form, it will close the modal */}
                                                        <button className="btn" onClick={() => setSelectedSurvey(null)}>
                                                            Close
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                    
                               </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Surveys;

