import banner  from '../../../../src/assets/banner.jpg'

const Banner = () => {
    return (
        <div className='lg:flex justify-between items-center bg-white shadow-lg pt-20 px-5'>
            <div className='flex-1  ml-4'>
                <h3 className='text-3xl font-bold uppercase text-orange-600 mb-6'>Online
                <span className='text-blue-600'> survey</span></h3>
                <p className='text-lg font-medium text-gray-500 mb-3'>A membership satisfaction survey is the connection to your members needs that your association needs to establish. According to Folio Magazine, surveying is important for associations today because it is the “most reliable” source for feedback from your members.</p>
                <button className='btn btn-primary'>Explore..</button>
            </div>
            <div className='flex-1 ml-0  flex justify-center lg:justify-end'>
                <img  className='' src={banner} alt="" />
            </div>
       
        </div>

        // <div className=" h-[90vh]" style={{ backgroundImage: 'url(https://i.ibb.co/wRcJcJB/banner1.jpg)' }}>
        //     <div className=""></div>
        //     <div className="">
        //         <div className=" max-w-md">
        //             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        //             <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn btn-primary">Explore</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;