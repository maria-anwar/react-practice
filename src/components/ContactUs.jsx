import React from "react";
import BlockButton from "./BlockButton";
import fullvector from "../assets/images/fullvector.png";
import ftvector from "../assets/images/ftvector.png";
import call from "../assets/images/call.png";
import sms from "../assets/images/sms.png";
import mail from "../assets/images/mail.png";
const ContactUs = () => {
  return (
    <>
      {/* style={{ backgroundImage: `url(${fullvector})` }} */}
      {/* <section className="px-4 mt-10  lg:px-36 lg:py-20 bg-black">
        <div className="relative  z-1 rounded-2xl bg-[#268C76] px-4 py-10 border">
          <img
            src={fullvector}
            className="absolute bg-cover bg-[#268C76] rounded-xl -z-1  top-0 right-0 "
          />
          <div className="relative z-1 flex flex-col gap-6 lg:w-max lg:pb-28 lg:px-10 lg:gap-12 lg:pt-14 border">
            <div className="flex flex-col gap-6 justify-center lg:gap-12">
              <h4 className="font-volkhov text-white text-2xl text-bold text-left leading-8 lg:text-5xl">
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
      <section className="px-4 py-14 lg:px-16 lg:py-16 xl:px-28  border">
        <div
          className="bg-[#268C76] bg-cover bg-no-repeat xxs:block sm:hidden"
          style={{ backgroundImage: `url(${fullvector})` }}
        >
          <div className="flex flex-col gap-6 px-5 py-10">
            <div className="flex flex-col gap-6 justify-center lg:gap-12">
              <h4 className="font-Volkhov text-white text-2xl text-bold text-left leading-8 lg:text-5xl">
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
            <div className="sm:w-[60%]">
              <BlockButton />
            </div>
          </div>
        </div>

        <div
          className=" bg-lgvector md:bg-contain sm:block xxs:hidden rounded-xl sm:px-4 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-6 px-5 py-10">
            <div className="flex flex-col gap-6 justify-center lg:gap-12">
              <h4 className="font-volkhov text-white text-2xl text-bold text-left leading-8 lg:text-4xl">
                Looking forward to hearing from you
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <img src={mail} alt="email" className="w-6 h-6" />

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
            <div className="sm:w-[60%]">
              <BlockButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
