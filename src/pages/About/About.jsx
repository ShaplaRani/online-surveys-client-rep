import banner  from '../../assets/about.jpg'
import about  from '../../assets/surveyabout.jpg'
const About = () => {
    return (
        <div>
             <img className='h-[70vh] w-full mt-20' src={banner} alt="" />
             <div className="lg:flex container mx-auto mb-20 p-4">
               <div className="flex-1 ">
                <img className="rounded-xl" src={about } alt="" />
              </div>
                <div className="flex-1  flex items-center justify-center mt-20 lg:mt-0 lg:justify-end">
                <div className="space-y-8">
                 <div className="space-y-5">
                 <h2 className="text-3xl font-bold ">About Us</h2>
                 <p className="text-base font-normal  max-w-lg leading-relaxed text-left">Welcome to my Survey Website, where opinions matter and voices are heard. We are passionate about providing a platform that allows individuals to express their thoughts, participate in meaningful surveys, and contribute to valuable insights.</p>
               
               </div>

                    <button className="hover:bg-orange-400 hover:text-white
                     hover:border-orange-400 border-2 border-orange-400 py-4 px-8 text-lg font-semibold text-orange-400  rounded-3xl "> Contact Us</button>
                  </div>

                
                </div>
               
           
        </div>
        </div>
    );
};

export default About;
