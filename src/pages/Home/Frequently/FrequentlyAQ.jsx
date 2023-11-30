

const FrequentlyAQ = () => {
    return (
        <div className="lg:flex items-center gap-5 p-5 mt-20">
             <div className="flex-1">
                <img src="https://i.ibb.co/tLGySYQ/faq.jpg" alt="" />
             </div>
            <div className="flex-1">
            <h3 className="text-5xl font-bold text-center  mb-10">Frequently Asked Questions?</h3>
            <div className="collapse collapse-arrow bg-base-200  mb-5">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium ">
                 How do I participate in surveys?
                </div>
                <div className="collapse-content mt-5">
                    <p>To participate in surveys, simply log in to your account, and you will find available surveys in your dashboard. Click on a survey, answer the questions, and earn rewards</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl rounded-none font-medium ">
                How are rewards distributed?
                </div>
                <div className="collapse-content mt-5">
                    <p>Rewards are typically distributed after completing a survey. The method may vary, but common options include gift cards, PayPal transfers, or points that can be redeemed for various rewards</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium ">
                   Are my responses anonymous?
                </div>
                <div className="collapse-content mt-5">
                    <p>Yes, we prioritize your privacy. Your survey responses are kept anonymous and are used only for research purposes. Your personal information is never shared.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium ">
                Can I change my survey preferences?
                </div>
                <div className="collapse-content mt-5">
                    <p>Yes, you can update your survey preferences at any time in your account settings. This allows you to receive surveys that match your interests and preferences</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium ">
                   Is SurveyFlux free to use?
                </div>
                <div className="collapse-content mt-5">
                    <p>Yes, SurveyFlux is completely free to use. You can sign up, participate in surveys, and earn rewards without any cost. We may offer premium features in the future, but basic survey participation will always be free</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FrequentlyAQ;