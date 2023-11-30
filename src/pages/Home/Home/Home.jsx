import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";
import FrequentlyAQ from "../Frequently/FrequentlyAQ";
import RecentlySurveys from "../RecentlySurveys/RecentlySurveys";




const Home = () => {
    
    return (
        <div>
             <Helmet>
                <title>
                      Survey | Home
                </title>
            </Helmet>
            <Banner></Banner>
             <RecentlySurveys></RecentlySurveys>
            <FrequentlyAQ></FrequentlyAQ>
            <Testimonial></Testimonial>
            
            
            
        </div>
    );
};
export default Home;
