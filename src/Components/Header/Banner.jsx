import React, { useEffect } from 'react';
import logoDarkImg from '../../assets/MaritalDesk-light.png'
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    // animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);
  
    return (
    <div className='bg-gradient-to-r from-[#013223] via-[#006747] to-[#014B34] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
        <div className="hero max-w-6xl mx-auto py-6 md:py-10 px-4">
            <div className="hero-content text-center">
                <div className="max-w-2xl">
                    <img
                        src={logoDarkImg}
                        alt="logo"
                        className='w-32 h-32 mx-auto mb-3 transition-all duration-500 hover:scale-110 hover:rotate-3'
                        data-aos="fade-down" 
                        data-aos-delay="100"
                    />
                    <h1 className='text-white text-4xl md:text-5xl font-bold  transition-all duration-300 hover:scale-105' data-aos="fade-down">
                        MaritalDesk
                    </h1>
                    <p className="pb-6 pt-3 text-white/90 text-lg leading-relaxed transition-colors duration-300 hover:text-white" data-aos="fade-up">
                        We didn't just digitalize marriage registration.
                        We engineered a secure, automated, and verifiable marriage ecosystem with validation, digital certification, and role-based authority — built for Bangladesh's future e-governance framework.
                    </p>
                    <Link 
                        to='/auth/register' 
                        className="btn bg-white text-green-900 font-semibold border-0 px-8 py-3 mt-4 
                                   transition-all duration-300 hover:bg-green-50 hover:scale-105 hover:shadow-lg 
                                   dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                        data-aos="fade-up" 
                        data-aos-delay="100"
                    >
                        Create an account
                    </Link>
                </div>
            </div>
        </div>
    </div>
);
};

export default Banner;