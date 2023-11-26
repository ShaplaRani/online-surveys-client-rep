import { useLoaderData } from "react-router-dom";


const SurveyDetails = () => {
    const [data] = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>survey details</h2>
        </div>
    );
};

export default SurveyDetails;