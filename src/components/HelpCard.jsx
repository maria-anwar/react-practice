import React from "react";
import HelpKey from "../components/HelpKey";

const HelpCard = (props) => {
  return (
    <>
      {/* <div className="bg-white rounded-lg p-6 flex flex-col gap-10">
                 <h4 className="font-Volkhov font-bold text-[#242424] text-3xl">{props.title}</h4>
                 <div className="flex flex-col gap-4">
                    <HelpKey title={'Concord'}/>
                    <HelpKey title={'Kannapolis'}/>
                    <HelpKey title={'Charlotte'}/>
                    <HelpKey title={'Huntersville'}/>
                    <HelpKey title={'Matthews'}/>
                    <HelpKey title={'University'}/>
                    <HelpKey title={'Harrisburg'}/>
                    <HelpKey title={'Greater Charlotte area'}/>
                 </div>
              </div> */}

              <div className="bg-white rounded-lg p-6 flex flex-col gap-10 md:w-1/2">
                 <h4 className="font-volkhov font-bold text-[#242424] text-3xl">{props.title}</h4>
                 <div className="grid grid-rows-1 grid-flow-row gap-4 sm:grid sm:grid-rows-4 sm:grid-flow-col">
                    <HelpKey title={'Concord'}/>
                    <HelpKey title={'Kannapolis'}/>
                    <HelpKey title={'Charlotte'}/>
                    <HelpKey title={'Huntersville'}/>
                    <HelpKey title={'Matthews'}/>
                    <HelpKey title={'University'}/>
                    <HelpKey title={'Harrisburg'}/>
                    <HelpKey title={'Greater Charlotte area'}/>
                 </div>
              </div>

     
    </>
  );
};

export default HelpCard;
