import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SurveyCard from "./SurveyCard";
import { FcSurvey } from "react-icons/fc";

import { useState } from "react";


const AllSurveys = () => {
  const axiosSecure = useAxiosSecure();
  
  const [filterTitleSurvey, setFilterTitleSurvey] = useState([]);
  const [filterCategorySurvey, setFilterCategorySurvey] = useState([]);

  const [isTrue, setIsTrue] = useState(true);
  const [isTitle, setIsTitle] =useState(false)
  const [isCategory, setIsCategory] =useState(false)

  const { data: surveys = [], isPending, refetch } = useQuery({
    queryKey: ['surveys'],
    queryFn: async () => {
      const res = await axiosSecure.get('/survey');
      const surveys = res.data.filter(item => item.isPublish === true);
      console.log(res.data);
      setIsTrue(true);
      setIsTitle(false)
      setIsCategory(false)   
      //return res.data
      return surveys;
    }
  })
  const handleTitleFilter = (title) => {
    // axiosPublic.get(`/survey/survey-title?title=${title}`)
    //  .then(res => {
    //   console.log(res.data);
    //   const surveys = res.data.filter(item => item.isPublish === true);
    //   setFilterTitleSurvey(surveys)
    //  })
    const titleSurvey = surveys.filter(survey => survey.title == title)
    console.log(titleSurvey);
     setIsTrue(false);
      setIsTitle(true)
      setIsCategory(false) 
    setFilterTitleSurvey(titleSurvey)

  }
  const handleCategoryFilter = (category) => {
    // axiosPublic.get(`/survey/survey-category?category=${category}`)
    //  .then(res => {
    //   console.log('catory',res.data);
    //   const surveys = res.data.filter(item => item.isPublish === true);
    //   setFilterCategorySurvey(surveys)
    //  })
    const categorySurvey = surveys.filter(survey => survey.category == category)
    console.log(categorySurvey);
    setIsTrue(false);
    setIsTitle(false)
    setIsCategory(true) 
    setFilterCategorySurvey(categorySurvey)

  }
  console.log(surveys,filterTitleSurvey,filterCategorySurvey);
  return (
    <div className="my-20">

      <div className=" mb-10 text-4xl font-bold ">
        <p className="flex justify-center mb-2"><FcSurvey ></FcSurvey></p>
        <h2 className="text-4xl font-bold text-center">All surveys</h2>

      </div>
      {/* filter  */}
      <div className="mb-10  w-full">
         {/* <div className="flex justify-between px-4">
           <p>Filter by Title</p>
           <p>Filter by Category</p>
         </div> */}
        <div className="flex gap-3 md:gap-10 lg:gap-20 p-4">
          {/* filter title */}
          <select className="border w-full p-2" onChange={(e) => handleTitleFilter(e.target.value)}>
            <option value="">Filter by title</option>
            {surveys?.map((survey) => (
              <option key={survey._id} value={survey.title}>
                {survey.title}
              </option>
            ))}
          </select>
          {/* filter category */}
          <select className=" border w-full p-2" onChange={(e) => handleCategoryFilter(e.target.value)}>
            <option value="">Filter by Category</option>
            {surveys?.map((survey) => (
              <option key={survey._id} value={survey.category}>
                {survey.category}
              </option>
            ))}
          </select>
          
        </div>
         {/* filter category */}
        {/* <div className="flex justify-end">
          <select className=" border w-5/12 p-2" onChange={(e) => handleCategoryFilter(e.target.value)}>
            <option value="">All</option>
            {surveys?.map((survey) => (
              <option key={survey._id} value={survey.category}>
                {survey.category}
              </option>
            ))}
          </select>

        </div> */}

      </div>
      <div className="grid grid-cols-1, md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* {
          isPending ? <progress className="progress progress-primary w-56"></progress> : surveys?.map(survey => <SurveyCard key={survey._id} survey={survey}></SurveyCard>)
        } */}
          {/* {
            filterTitle &&  filterTitle.map( survey => <SurveyCard key={survey._id} survey={survey}></SurveyCard> )
          } */}
          {
            isPending ? <progress className="progress progress-primary w-56"></progress>:
            isTrue?surveys?.map(survey => <SurveyCard key={survey._id} survey={survey}></SurveyCard>):
            isTitle?filterTitleSurvey?.map(survey => <SurveyCard key={survey._id} survey={survey}></SurveyCard>):isCategory?filterCategorySurvey.map(survey => <SurveyCard key={survey._id} survey={survey}></SurveyCard>):surveys?.map(survey => <SurveyCard key={survey._id} survey={survey}></SurveyCard>)
          }
      </div>

    </div>
  );
};

export default AllSurveys;