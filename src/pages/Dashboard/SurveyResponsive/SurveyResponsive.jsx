import { FcSurvey } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";


const SurveyResponsive = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="my-10">
        <div className=" mb-10 text-4xl font-bold ">
            <p className="flex justify-center mb-2"><FcSurvey ></FcSurvey></p>
            <h2 className="text-4xl font-bold text-center uppercase text-orange-400">surveys Responsive</h2>

        </div>
        <div className="w-11/12 mx-auto bg-white rounded-lg">
            <table className="text-center table w-full">
                {/* head */}
                <thead className="bg-emerald-400 text-lg font-medium text-white">
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Time</th>
                        <th>Vote</th>

                    </tr>
                </thead>
                <tbody>
                    {

                     data?.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>{item?.email}</td>
                            <td>{item?.name}</td>
                            <td>{item?.title}</td>
                            <td>{item?.time}</td>
                            <td>{item?.vote}</td>
                            
                            

                            

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default SurveyResponsive;