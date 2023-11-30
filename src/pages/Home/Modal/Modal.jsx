


const Modal = ({ isOpen, onClose, }) => {

   
    const handleReject = (e) => {
         e.preventDefault();
        
         const feedback = e.target.feedback.value;
         console.log(feedback);
         console.log('modal cliek');
    }
    

    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-md mx-auto my-6">
        {/* Modal content */}
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-3xl font-semibold">Modal Title</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black">×</span>
            </button>
          </div>
          
          {/* Add a form element */}
          
          <form onSubmit={handleReject} className="p-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="exampleFormControlInput1">
              Feedback
            </label>
            <textarea name="feedback"  placeholder="Feedback" className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md">
            
            </textarea>
            
           
           
            <button
            
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;