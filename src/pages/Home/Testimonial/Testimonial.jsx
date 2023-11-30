import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className="my-20">
             <div className="md:max-w-sm mx-auto text-center my-10">
           {/* <p className="text-xl font-normal text-yellow-400 mb-2">---{subHeading}---</p> */}
            <h3 className="text-4xl text-orange-600 font-normal mx-2  border-b-2 py-4 uppercase">Testimonials</h3>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="lg:mx-24 my-16 gap-4 flex flex-col items-center justify-center text-center">
                            
                            <p className=" w-3/5 text-xl font-semibold">{review.testimonial}</p>
                            <div className="flex items-center gap-5 mt-7">
                                <img src={review.avatar} alt="" />
                                <h3 className="text-2xl font-bold text-orange-400">{review.name}</h3>
                            </div>
                           
                        </div>
                    </SwiperSlide>)
                }

        </Swiper>
            
        </div>
    );
};

export default Testimonial;