import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const SurveyDetails = () => {
    const [data] = useLoaderData();
    const [showCommentBox, setShowCommentBox] = useState(false)
    const {title ,category,description} = data;
    console.log(data);
    return (
        <div>
            <h2>survey details</h2>
            <div  className="card text-center  bg-emerald-400 shadow-xl ">
               
               <div className="card-body">
               <h2 className=" text-2xl font-semibold mb-3 mt-5">{title}</h2>
               <p className="text-3xl font-semibold ">{category}</p>
               <p className=" text-base font-semibold w-40 mx-auto text-center ">{description}</p>
               
             </div>
                 
            </div>
            <div className="flex gap-5 justify-center mt-6 items-center">
                 <div> 
                         <button className="btn border border-primary rounded-r-none ">0</button> 
                        <button className="btn btn-primary rounded-l-none">Like</button>
                 </div>
                 <div> 
                         <button className="btn border border-primary rounded-r-none ">0</button> 
                         <button className="btn rounded-l-none btn-primary">DisLike</button>
                 </div>
                 
                 <div className="flex ">
                 <textarea className=" border border-primary   rounded-lg p-2 rounded-r-none" placeholder="comment"></textarea>
                 <button className="btn btn-primary text-center flex items-center rounded-l-none py-9 px-6">Comment</button>
                 </div>
            </div>

            <div className="flex justify-between mt-14">
                {/* 1 */}
                <div className="flex-1 flex justify-center">
                  <p className=" border">pichart</p>
                </div>
                {/* 2 */}
                <div className="flex-1 flex justify-center border">
                    <div className=" ">
                    <button onClick={() => setShowCommentBox(!showCommentBox)}>comment Box</button>
                     {
                       showCommentBox && <div className=''>
                        hddd jj jjj
                        </div>
                     }
                    </div>
                </div> 
            </div>
             
        </div>
    );
};

export default SurveyDetails;