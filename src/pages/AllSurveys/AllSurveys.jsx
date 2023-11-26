import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SurveyCard from "./SurveyCard";


const AllSurveys = () => {
    const axiosSecure = useAxiosSecure();
   
    const { data: surveys = []   } = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const res = await axiosSecure.get('/survey');
            console.log(res.data);
            return res.data;
        }
    })
    //console.log(surveys);
    return (
        <div>
           <h2>All Survey</h2>
           <div className="grid grid-cols-1, md:grid-cols-2 lg:grid-cols-4 gap-5">
             {
                surveys?.map(survey => <SurveyCard key={survey._id} survey={survey}></SurveyCard>)
             }
           </div>

        </div>
    );
};

export default AllSurveys;