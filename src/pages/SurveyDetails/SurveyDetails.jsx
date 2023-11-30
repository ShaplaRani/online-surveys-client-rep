import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useProUser from "../../hooks/useProUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const SurveyDetails = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const [data] = useLoaderData();
    const [showCommentBox, setShowCommentBox] = useState(false)
    const { title, category, description, question, like, dislike, _id } = data;
    const [updateLike, setUpdateLike] = useState(like)
    const [updateDislike, setUpdateDislike] = useState(dislike)
    //
      const [voted, setVoted] = useState(null);
      const [isTrue, setIsTrue] = useState(true);
      //const [isFeedback, setFeedback] = useState('only voted')
      const isFeedback ='already voted' 
    //
    console.log(data);
    const [isProUser] = useProUser();
    console.log('proUser', isProUser);
    const status1 = 'like';
    const status2 = 'dislike';
    const handleLike = (id) => {
        // setShowLikeDislike()
        axiosSecure.patch(`/survey-like-dislike?status=${status1}&id=${id}`, data)
            .then(res => {
                console.log(res.data);
                setUpdateLike(updateLike + 1)
            })
        console.log(id);
    }
    const handleDislike = (id) => {
        // setShowLikeDislike()
        axiosSecure.patch(`/survey-like-dislike?status=${status2}&id=${id}`, data)
            .then(res => {
                console.log(res.data);
                setUpdateDislike(updateDislike + 1)
            })
        console.log("click", id);
    }
    
    const handleReport = (id) => {
        console.log('click');
        axiosSecure.patch(`/survey-report/${id}`)
            .then(res => {
                console.log(res.data)
                //  if (res.data.modifiedCount > 0) {


                //  }
            })
    }

    const handleComment = (e) => {
       e.preventDefault();
       
        const commit = e.target.comment.value;
        console.log('click',commit);
        const commentData = {
            commit,
           email: user?.email,
           title,
        }
        axiosSecure.post('/pro-user/create-comment', commentData)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                e.target.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'comment added successfully.',
                   
                   confirmButtonText: 'Cool'
                  });
            }
        })
    }
    const handleVoted = (vote) => {
        console.log(vote);
       
        const data = {
            email: user?.email,
            name:user?.displayName,
            time: new Date(),
            vote,
           title,
        }
        axiosPublic.get('/survey-vote')
        .then( res => {
            console.log(res.data);
            setIsTrue(false);
            setVoted(null)
            const email = res?.data?.find(item => item.email === user?.email && item.title == title)
            if(!email){
                axiosPublic.post('/survey-vote', data)
              .then(res => {
              console.log(res.data);
              setIsTrue(false);
              setVoted(vote)
            
        })
            }
        })
        
        
        
    }
    //comment get
    const { data: comments = [],isPending  } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/comment?title=${title}`);
          return res.data;
        }
      })
    console.log('comment',comments);
   
    return (
        <div className=" my-20 p-4">
           
            <div className="  max-w-7xl  mx-auto py-20 px-4 md:px-14 rounded-lg
             bg-emerald-400 shadow-xl flex justify-between items-center ">

                <div className=" max-w-sm">
                    <h2 className=" text-2xl font-semibold mb-3 mt-5">{title}</h2>
                    <p className="text-3xl font-semibold ">{category}</p>
                    <p className=" text-base font-semibold   ">{description}</p>
                </div>
                <div className="flex flex-col gap-10 items-center">
                    <div>
                        <button disabled={!user} onClick={() => handleReport(_id)} className="btn btn-primary ">Report</   button>
                    </div>

                    <div>
                        <span className="text-lg">{updateLike}</span>
                        <button disabled={!user} onClick={() => handleLike(_id, like)} className="text-2xl">
                            <AiOutlineLike></AiOutlineLike>
                        </button>
                    </div>
                    <div>
                        <span className="text-lg">{updateDislike}</span>
                        <button disabled={!user} onClick={() => handleDislike(_id, dislike)} className="text-2xl">
                            <AiOutlineDislike></AiOutlineDislike>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-evenly gap-5   mt-14 max-auto p-2">
                
                   <div className="  ">
                     <div className="flex justify-center btn text-3xl font-bold btn-primary">
                       {
                        isTrue?"poll":voted?voted:isFeedback
                       }
                        </div>
                     <p className="text-xl text-center font-semibold text-orange-500 mt-10 mb-3">
                       {question}</p>
                     <div className="flex justify-center">
                        <button disabled={!user} onClick={() => handleVoted('yes')} className="text-xl font-bold rounded-l-lg border-r-2 bg-blue-700 px-5 py-2 text-white ">YES</button>
                        <button disabled={!user} onClick={() => handleVoted('no')} className="text-xl rounded-r-lg  font-bold bg-blue-700 px-5 py-2 text-white ">NO</button>
                     </div>
                 </div>

                <div className="  mt-10 md:mt-0 ">
                    <div className=" ">

                        <div className="rounded-lg   shadow-2xl bg-base-100">
                            <form onSubmit={handleComment} className="card-body">
                               
                                <textarea name="comment" className=" form-control textarea textarea-primary" placeholder="comment"></ textarea>
                                <button disabled={!isProUser} className="btn mt-5 btn-primary  text-center">Comment</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <div className="">
               
                <div className=" flex justify-center">
                    <div className=" ">
                        <button className="flex items-center gap-2 text-xl btn btn-primary mt-10 mb-5 justify-center" onClick={() => setShowCommentBox(!showCommentBox)}>{comments.length}<FaRegCommentAlt></FaRegCommentAlt> comment </button>
                        {
                            showCommentBox && <div className=''>
                                {/*  */}
                                <div className=" bg-white rounded-lg">
                <table className="text-center table w-full">
                    {/* head */}
                    <thead className="bg-emerald-400 text-lg font-medium text-white">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Comment</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {

                            isPending ? <span className="loading loading-spinner text-primary"></span> : comments?.map((comment, index) => <tr key={comment._id}>
                                <th>{index + 1}</th>
                                <td>{comment?.email}</td>
                                <td>{comment?.commit}</td>
                              

                               

                                

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

                                {/*  */}
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SurveyDetails;