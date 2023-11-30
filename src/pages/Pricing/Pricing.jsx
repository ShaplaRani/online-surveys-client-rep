import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSurveyor from "../../hooks/useSurveyor";
import useAdmin from "../../hooks/useAdmin";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";


const Pricing = () => {
    const {user} = useAuth()
    const [packageData, setPackageData]=useState([])
    const [isSurveyor] = useSurveyor();
    const [isAdmin] = useAdmin();
    const axiosPublic = useAxiosPublic()
   useEffect(()=>{
    axiosPublic.get('/packages')
       .then(data => setPackageData(data.data))
   },[axiosPublic])
   console.log(packageData);
    return (
        <div className=" my-20 p-5">
            <h2 className="text-3xl font-bold mb-10 text-center ">Our Packages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            {
                packageData.map(item =><div key={item.id}>
                    <div  className="card text-center bg-emerald-400 shadow-xl">
               
                  <div className="card-body">
                  <h2 className=" text-2xl font-semibold mb-3 mt-5">{item.package}</h2>
                  <p className="text-3xl font-semibold ">$ {item.price}</p>
                  <p className=" text-base font-semibold w-40 mx-auto text-center">{item.description}</p>
                  <div className=" mt-20 mb-5 ">
                   {
                    (isAdmin || isSurveyor || !user )?"":<>
                     <Link to={`/payment/${item._id}`}>
                    <button className="btn border px-6 border-white btn-primary">Purchase</button>
                    </Link>
                    </>
                   }
                  </div>
                </div>
                     </div>
                </div> )
            }
        </div>
        </div>
    );
};

export default Pricing;