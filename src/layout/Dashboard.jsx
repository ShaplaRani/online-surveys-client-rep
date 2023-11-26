import { FaAd, FaBook, FaCalendar, FaHome, FaList,FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useSurveyor from "../hooks/useSurveyor";



const Dashboard = () => {
    //const [cart] = useCart();
         // TODO: get isAdmin value from the database
    //const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor();
    //const isAdmin = true
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                     {
                        isAdmin && <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                   Manage Users </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/payments">
                                    <FaUsers></FaUsers>
                                   Payments </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/survey">
                                    <FaUsers></FaUsers>
                                   Survey </NavLink>
                            </li>

                        </> 
                     }
                     {
                        isSurveyor && <>
                            <li>
                        <NavLink to="/dashboard/addSurvey">
                        <FaUtensils></FaUtensils>
                        Survey Creation</NavLink>
                         </li>

                         </> 
                     }
                     {/* {
                        isAdmin? <>
                           <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                        :
                        <>
                        <li>
                        <NavLink to="/dashboard/addSurvey">
                        <FaUtensils></FaUtensils>
                        Survey Creation</NavLink>
                      </li>
                    <li>
                        <NavLink to="/dashboard/history">
                            <FaCalendar></FaCalendar>
                            Payment History</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaAd></FaAd>
                            Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory">
                            <FaCalendar></FaCalendar>
                            Payment Real History</NavLink>
                    </li>
                        </>
                    }  */}
                      {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                   
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;



