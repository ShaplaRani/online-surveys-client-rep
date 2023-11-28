import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SignUp";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute"
import CreateSurvey from "../pages/Dashboard/CreateSurvey/CreateSurvey";
import Pricing from "../pages/Pricing/Pricing";
import Surveys from "../pages/Dashboard/Surveys/Surveys";
import UserPayment from "../components/UserPayment/UserPayment";
import AllSurveys from "../pages/AllSurveys/AllSurveys";
import SurveyDetails from "../pages/SurveyDetails/SurveyDetails";
import UpdateSurvey from "../pages/AllSurveys/UpdateSurvey";

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
        },
        {
          path:'pricing',
          element:<PrivateRoute><Pricing></Pricing></PrivateRoute>
        },
        {
          path:'payment/:id',
          element:<UserPayment></UserPayment>,
          loader: ({params}) => fetch(`http://localhost:5000/packages/${params.id}`)
        },
        {
          path:'allSurveys',
          element:<AllSurveys></AllSurveys>
        },
        {
          path:'surveyDetails/:id',
          element:<SurveyDetails></SurveyDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/survey/${params.id}`)
        },
        {
          path:'surveyUpdate/:id',
          element:<UpdateSurvey></UpdateSurvey>,
          loader: ({params}) => fetch(`http://localhost:5000/survey/${params.id}`)
        },
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'users',
           element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
       
        },
        {
          path:'addSurvey',
          element:<CreateSurvey></CreateSurvey>
        },
        {
          path:'survey',
          element:<AdminRoute><Surveys></Surveys></AdminRoute>
        },
      ]
    }
  ]);

export default router;