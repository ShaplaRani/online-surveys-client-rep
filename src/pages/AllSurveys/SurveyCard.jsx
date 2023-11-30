import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
const SurveyCard = ({survey}) => {
    console.log(survey);
    const {title ,category,description,_id,like, dislike} = survey;
    return (
        <div>
                 <div  className="card min-h-[400px] flex flex-cols   bg-emerald-400 shadow-xl ">
               
               <div className="card-body">
               <h2 className=" text-xl font-semibold mb-3 mt-5">Title: {title}</h2>
               <p className="text-2xl font-semibold mb-0 ">Category: {category}</p>
               <div>
               {
                        description.length > 90 ? <p 
                        className="text-base font-semibold  ">
                         {description.slice(0, 90)}.....
                        </p> :
                         <p>{description}</p>
                        }
               </div>

               <div className='flex gap-0 mt-1'>
                   <p className='flex text-xl font-semibold'>< AiOutlineLike></AiOutlineLike>  <span>  {like} </span>  </p>
                   <p className='flex text-xl font-semibold'><AiOutlineDislike></AiOutlineDislike>  <span> {dislike} </span>  </p>
                   
               </div>
               
               <div className="  flex-grow  w-full flex justify-end items-end ">
                 
                 <Link to={`/surveyDetails/${_id}`} className='btn btn-primary px-6'> <button>Details</button></Link>
               </div>
             </div>
                  </div>
            
        </div>
    );
};
SurveyCard.propTypes = {
    survey: PropTypes.object
}

export default SurveyCard;

