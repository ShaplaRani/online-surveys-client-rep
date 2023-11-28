import { Fragment, useState } from "react";


const Modal = () => {
    const [showModal, setShowModal] = useState(false)
    const handleRegect = (e,name) => {
         e.preventDefault();
        
         const feedback = e.target.feedback.value;
         console.log(name, feedback);
    }
    return (
        <Fragment>
            <div>
                <button onClick={() => setShowModal(true)} className="btn btn-primary">Modal</button>
            </div>
            {
                !showModal ? "" :
                    <div className="fixed w-6/8 inset-0 backdrop-blur-sm flex flex-col justify-center items-center">
                        <div onClick={() => setShowModal(false)}>X</div>
                        <div>
                            <form onSubmit={() => handleRegect('hello')} name="feedback" className="flex items-center gap-3">
                                <textarea className="textarea textarea-primary" placeholder="Feedback"></textarea>
                                <button className="btn btn-primary px-6"> Feedback</button>
                            </form>
                        </div>

                    </div>

            }
        </Fragment>

    );
};

export default Modal;