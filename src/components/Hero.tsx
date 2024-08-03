import Image from "next/image";
import React from "react";

export const Hero = () => {

  return (
    <div className="pb-20">
      <div className="flex md:flex-row flex-col items-center md:w-[85%] w-[95%] py-2 md:pb-20 mx-auto">
        <div className="md:w-[40%] flex flex-col items-start justify-start">
          <h2 className="text-[36px] text-black font-bold md:pb-4  ">
            Secure, Transparent, and Accessible Voting with Blockchain
            Technology
          </h2>
          <p className="text-[14px] text-black ">
            Experience the Future of Voting on Your Mobile Device Anywhere,
            Anytime!
          </p>
          <div className="flex md:flex-row py-6 flex-col md:w-full  md:space-x-6 md:space-y-0 space-y-4  ">
            <button className="bg-[#002D62] border border-[#002D62]   py-3 md:w-[60%] w-[100%]   rounded-lg text-white text-[16px]">
              Get Started
            </button>
            <button className="hover:bg-[#002D62] border-2 border-[#002D62] text-[#002D62] bg-white  py-3 md:w-[60%] px-20  rounded-lg hover:text-white text-[16px]">
              Book a Demo
            </button>
          </div>
        </div>

        <div className="  ">
          <Image
            src="/assets/heroImage.png"
            alt="hero"
            width="1000"
            height="800"
          ></Image>
        </div>
      </div>
      <div className="md:w-[58%] w-[95%] md:px-32  rounded-lg md:py-14 py-10 md:mt-0 mt-8 mx-auto bg-[#002D62] text-white flex md:flex-row flex-col items-center justify-between">
        <div className="text-center">
          <h2 className="text-white text-[24px]">400+</h2>
          <h2 className="text-white text-[16px] w-[95%] ">
            Active events hosted across our platform
          </h2>
        </div>
        <div className="text-center">
          <h2 className="text-white text-[24px]">40+</h2>
          <h2 className="text-white text-[16px]">Active hosts</h2>
        </div>
        <div className="text-center">
          <h2 className="text-white text-[24px]">1K+</h2>
          <h2 className="text-white text-[16px]">Active users</h2>
        </div>
      </div>
    </div>
  );
};
