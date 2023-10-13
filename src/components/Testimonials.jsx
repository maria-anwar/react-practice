import React from "react";
import trees from "../assets/images/trees.png";
import treelog from "../assets/images/treelog.png";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <>
      {/* <section className="relative">
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
      </section> */}
      <div
        className="bg-cover md:hidden xxs:block"
        style={{
          backgroundImage: `url(${treelog})`,
        }}
      >
        <div className="px-4 py-20 flex flex-col gap-10 sm:px-10">
          <h2 className="font-Volkhov text-white text-4xl text-bold font-small">
            What our customers have to say…
          </h2>
          <div className="flex flex-col gap-6">
            <Testimonial
              imgUrl={user1}
              name={"TJ Philmore"}
              desc={
                "“Storm knocked a dead tree on my 69 Buick. Lesson learned... TreeWalker cleared my property.”"
              }
            />
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
      </div>

      <div
        className="bg-cover xxs:hidden md:block"
        style={{ backgroundImage: `url(${trees})` }}
      >
        <div className="flex flex-col flex-wrap gap-10 items-center px-10 py-10 mt-10 lg:gap-16 lg:py-20 lg:mt-14 xl:mt-16 xl:pb-20 xl:pt-24 xl:gap-20">
          <h2 className="font-volkhov text-white text-4xl text-bold font-small">
            What our customers have to say…
          </h2>
          <div className="flex flex-row gap-4">
            <Testimonial
              imgUrl={user1}
              name={"TJ Philmore"}
              desc={
                "“Storm knocked a dead tree on my 69 Buick. Lesson learned... TreeWalker cleared my property.”"
              }
            />
            <div className="flex flex-col justify-between bg-white p-4 rounded-lg h-72 md:w-1/3 border">
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
            <div className="flex flex-col justify-between bg-white p-4 rounded-lg h-72 md:w-1/3">
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
      </div>
    </>
  );
};

export default Testimonials;
