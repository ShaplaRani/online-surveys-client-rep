import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FcSurvey } from "react-icons/fc";
import {  useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
const MySurvey = () => {
    const axiosSecure = useAxiosSecure();
    
    const {user} = useAuth()
    //feedback
    const [selectedSurvey, setSelectedSurvey] = useState(null);

    // Function to set the selected survey and open the modal
    const handleFeedbackButtonClick = (survey) => {
        setSelectedSurvey(survey);
        document.getElementById('my_modal_5').showModal();
    };
    // update
    const [updateSelectedSurvey, setUpdateSelectedSurvey] = useState(null);

    // Function to set the selected survey and open the modal
    const handleUpdateButtonClick = (survey) => {
        setUpdateSelectedSurvey(survey);
        document.getElementById('my_modal_6').showModal();
    };

    console.log('feedback', selectedSurvey, 'update', updateSelectedSurvey);
    
    // specific data load
    const { data: surveys = [], refetch, isPending } = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/survey?email=${user.email}`);
            console.log(res.data);
            return res.data;
        }
    })
    console.log(surveys);
   
    const handleUpdateSurvey = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title?.value;
        const category = form.category?.value;
        const description = form.description?.value;
        
        const surveyData = {
            title,
            category,
            description,

        }

        console.log('modal cliek', surveyData);
        axiosSecure.put(`/surveyor/survey-update/${updateSelectedSurvey._id}`, surveyData)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    e.target.reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${updateSelectedSurvey.title} update successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteSurvey = (survey) => {
        console.log('click', survey);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {

                axiosSecure.delete(`/surveyor/survey-delete/${survey._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${survey?.title} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (

        <div className="my-10">
            <div className=" mb-10 text-4xl font-bold ">
                <p className="flex justify-center mb-2"><FcSurvey></FcSurvey></p>
                <h2 className="text-4xl font-bold text-center">My All surveys</h2>

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
                            {/* <th>Action</th> */}
                            <th>Feedback</th>
                            <th>Update</th>
                            <th>Delete</th>

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
                                            disabled={survey?.isPublish}
                                            className="btn btn-primary"
                                            onClick={() => handleFeedbackButtonClick(survey)}
                                        >
                                            Feedback
                                        </button>
                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">
                                                    {selectedSurvey?.feedback ? selectedSurvey?.feedback : 'No Feedback'}
                                                </h3>
                                               

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
                                    {/* <div>
                                    <button disabled={survey?.isPublish} className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Feedback</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">
                                                {survey?.feedback?survey?.feedback:'No Feedback'
                                                }
                                                </h3>
                                            <p className="py-4">{survey?.email}</p>
                                            <p className="py-4">{survey?.email}</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                    </div>  */}

                                </td>
                                <td>
                                     <div>
                                        <button

                                            className="btn btn-primary"
                                            onClick={() => handleUpdateButtonClick(survey)}
                                        >
                                            Update
                                        </button>
                                        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">

                                              
                                                {/* update form */}
                                                <form onSubmit={handleUpdateSurvey} className="card-body  max-auto   space-y-6">


                                                    {/* title */}
                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text text-2xl font-bold">Title:</span>
                                                        </label>
                                                        <input defaultValue={updateSelectedSurvey?.title} type="text" placeholder="Survey Title" name="title" className="input input-bordered" required />
                                                    </div>


                                                    {/* category */}
                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text text-2xl font-bold">Category:</span>
                                                        </label>
                                                        <input defaultValue={updateSelectedSurvey?.category} type="text" placeholder="Survey Category" name="category" className="input input-bordered" required />
                                                    </div>
                                                    {/* description */}
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text text-2xl font-bold">Description</span>
                                                        </label>
                                                        <textarea defaultValue={updateSelectedSurvey?.description} name="description" id="" cols="30" rows="10" placeholder="Your Message"
                                                            className="input-bordered p-4 input h-40"></textarea>

                                                    </div>
                                                   <div className=" ">
                                                        <button className="w-full text-white mt-6 py-2 text-center rounded-lg text-xl font-semibold bg-emerald-400">
                                                            Update Survey</button>
                                                    </div>
                                                </form>

                                                {/* Add other details you want to display */}
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        {/* If there is a button in the form, it will close the modal */}
                                                        <button className="btn" onClick={() => setUpdateSelectedSurvey(null)}>
                                                            Close
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                  

                                    {/* <Fragment>
                                        <button onClick={openModal} className="btn btn-primary" >Update</button>
                                        <UpdateModal refetch={refetch} survey={survey} isOpen={isModalOpen} onClose={closeModal}>

                                        </UpdateModal>
                                    </Fragment> */}
                                </td>
                                <td>

                                    <button
                                        onClick={() => handleDeleteSurvey(survey)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default MySurvey;