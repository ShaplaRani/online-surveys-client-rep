import axios from "axios";

//https://online-survey-server.vercel.app
const  axiosPublic = axios.create({
    baseURL: 'https://online-survey-server.vercel.app'
})

const useAxiosPublic = () => {
   return  axiosPublic
};

export default useAxiosPublic;