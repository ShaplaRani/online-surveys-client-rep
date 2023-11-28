import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";



// TODO: add publishable key
 const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const UserPayment = () => {
    const [data] = useLoaderData();
     //const price = data.price;
     console.log(data);
    return (
        <div>
            <h3>paymet</h3>
             <div>
                <Elements stripe={stripePromise}>
                     <CheckoutForm data={data}></CheckoutForm> 
                </Elements>
            </div> 
        </div>
    );
};

export default UserPayment;