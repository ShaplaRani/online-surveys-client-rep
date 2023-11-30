import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SurveyCard from "../../AllSurveys/SurveyCard";


const RecentlySurveys = () => {
    const axiosPublic = useAxiosPublic()

    const { data: surveys = []  } = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/recently-survey?sortField=timestamp&sortOrder=desc`);
        //   const surveys = res.data.filter(item => item.isPublish === true);
          console.log(res.data);
             
          //return res.data
          return res.data;
        }
      })

      console.log(surveys);
    return (
        <div className="my-20">
            <div className=" text-center my-10">
           
            <h3 className="text-2xl md:text-4xl text-orange-600 font-normal mx-2   py-4 uppercase">recently created survey</h3>
           </div >
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 ">
               {
                surveys.slice(0, 6).map(survey => <SurveyCard survey={survey} key={survey.id}></SurveyCard>)
               }

           </div>
            
        </div>
    );
};

export default RecentlySurveys;

