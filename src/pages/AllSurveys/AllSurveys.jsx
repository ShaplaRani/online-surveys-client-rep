import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SurveyCard from "./SurveyCard";


const AllSurveys = () => {
    const axiosSecure = useAxiosSecure();
   
    const { data: surveys = [],isPending ,refetch} = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const res = await axiosSecure.get('/survey');
            const surveys = res.data.filter(item => item.isPublish === true);
            console.log(surveys);
            return surveys
            //return res.data;
        }
    })
    // const handleSurveyUpdate = () => {
    //     console.log('click');
    // }
    console.log(surveys);
    return (
        <div>
           <h2>All Survey</h2>
           <div className="grid grid-cols-1, md:grid-cols-2 lg:grid-cols-4 gap-5">
             {
               isPending?<progress className="progress progress-primary w-56"></progress>  :surveys?.map(survey => <SurveyCard key={survey._id}  survey={survey}></SurveyCard>)
             }
           </div>

        </div>
    );
};

export default AllSurveys;