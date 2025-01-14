import React from 'react';
import '../styles/FAQs.css';

const faqData = [
    {
        question: "What is BlindWings?",
        answer: "BlindWings is a platform that shares uplifting and motivational quotes to inspire and empower individuals."
    },
    {
        question: "How often are new quotes shared?",
        answer: "New quotes are shared daily to keep you inspired and motivated each day."
    },
    {
        question: "Can I contribute my own quotes?",
        answer: `Yes, we welcome contributions! Please reach out to us at <a href='mailto:rushiharkal1@outlook.com'>rushiharkal1&#64;outlook&#46;com</a> with your quotes.`
    },
    {
        question: "How can I stay updated with new quotes?",
        answer: "You can subscribe to our newsletter, follow us on social media, or visit our website regularly to stay updated with new quotes."
    }
];

function FAQs() {
    return (
        <div className="container my-5 p-4 border rounded shadow-lg bg-dark text-white">
            <h1 className="text-center">FAQs</h1>
            <hr />

            <div className="accordion w-100" id="basicAccordion">
                {faqData.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button 
                                className="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse"
                                data-bs-target={`#basicAccordionCollapse${index}`} 
                                aria-expanded="false" 
                                aria-controls={`basicAccordionCollapse${index}`}>
                                {faq.question}
                            </button>
                        </h2>
                        <div 
                            id={`basicAccordionCollapse${index}`} 
                            className="accordion-collapse collapse" 
                            aria-labelledby={`heading${index}`} 
                            data-bs-parent="#basicAccordion">
                            <div className="accordion-body text-center">
                                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr />
        </div>
    );
}

export default FAQs;
