import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SignUp";
import Dashboard from "../layout/Dashboard";


const router = createBrowserRouter([
    {
      path: "/",
     
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>

        },
        {
          path:'register',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>
    }
  ]);

export default router;