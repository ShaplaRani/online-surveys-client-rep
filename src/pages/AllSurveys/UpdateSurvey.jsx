import { useLoaderData } from "react-router-dom";


const UpdateSurvey = () => {
    const [data] = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>update</h2>
        </div>
    );
};

export default UpdateSurvey;