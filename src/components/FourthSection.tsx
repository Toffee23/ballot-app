import React from "react";

export const FourthSection = () => {
  return (
    <div className=" w-[95%]   py-14 mx-auto">
      <div className="flex md:flex-row md:space-x-16   flex-col justify-between w-[100%] ">
        <div className="md:space-y-12 md:w-1/2 md:pb-0 pb-5">
          <div>
            <div className="flex flex-row py-4 space-x-6">
              <h2 className="text-black text-[20px] font-semibold">01</h2>
              <div className="">
                <h2 className="text-black text-[24px] font-bold">
                  Get Started
                </h2>
                <div className="flex flex-row items-center justify-start py-6">
                  <div className="h-1 rounded-md w-14 bg-black mr-3"></div>
                  <div className="h-1 w-7 rounded-md bg-black"></div>
                </div>
                <h2 className="text-black text-[16px]  ">
                  Visit our user-friendly website and embark on your journey
                  towards secure and transparent voting with BallotChain
                </h2>
              </div>
            </div>
            <div className="flex flex-row py-4 space-x-6">
              <h2 className="text-black text-[20px] font-semibold">01</h2>
              <div className="">
                <h2 className="text-black text-[24px] font-bold">Sign Up</h2>
                <div className="flex flex-row items-center justify-start py-6">
                  <div className="h-1 rounded-md w-14 bg-black mr-3"></div>
                  <div className="h-1 w-7 rounded-md bg-black"></div>
                </div>
                <h2 className="text-black text-[16px]  ">
                  Create your account by providing basic information. Your
                  privacy and security are out top priorities, rest assured your
                  data is protected.
                </h2>
              </div>
            </div>
            <div className="flex flex-row py-4 space-x-6">
              <h2 className="text-black text-[20px] font-semibold">01</h2>
              <div className="">
                <h2 className="text-black text-[24px] font-bold">
                  Select Event
                </h2>
                <div className="flex flex-row items-center justify-start py-6">
                  <div className="h-1 rounded-md w-14 bg-black mr-3"></div>
                  <div className="h-1 w-7 rounded-md bg-black"></div>
                </div>
                <h2 className="text-black text-[16px]  ">
                  explores a variety of events available for participation. From
                  local community decisions to global initiatives, and engaging
                  entertainment contests.
                </h2>
              </div>
            </div>
            <div className="flex flex-row py-4 space-x-6">
              <h2 className="text-black text-[20px] font-semibold">01</h2>
              <div className="">
                <h2 className="text-black text-[24px] font-bold">
                  Host Events
                </h2>
                <div className="flex flex-row items-center justify-start py-6">
                  <div className="h-1 rounded-md w-14 bg-black mr-3"></div>
                  <div className="h-1 w-7 rounded-md bg-black"></div>
                </div>
                <h2 className="text-black text-[16px]  ">
                  host your event effortlessly through BallotChain. BallotChain
                  helps you engage your audience and make their voices heard in
                  entertainment and beyound
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="md:space-y-6 flex flex-col md:justify-start md:items-start md:w-1/2">
          <div className="flex flx-row items-center justify-center">
            <button className="text-white bg-[#6681A1] rounded-lg px-10 py-3 ">
              How it works
            </button>
          </div>
          <h2 className="text-black font-bold md:text-start md:py-0 py-4 text-center text-[32px]   ">
            Four simple steps to get started with BallotChain
          </h2>
          <p className="text-black text-[18px] text-start">
            Whether picking the next blockbluster or voting for your favorite
            artist and lots more, find your voice on our platform
          </p>
          <div className="flex flx-row items-center md:py-0 py-4  justify-center">
            <button className="text-white bg-[#002D62] rounded-lg px-10 py-3 ">
              Start Voting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
