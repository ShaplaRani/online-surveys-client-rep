

const FrequentlyAQ = () => {
    return (
        <div>
             <h3 className="text-5xl font-bold text-center  mb-10">Frequently Asked Questions?</h3>
            <div className="collapse collapse-arrow bg-base-200  mb-10">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium ">
                    Click to open this one and close others
                </div>
                <div className="collapse-content mt-5">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  mb-10">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl rounded-none font-medium ">
                    Click to open this one and close others
                </div>
                <div className="collapse-content mt-5">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  mb-10">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium ">
                    Click to open this one and close others
                </div>
                <div className="collapse-content mt-5">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAQ;