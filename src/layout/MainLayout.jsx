
import { Outlet } from "react-router-dom";
 import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";


const MainLayout = () => {
    console.log('main');
    return (
        <div>
           <Navbar></Navbar>
         
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;