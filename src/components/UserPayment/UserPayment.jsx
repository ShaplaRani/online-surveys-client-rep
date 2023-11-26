// import { Elements } from "@stripe/react-stripe-js";
// import { useLoaderData, useParams } from "react-router-dom";
// import CheckoutForm from "../CheckoutForm/CheckoutForm";
// import { loadStripe } from "@stripe/stripe-js";

import { useLoaderData } from "react-router-dom";

// TODO: add publishable key
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
//const stripePromise = '';
const UserPayment = () => {
    const data = useLoaderData();

     console.log(data);
    return (
        <div>
            <h3>paymet</h3>
             {/* <div>
                <Elements stripe={stripePromise}>
                     <CheckoutForm></CheckoutForm> 
                </Elements>
            </div>  */}
        </div>
    );
};

export default UserPayment;