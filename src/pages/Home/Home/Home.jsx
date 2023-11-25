import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";
import FrequentlyAQ from "../Frequently/FrequentlyAQ";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>
                      Survey | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Testimonial></Testimonial>
            <FrequentlyAQ></FrequentlyAQ>
        </div>
    );
};
export default Home;
