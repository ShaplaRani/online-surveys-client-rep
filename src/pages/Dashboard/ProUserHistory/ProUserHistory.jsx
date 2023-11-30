import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";

const ProUserHistory = () => {
    const axiosSecure = useAxiosSecure();
    const role = 'pro-user'
    const { data: users = [],isPending } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?role=${role}`);
            return res.data;
        }
    })
    console.log(users);
    return (
        <div className="my-10">
              <div className=" mb-10 text-4xl font-bold ">
               <p className="flex justify-center mb-2"><FaUsers ></FaUsers></p>
              <h2 className="text-4xl font-bold text-center">ProUser History</h2>
             
            </div>
            

            <div className="w-11/12 mx-auto bg-white rounded-lg">
                <table className="text-center table w-full">
                    {/* head */}
                    <thead className="bg-emerald-400 text-lg font-medium text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Date</th>
                            <th>TransactionId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            isPending?<span className="loading loading-spinner text-primary"></span> :users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role && <div>
                                        
                                        <p className="text-xl font-semibold"> {user?.role}</p>
                                    </div>}
                                </td>
                                <td>
                                    {user.date}
                                    {/* <button
                                    
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button> */}
                                </td>
                                <td>
                                    {
                                        user.transactionId

                                    }
                                 </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProUserHistory;