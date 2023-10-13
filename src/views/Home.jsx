import React, { useState, useEffect } from 'react';
import bgimg from "../assets/images/field1.png";
import damagedtree from "../assets/images/damagedtree.png";
import Slider from "../components/Slider";
import MessyTree from "../components/MessyTree";
import HealthyTree from "../components/HealthyTree";
import Storm from "../components/Storm";
import TreeWalker from "../components/TreeWalker";
import Testimonials from "../components/Testimonials";
import ScheduleEv from "../components/ScheduleEv";
import ContactUs from "../components/ContactUs";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Home = () => {
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const handleScroll = () => {
      if (window.scrollY >= 300) { // Adjust the scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  return (
    <>
    {isScrolled? (<Navbar/>): ''}
   
    
    {/* <Navbar/> */}
     <Slider />
     <MessyTree />

     {/* ---Storm Section----- */}
      <Storm />
      {/*----------- RedTree-------------- */}
      <HealthyTree />
      {/*----------- TreeWalker-------------- */}
      <TreeWalker />

      {/*----------- Testimonails-------------- */}
      <Testimonials />
      {/*----------Schedule Evaluation---------*/}
     <ScheduleEv />

      {/* ------- Services Section ------ */}
    <Services />
      {/* Contact Us Section */}
 
      {/* <section className="py-10 px-5">
        <div className="bg-footer bg-[#268C76] rounded-xl px-4 py-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 justify-center">
              <h4 className="font-Volkhov text-white text-2xl text-bold text-left leading-10">
                Looking forward to hearing from you
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <img src={email} alt="email" className="w-8 h-8" />

                  <div className="font-Source Sans Pro text-white">
                    info@treewalkernc.com
                  </div>
                </div>
                <div className="flex gap-3">
                  <img src={email} alt="email" className="w-8 h-8" />

                  <div className="font-Source Sans Pro text-white">
                    (980) 777-5224
                  </div>
                </div>
              </div>
            </div>
            <BlockButton />
          </div>
        </div>
      </section> */}

      {/* <section className="relative py-5 px-5 lg:py-20 lg:px-36 ">
        <div className="sm:hidden lg:block relative bg-[#268C76] rounded-xl">
          <img
            src={fullvector}
            className="absolute bg-[#268C76] botton-5 rounded-2xl -z-1 right-0"
          />
          <div className="relative z-1 px-4 py-10 lg:px-10 lg:pt-20 lg:pb-20">
            <div className="flex flex-col gap-8 lg:w-max lg:pt-5 lg:pb-0 lg:px-10 lg:gap-12">
              <div className="flex flex-col gap-6 justify-center lg:gap-12 ">
                <h4 className="font-Volkhov text-white text-2xl text-bold text-left leading-10 lg:text-5xl">
                  Looking forward to hearing from you
                </h4>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <img src={sms} alt="email" className="w-8 h-8" />

                    <div className="font-Source Sans Pro text-white">
                      info@treewalkernc.com
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img src={call} alt="call" className="w-8 h-8" />

                    <div className="font-Source Sans Pro text-white">
                      (980) 777-5224
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-max">
                <BlockButton />
              </div>
            </div>
          </div>
        </div>        
          <img
            src={ftvector}
            className="lg:hidden sm:block absolute bg-[#268C76] left-4 botton-5 rounded-xl -z-1"
          />
          <div className=" relative z-1 px-4 py-10 lg:py-0">
            <div className="flex flex-col gap-8 lg:w-max lg:pt-5 lg:pb-24 lg:px-10 lg:gap-12 ">
              <div className="flex flex-col gap-6 justify-center lg:gap-12">
                <h4 className="font-Volkhov text-white text-2xl text-bold text-left leading-10 lg:text-5xl">
                  Looking forward to hearing from you
                </h4>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <img src={sms} alt="email" className="w-6 h-6" />

                    <div className="font-Source Sans Pro text-white">
                      info@treewalkernc.com
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img src={call} alt="call" className="w-6 h-6" />

                    <div className="font-Source Sans Pro text-white">
                      (980) 777-5224
                    </div>
                  </div>
                </div>
              </div>
              <BlockButton />
            </div>
          </div>
        
      </section> */}

     <ContactUs />
     
  
     
      {/* ---Footer--- */}
      <Footer />
     
    </>
  );
};

export default Home;
