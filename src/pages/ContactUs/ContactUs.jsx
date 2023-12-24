import { FaMapMarkerAlt } from "react-icons/fa"
// import { HiMapPin } from "react-icons/hi2";
import { TbPhoneCall } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

import Swal from "sweetalert2";


const ContactUs = () => {
    const handleSubmit= e =>{
        e.preventDefault();
    
        const form = e.target;
        const name = form.name.value;
        const subject = form.subject.value;
        const number = form.number.value;
        const email = form.email.value;
        const message = form.message.value;
    
        const contact = {name, number,subject, email, message} 
    
    
        if(contact){
          Swal.fire({
            title: 'success!',
            text: 'Your message successfully send',
            icon: 'success',
            confirmButtonText: 'Conform'
          })
        }
    
    
    
        
      }
    return (
        <div className="container mx-auto p-2 my-20">
            <h2 className="text-3xl  font-semibold text-center mb-10">My Contact</h2>
            <div className=" lg:flex lg:gap-20 justify-between">
        
        <div className="flex-1">
          <form onSubmit={handleSubmit}
           className="card-body">
            <div className="md:flex gap-7 mb-10">
            <div className="form-control flex-1 mb-10 md:mb-0">
              {/* <label className="label">
                <span className="label-text">Name</span>
              </label> */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="  border-orange-400 input input-bordered w-full p-3"
                required
              />
            </div>
            <div className="form-control flex-1">
              {/* <label className="label">
                <span className="label-text">Number</span>
              </label> */}
              <input
                type="text"
                name="number"
                placeholder="Your Phone Number"
                className=" border-orange-400 input input-bordered w-full p-3"
                required
              />
            </div>
            </div>
            <div className="md:flex gap-7 mb-10 ">
            <div className="form-control flex-1 mb-10 md:mb-0 ">
              {/* <label className="label">
                <span className="label-text">Email</span>
              </label> */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className=" border-orange-400 input input-bordered p-3"
                required
              />
            </div>
            <div className="form-control flex-1">
              {/* <label className="label">
                <span className="label-text">Subject</span>
              </label> */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="  border-orange-400 input input-bordered p-3"
                required
              />
            </div>
            </div>
            <div className="form-control">
              {/* <label className="label">
                <span className="label-text">Message</span>
              </label> */}
              <input
                type="message"
                name="message"
                placeholder="Message"
                className=" border-orange-400 input input-bordered px-3 py-10"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-600 text-white">Send Me Message</button>
            </div>
          </form>
        </div>
         {/* 2nd part */}
        <div className="flex items-center">
             <div className="flex flex-wrap lg:flex-col gap-10 justify-center">
             <div className="flex items-center gap-5">
                   <div>
                   < TbPhoneCall className="text-orange-600 text-xl font-medium"></TbPhoneCall> 
                   </div>
                   <div>
                      <p className="text-xl font-medium">Phone</p>
                       <p className="text-base font-base">+01589634755</p> 
                   </div>
             </div>
             <div className="flex items-center gap-5">
                   <div>
                   < MdEmail className="text-orange-600 text-xl font-medium"></MdEmail> 
                   </div>
                   <div>
                      <p className="text-xl font-medium">Email</p>
                       <p className="text-base font-base">shaplarani621@gamil.com</p> 
                   </div>
             </div>
             <div className="flex items-center gap-5">
                   <div >
                   < FaMapMarkerAlt className="text-orange-600 text-xl font-medium "></FaMapMarkerAlt> 
                   </div>
                   <div>
                      <p className="text-xl font-medium">Address</p>
                       <p className="text-base font-base"> Rangpur, Bangladesh</p> 
                   </div>
             </div>
             </div>
        </div>


           </div>
             
        </div>
    );
};

export default ContactUs;

