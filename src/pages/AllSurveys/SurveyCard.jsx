import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SurveyCard = ({survey}) => {
    console.log(survey);
    const {title ,category,description,_id} = survey;
    return (
        <div>
                 <div  className="card h-[400px] flex flex-cols text-center  bg-emerald-400 shadow-xl ">
               
               <div className="card-body">
               <h2 className=" text-2xl font-semibold mb-3 mt-5">{title}</h2>
               <p className="text-3xl font-semibold ">{category}</p>
               <p className=" text-base font-semibold w-40 mx-auto text-center ">{description}</p>
               <div className="  flex-grow  w-full flex justify-evenly ">
                  <Link to={`/surveyUpdate/${_id}`} ><button  className='btn btn-primary px-6'>Update</button></Link>
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

