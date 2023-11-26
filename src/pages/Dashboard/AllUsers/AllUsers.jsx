import { useQuery } from "@tanstack/react-query";

import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { useState } from "react";



const AllUsers = () => {
    const [sortData , setSortData] = useState([])
     const [isTrue, setIsTrue] = useState(true)
    const axiosSecure = useAxiosSecure();
    //const axiosPublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    //const res = await axiosSecure.get('/users');
    //  console.log(users);
    //users?sortField=role&sortOrder=${sort}
    //sorting
    const handleFilter = (role) => {
       // setSortData(sort)
         
        axiosSecure.get(`/users?role=${role}`)
        .then(res => {
            //console.log(res.data);

            setSortData(res.data)
            setIsTrue(false)
            
        })
    }
    


    

    //role setup
    const handleDrop = (user, role) => {
        console.log('click', user, role);
        axiosSecure.patch(`/users/admin?id=${user._id}&role=${role}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly items-center mt-4 mb-10">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1"> Filter</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={ () => handleFilter('pro-user')}><a> pro-user</a></li>
                        <li onClick={ () => handleFilter('user')}><a>users</a></li>
                        <li onClick={ () => handleFilter('surveyor')}><a>surveyor</a></li>
                    </ul>
                </div>
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
                            <th>Action</th>
                            <th>dropdown</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            isTrue?users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role && <div className="flex gap-1 items-center justify-center">
                                        <FaUsers className="text-white 
                                        text-xl"></FaUsers>
                                        <p className="text-xl font-semibold"> {user?.role}</p>
                                    </div>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                                <td>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost rounded-btn">Dropdown</label>
                                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                            <li onClick={() => handleDrop(user, 'admin')}><a>Admin</a></li>
                                            <li onClick={() => handleDrop(user, 'surveyor')}><a>Surveyor</a></li>
                                        </ul>
                                    </div>

                                </td>
                            </tr>):sortData.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role && <div className="flex gap-1 items-center justify-center">
                                        <FaUsers className="text-white 
                                        text-xl"></FaUsers>
                                        <p className="text-xl font-semibold"> {user?.role}</p>
                                    </div>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                                <td>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost rounded-btn">Dropdown</label>
                                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                            <li onClick={() => handleDrop(user, 'admin')}><a>Admin</a></li>
                                            <li onClick={() => handleDrop(user, 'surveyor')}><a>Surveyor</a></li>
                                        </ul>
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

export default AllUsers;


