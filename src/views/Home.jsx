import React, { useEffect } from "react";

import "font-awesome/css/font-awesome.min.css";
import wreckimg from "../assets/images/wrecked.png";
import mess from "../assets/images/mess.png";
import bgimg from "../assets/images/field1.png";
import redtree from "../assets/images/redtree.png";
import damagedtree from "../assets/images/damagedtree.png";
import treeVector from "../assets/images/treeVector.png";
import forest from "../assets/images/forest.png";
import damagelg from "../assets/images/damage-lg.png";
import treewalker from "../assets/images/treewalker.png";
import climber from "../assets/images/climber.png";
import climber1 from "../assets/images/climber1.png";
import trees from "../assets/images/trees.png";
import treelog from "../assets/images/treelog.png";
import TreesRisk from "../components/TreesRisk";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import woodcutting from "../assets/images/woodcutting.png";
import woody from "../assets/images/woody.png";
import treeverticle from "../assets/images/treeverticle.png";
import fullvector from "../assets/images/fullvector.png";
import ftvector from "../assets/images/ftvector.png";
import check from "../assets/images/check.svg";
import email from "../assets/images/email.svg";
import call from "../assets/images/call.png";
import sms from "../assets/images/sms.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import logo from "../assets/images/logo.png";
import Testimonial from "../components/Testimonial";
import HelpKey from "../components/HelpKey";
import KeyBenefit from "../components/KeyBenefit";
import BlockButton from "../components/BlockButton";
import HelpCard from "../components/HelpCard";
import ServiceCard from "../components/Services";
const Home = () => {
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  // console.log(screenWidth + "x" + screenHeight);
  console.log(screenWidth);
  console.log(screenHeight);

  return (
    <>
      <section>
        <div className="relative">
          <img
            src={forest}
            alt="Background Image"
            className="absolute top-0 left-0 w-full h-full -z-1 object-cover lg:h-screen "
          />
          <div className="relative z-1 flex flex-col items-center gap-40 pt-40 pb-10 object-cover lg:pb-20">
            <div className="flex flex-col items-center gap-10 lg:gap-10 text-white px-4">
              <div className="flex flex-col gap-3 lg:gap-10 items-start">
                <h2 className="font-Volkhov text-5xl lg:text-6xl lg:text-bold lg:px-80 text-normal text-center leading-tight tracking-2">
                  Keeping you safe from unhealthy trees.
                </h2>
                <div className="font-Agipo text-md w-full text-center tracking-4">
                  Professional tree services.
                </div>
              </div>
              <div className="rounded-md bg-[#FF740A] px-4 py-2 text-xl text-bold">
                Text Us
              </div>
            </div>
            <div className="border rounded-full w-20 h-20 flex items-center justify-center">
              <i
                className="fa fa-arrow-down text-white text-normal"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-6 flex flex-col gap-3 justify-center items-center lg:p-20">
        <h2 className="p-2 font-Volkhov text-5xl  text-black-700 text-center">
          Are your trees hurting more than helping
        </h2>
        <div className=" flex flex-col lg:flex-row lg:gap-5 lg:p-10 gap-4">
          <TreesRisk
            imgUrl={wreckimg}
            title={"Unchecked trees can be dangerous"}
            point1={
              "Is your foundation at risk of cracking from invasive roots?"
            }
            point2={
              "Is your foundation at risk of cracking from invasive roots?"
            }
            point3={"How safe are your parked vehicles?"}
          />
          <TreesRisk
            imgUrl={mess}
            title={"Trees are messy"}
            point1={"Is raking leaves a huge chore every year?"}
            point2={"Tired of tripping over roots while mowing?"}
            point3={"Overgrowth getting unsightly?"}
          />
        </div>
      </section>

      <section className=" bg-[#242424] flex flex-col items-center w-full lg:flex-row">
        <div className="flex flex-col gap-4 pt-10 pb-20 sm:px-4 lg:w-3/5 lg:px-40">
          <h3 className="font-Volkhov text-white text-4xl text-bold text-left">
            Storms happen all the time.
          </h3>
          <div className="font-Source Sans Pro text-xl text-normal text-white ">
            Even the best cared for trees can suffer horrible consequences at
            the hands of nature.
          </div>
        </div>
        <img
          src={damagelg}
          alt="healthy-tree"
          className="object-cover md:w-screen lg:order-first"
        />
      </section>

      {/*----------- RedTree-------------- */}
      <section className="flex flex-col w-full lg:flex-row">
        <div className="relative z-40 sm:h-396 sm:w-full mb-0 bg-opacity-70 bg-[#268C76] lg:w-5/6">
          <img
            src={treeVector}
            alt="Background Image"
            className="absolute top-0 left-0 w-full h-full -z-1 object-cover bg-[#268C76]"
          />
          <div className="relative z-1 flex flex-col w-full px-4 gap-4 pt-20 pb-10 lg:gap-4 lg:pl-20 lg:pr-20 lg:py-20  bg-opacity-70">
            <h3 className="font-Volkhov text-white text-4xl text-bold text-left leading-10">
              Healthy trees are safe trees
            </h3>
            <div className="flex flex-col gap-2 text-white z-2">
              <div className="flex gap-2 py-2">
                <div className="flex justify-center items-center">
                  <i className="w-8 h-8 rounded-full bg-[#EDEFEE]" />
                </div>
                <div className="font-Source Sans Pro text-normal">
                  Feel confident your property is safe from the next storm.
                </div>
              </div>
              <div className="flex gap-2 py-2">
                <div className="flex justify-center items-center">
                  <i className="w-8 h-8 rounded-full bg-[#EDEFEE]" />
                </div>
                <div className="font-Source Sans Pro text-normal">
                  Feel confident your property is safe from the next storm.
                </div>
              </div>
              <div className="flex gap-2 py-2">
                <div className="flex justify-center items-center">
                  <i className="w-8 h-8 rounded-full bg-[#EDEFEE]" />
                </div>
                <div className="font-Source Sans Pro text-normal">
                  Feel confident your property is safe from the next storm.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={redtree} alt="healthy-tree" className="z-30" />
      </section>
      {/*----------- TreeWalker-------------- */}
      <section className="flex flex-col lg:flex-row lg:pt-10 h-screen mb-20">
        <div className="pt-14 px-4 pb-2 lg:pl-20 lg:py-12 lg:pr-0 lg:w-2/4">
          <img src={treewalker} alt="tree walker" className="w-auto" />
        </div>
        <div className="relative lg:w-4/6 flex justify-center">
          <div className="sm:block lg:hidden">
            <img
              src={climber1}
              alt="tree"
              className="absolute top-0 left-0 -z-1 object-cover"
            />
          </div>
          <div className="sm:hidden lg:block">
            <img
              src={climber}
              alt="tree"
              className="absolute top-0 left-0 -z-1 object-cover"
            />
          </div>
          
          <div className=" relative z-1 px-4 pt-4 pb-6 flex flex-col gap-4 lg:py-40 lg:justify-center lg:pl-14 lg:pr-20">
            <div className="font-Volkhov text-[#268C76] font-semibold text-3xl ">
              <span className="font-Volkhov text-[#242424] font-semibold text-3xl">
                Hi !
              </span>
              I’m TreeWalker👋🌳
            </div>
            <div className="font-Source Sans Pro text-[#242424] font-medium text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
            <div className="font-Source Sans Pro text-[#64748B] font-medium text-md">
              - Josh Rohmann
            </div>
          </div>
        </div>
      </section>

      {/*----------- Testimonails-------------- */}
      <section className="relative">
        <div className="sm:hidden lg:block md:block">
          <img
            src={trees}
            alt="green trees"
            className="absolute top-0 left-0 right-0 -z-1 object-cover w-screen h-full"
          />
        </div>
        <div className="lg:hidden sm:block ">
          <img
            src={treelog}
            alt="green trees"
            className="absolute top-0 left-0 right-0 -z-1 object-cover w-screen"
          />
        </div>

        <div className="relative z-1 py-20 px-4 flex flex-col gap-10 lg:p-32 lg:justify-center lg:items-center lg:gap-20">
          <h2 className="font-Volkhov text-white text-4xl text-bold font-small">
            What our customers have to say…
          </h2>
          <div className="flex flex-col gap-6 lg:flex-row">
          <Testimonial  imgUrl={user1} name={'TJ Philmore'} desc={'“Storm knocked a dead tree on my 69 Buick. Lesson learned... TreeWalker cleared my property.”'} />
            <div className="flex flex-col justify-between bg-white p-4 rounded-lg h-72 lg:w-1/3 border">
              <p className="font-Source Sans Pro font-small text-md text-[#242424]">
                “It’s a huge relief having the three large oak trees on our
                property pruned back. I used to rake multiple times a week to
                keep up with the leaves, but now things are back under control.
                Josh was incredibly helpful. Go TreeWalker!”
              </p>
              <div className="flex gap-2 w-max items-center">
                <img
                  src={user2}
                  alt="green trees"
                  className="h-10 w-10 rounded-full"
                />
                <div className="">Mark Johnson</div>
              </div>
            </div>
            
            <div className="flex flex-col justify-between bg-white p-4 rounded-lg h-72 lg:w-2/6">
              <p className="font-Source Sans Pro font-small text-md text-[#242424]">
                “We just purchased our first home and inspection failed to catch
                that tree roots were pushing against the foundation. Josh
                removed the tree and stump. Grateful that our home, and that we
                only paid for a tree to be removed rather than fixing a cracked
                foundation.”
              </p>
              <div className="flex gap-2 w-max items-center">
                <img
                  src={user3}
                  alt="green trees"
                  className="h-10 w-10 rounded-full"
                />
                <div className="">Sharon White</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*----------Schedule Evaluation---------*/}
      <section className="flex flex-col px-5 py-10 gap-5 lg:flex-row lg:pl-32 lg:pr-40 lg:py-20 lg:gap-14">
        <div className="flex flex-col gap-4 lg:gap-8">
          <h3 className="font-Volkhov text-[#242424] text-3xl font-bold">
            How we can help?
          </h3>
          <p className="font-Source Sans Pro font-small text-md text-[#242424] lg:w-4/5">
            Unhealthy trees will only get worse over time. Let’s talk about your
            trees. We can take a look and bring peace of mind by offering our
            recommendations.
          </p>
          <div className="sm:hidden lg:block">
            <img src={woodcutting} alt="wood cutting" className="" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <KeyBenefit
            count={"1"}
            title={"Tell us about your trees"}
            desc={
              "Reach out and let us know about your trees. Feel free to send pictures"
            }
          />
          <KeyBenefit
            count={"2"}
            title={"Schedule Free Evaluation"}
            desc={
              "We will come on-site to perform a tree health and safety evaluation no cost to you."
            }
          />
          <KeyBenefit
            count={"3"}
            title={"We’ll recommend a plan"}
            desc={
              "You’ll know exactly what is needed to keep your trees health and your property safe from damage."
            }
          />
          <div className="lg:flex lg:justify-center">
            <BlockButton />
          </div>
          {/* <BlockButton /> */}
        </div>
        <div className="lg:hidden sm:block">
          <img src={woodcutting} alt="tree-cut" className="" />
        </div>
      </section>

      {/* ------- Services Section ------ */}
      <section className="relative">
        <div className="sm:hidden lg:block md:block">
          <img
            src={woody}
            alt="green trees"
            className="absolute top-0 left-0 right-0 -z-1 object-cover w-screen"
          />
        </div>
        <div className="lg:hidden md:hidden sm:block">
          <img
            src={treeverticle}
            alt="green trees"
            className="absolute top-0 left-0 right-0 -z-1 object-cover w-full"
          />
        </div>
        <div className="relative z-1 py-14 px-4 flex flex-col gap-20 lg:p-20 lg:justify-center lg:items-center lg:gap-10 md:justify-center md:items-center">
          <div className="flex flex-col gap-5">
            <h4 className="font-Volkhov text-white text-2xl font-bold">
              What we have to offer
            </h4>
            <p className="font-Source Sans Pro font-small text-md text-white">
              TreeWalker Arbor Care Is fully licensed and insured. We offer
              professional tree services in the greater Charlotte area. We
              provide everything from tree trimming and stump grinding to pest
              mitigation and disease control. We specialize in keeping trees
              healthy and properties safe from damage. Let us know about your
              trees and schedule a free risk evaluation.
            </p>
          </div>
          <div className="flex gap-5 flex-col md:flex-row lg:flex-row lg:justify-evenly">
            <HelpCard title={"Locations"} />
            <HelpCard title={"Services"} />
          </div>
          {/* <div className="grid grid-rows-1 gap-5 grid-flow-col">
            <div className="grid lg:grid-cols-6 bg-white grid-cols-12">
             <div className='grid grid-rows-1 gap-20 grid-flow-col border'>
                <div className="grid lg:grid-cols-6 md:grid-cols-6  grid-cols-12">1</div>
                <div className="grid lg:grid-cols-6 md:grid-cols-6  grid-cols-12">1</div>
             </div>
            </div>
            <div className="grid grid-cols-6 bg-white ">
  vvgrvv
            </div>
          </div> */}
        </div>
      </section>

      {/* Footer Section */}

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

      <section className='px-4 pt-3  lg:px-36 lg:py-20'>          
          {/* <img
            src={fullvector}
            className="absolute bg-[#268C76]  rounded-2xl -z-1 object-cover top-0 right-0 h-max bottom-0"
          /> */}
        <div className="relative lg:rounded-2xl lg:bg-[#268C76] px-3">
        <img
            src={fullvector}
            className="absolute bg-[#268C76] bottom-5 px-5 rounded-xl -z-1 object-contain top-0 right-0 h-max"
          />
        <div className="relative z-1 flex flex-col gap-6 lg:w-max lg:pb-28 lg:px-10 lg:gap-12 lg:pt-14">
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
              <BlockButton />
            </div>
        </div>
      </section>
      {/* ---Socials--- */}
      <section className="pt-10 pb-5 pl-5 flex flex-col gap-10 lg:px-36 lg:py-10 lg:gap-14">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
          <div>
            <img src={logo} alt="instagram" className="tree-walker-logo" />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-center lg:items-center">
            <div className="flex gap-2">
              <img src={instagram} alt="instagram" className="" />
              <div className="font-Source Sans Pro text-[#3d3d3d] font-medium text-xl">
                @treewalkerarborcare
              </div>
            </div>
            <div className="flex gap-2">
              <img src={facebook} alt="instagram" className="" />
              <div className="font-Source Sans Pro text-[#3d3d3d] font-medium text-xl">
                /treewalkerarborcare
              </div>
            </div>
          </div>
        </div>
        <div>© 2023 TreeWalker LLC.</div>
      </section>
    </>
  );
};

export default Home;
