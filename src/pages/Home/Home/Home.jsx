import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";
import FrequentlyAQ from "../Frequently/FrequentlyAQ";
// import Modal from "../Modal/Modal";
// import { Fragment, useState } from "react";



const Home = () => {
    //
//     const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);
  //
    return (
        <div>
             <Helmet>
                <title>
                      Survey | Home
                </title>
            </Helmet>
            <Banner></Banner>
            
            <FrequentlyAQ></FrequentlyAQ>
            <Testimonial></Testimonial>
            {/* vul */}
            {/* <Fragment>
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                 
            </Modal>
            </Fragment> */}
            
            
        </div>
    );
};
export default Home;
