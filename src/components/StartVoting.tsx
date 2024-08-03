import Image from 'next/image';
import React from 'react'

export const StartVoting = () => {
  return (
    <div className="flex  flex-col items-center w-[85%] py-2  mx-auto">
      <div className="md:w-[85%]  md:px-6 px-3  rounded-lg py-8 mx-auto bg-[#002D62] text-white flex md:flex-row flex-col items-center justify-between">
        <div className="text-center">
          <div className="flex flex-row justify-between items-center">
            <Image
              src="/assets/festive1.png"
              alt="festive2"
              width="30"
              height={"30"}
            />
            <h2 className="text-white text-[24px]">
              Start Voting with BallotChain
            </h2>
            <Image
              src="/assets/festive2.png"
              alt="festive2"
              width="30"
              height={"30"}
            />
          </div>
          <h2 className="text-white text-[16px] md:w-[40%] mx-auto py-6  ">
            Start Voting with BallotChain Experience secure, transparent, and
            accessible voting with BallotChain's blockchain technology. Trusted
            by communities worldwide, BallotChain ensures every vote counts. Get
            started
          </h2>
          <div className="flex flx-row items-center justify-center">

            <button className="bg-white rounded-lg px-10 py-3 text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className=" md:w-[50%] px-24 mt-20  rounded-lg py-8 mx-auto bg-[#002D62] text-white flex md:flex-row flex-col items-center justify-between">
        <div className="text-center">
          <h2 className="text-white text-[24px]">
            Subscribe for exclusive updates
          </h2>
          <h2 className="text-white text-[16px] py-4 md:w-[95%] ">
            Stay informed with the latest advancements and news from
            BallotChain. Join our community for exclusive insights and updates
            straight to your inbox
          </h2>
          <div className="w-[80%] mx-auto flex flx-row space-x-3">
            <input
              placeholder="Enter your mail"
              className="placeholder:text-gray-400 w-[70%] bg-white py-3 px-4"
            ></input>
            <button className="bg-white md:w-[30%] px-4 py-3 text-black">
              Suscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
