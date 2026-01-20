import { CheckCircle, UserPlus, FileText, ClipboardCheck, Download, Shield } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HowItWorks = () => {

    // animation
        useEffect(() => {
            AOS.init({
                duration: 1000,
                offset: 100,
                once: true,
            });
        }, []);

  const steps = [
    {
      id: 1,
      icon: <UserPlus className="w-10 h-10 text-yellow-500" />,
      title: "Create an Account",
      desc: "Register with your NID, email, and password to access your secure dashboard.",
    },
    {
      id: 2,
      icon: <FileText className="w-10 h-10 text-yellow-500" />,
      title: "Apply for Marriage or Divorce",
      desc: "Choose the desired service and fill out the online application form accurately.",
    },
    {
      id: 3,
      icon: <ClipboardCheck className="w-10 h-10 text-yellow-500" />,
      title: "Kazi Verification",
      desc: "Your Kazi reviews and verifies the information and documents you submit.",
    },
    {
      id: 4,
      icon: <Shield className="w-10 h-10 text-yellow-500" />,
      title: "Admin Approval",
      desc: "The admin validates the application and approves or rejects it after review.",
    },
    {
      id: 5,
      icon: <Download className="w-10 h-10 text-yellow-500" />,
      title: "Get Your Certificate",
      desc: "Once approved, download your official marriage or divorce certificate with QR verification.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-20">
        <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 
                className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-300 mb-4" 
                data-aos="fade-down" 
                data-aos-delay="100"
            >
                How to Use MaritalDesk
            </h2>
            <p 
                className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto" 
                data-aos="fade-down"
            >
                Follow these simple steps to apply for your marriage or divorce certificate online. 
                The process is secure, transparent, and paperless.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {steps.map((step) => (
                <div
                    key={step.id}
                    className="flex flex-col items-center text-center p-6 rounded-2xl 
                               bg-gray-50 dark:bg-gray-800 
                               shadow-sm hover:shadow-lg 
                               border border-gray-200 dark:border-gray-700
                               transition-all duration-300 
                               hover:-translate-y-1 
                               group cursor-pointer"
                >
                    <div className="p-4 rounded-full mb-4 
                                    bg-white dark:bg-gray-700 
                                    transition-all duration-300 
                                    group-hover:bg-green-50 dark:group-hover:bg-green-900/30">
                        <div className="text-green-700 dark:text-green-400 text-2xl 
                                        transition-colors duration-300 
                                        group-hover:text-green-800 dark:group-hover:text-green-300">
                            {step.icon}
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-2 
                                   transition-colors duration-300 
                                   group-hover:text-green-800 dark:group-hover:text-green-200">
                        {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 
                                 transition-colors duration-300 
                                 group-hover:text-gray-800 dark:group-hover:text-gray-300">
                        {step.desc}
                    </p>
                </div>
            ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-green-50 dark:bg-gray-800 px-6 py-3 rounded-xl 
                            transition-all duration-300 hover:bg-green-100 dark:hover:bg-gray-700">
                <CheckCircle className="w-8 h-8 text-green-700 dark:text-green-400 transition-colors duration-300" />
                <p className="text-gray-700 dark:text-gray-300">
                    All data is protected and verified through official Kazi and Admin channels.
                </p>
            </div>
        </div>
    </section>
);
};

export default HowItWorks;
