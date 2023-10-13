import React from 'react'
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <>
     <section className="pt-10 pb-5 pl-5 flex flex-col gap-10  md:px-10 lg:px-36 lg:py-10 lg:gap-14">
        <div className="flex flex-col gap-14 sm:px-8 sm:flex-row  sm:justify-between">
          <div>
            <img src={logo} alt="instagram" className="tree-walker-logo" />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-center lg:items-center">
            <div className="flex gap-2">
              <img src={instagram} alt="instagram" className="" />
              <div className="font-Source Sans Pro text-[#3d3d3d] font-small text-xl sm:text:small">
                @treewalkerarborcare
              </div>
            </div>
            <div className="flex gap-2">
              <img src={facebook} alt="instagram" className="" />
              <div className="font-Source Sans Pro text-[#3d3d3d] font-small text-xl">
                treewalkerarborcare
              </div>
            </div>
          </div>
        </div>
        <div>© 2023 TreeWalker LLC.</div>
      </section>
    </>
  )
}

export default Footer