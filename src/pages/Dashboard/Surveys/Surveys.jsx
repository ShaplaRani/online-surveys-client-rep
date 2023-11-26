import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Surveys = () => {
    const axiosSecure = useAxiosSecure();

    const { data: surveys = [], refetch } = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const res = await axiosSecure.get('/survey');
            console.log(res.data);
            return res.data;
        }
    })
     //handle publish 
    const handlePublished = (id, title) => {
        axiosSecure.patch(`/survey-publish/${id}`, { publish: true })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} publish`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        
    }

    const handleRegect = (e,id, title) => {
        e.preventDefault();
        console.log('click');
        const feedback = e.target.feedback.value;
        console.log(feedback);
        axiosSecure.patch(`/survey-unpublished/${id}`, { feedback })
        .then(res => {
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${title} unpublished`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    console.log(surveys);
    return (
        <div>
            <h2>surveys</h2>

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
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {

                            surveys?.map((survey, index) => <tr key={survey._id}>
                                <th>{index + 1}</th>
                                <td>{survey?.email}</td>
                                <td>{survey?.category}</td>
                                <td>{survey?.title}</td>
                                <td>
                                    <button onClick={() => handlePublished(survey._id, survey?.title)}>Published</button>
                                </td>
                                <td>
                                    <>
                                        {/* The button to open modal */}
                                        <label htmlFor="my_modal_6" className="btn">Unpublished</label>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                        <div className="modal" role="dialog">
                                            <div className="modal-box">
                                                <form onSubmit={() => handleRegect(survey._id, survey?.title)} name="feedback" className="flex items-center gap-3">
                                                <textarea className="textarea textarea-primary" placeholder="Feedback"></textarea>
                                                 <button className="btn btn-primary px-6"> Feedback</button>
                                                </form>
                                                {/* <h3 className="font-bold text-lg">Hello!</h3>
                                                <p className="py-4">This modal works with a hidden checkbox!</p> */}
                                                <div className="modal-action">
                                                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    
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