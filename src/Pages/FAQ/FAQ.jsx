import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {

    const faqs = [
        {
            question: "What is MaritalDesk?",
            answer:
                "MaritalDesk is a centralized digital platform that allows citizens to apply for marriage, divorce, and certificates online with verified processing by Kazi and administrators."
        },
        {
            question: "Is the online application legally valid?",
            answer:
                "Yes. All applications go through Kazi verification and admin approval, ensuring every certificate issued is legally recognized."
        },
        {
            question: "How does the verification process work?",
            answer:
                "Once a bride or groom submits the form, a Kazi reviews the provided information, adds verification details, and forwards it to the admin for final approval."
        },
        {
            question: "Can I download my marriage certificate?",
            answer:
                "Yes. Once approved by the admin, users can download the digital marriage certificate directly from their dashboard."
        },
        {
            question: "Can I request a divorce through the platform?",
            answer:
                "Yes. Users can submit digital divorce applications, which follow a similar verification and approval process as marriage applications."
        },
        {
            question: "What happens if my application is rejected?",
            answer:
                "Rejected applications include a reason provided by the Kazi or admin. Users can correct the information and resubmit."
        },
        {
            question: "Do I need to visit a physical office after applying online?",
            answer:
                "In most cases, no. However, physical presence may be required for identity verification depending on local regulations."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-15 bg-gradient-to-r from-[#013223] via-[#006747] to-[#014B34] max-w-6xl mx-auto rounded-2xl my-5">
            <div className="text-center max-w-4xl mx-auto space-y-3 ">
                <h2 className="text-white text-2xl font-bold">Frequently Asked Question (FAQ)</h2>
                <p className="text-gray-200 mb-3">Frequently asked questions about our centralized digital marital services,helping citizens understand the full process from submission to certification</p>
            </div>
            <div className="w-full max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl transition-all duration-200 ${openIndex === index
                            ? "bg-yellow-50 border-yellow-300"
                            : "bg-white border-gray-200"
                            }`}
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-5 text-left font-medium text-yellow-500"
                        >
                            {faq.question}
                            <FiChevronDown
                                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Answer */}
                        {openIndex === index && (
                            <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
