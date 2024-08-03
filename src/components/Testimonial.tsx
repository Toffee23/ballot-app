import Image from "next/image";
import React from "react";

export const Testimonial = () => {
  return (
    <div className=" md:w-[70%]   md:py-14  mx-auto">
      <h2 className="text-[36px] text-center text-black font-bold pb-4 ">
        Testimonials
      </h2>
      <div className="flex md:flex-row md:space-x-14  flex-col justify-between w-[100%] ">
        <div className="md:w-1/3 w-[85%] px-4 md:my-0 my-4  rounded-lg py-4 mx-auto bg-[#002D62] text-white flex md:flex-row flex-col items-center justify-between">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20  rounded-full border-[8px] border-white">
                <Image
                  className="rounded-full"
                  src="/assets/dummy.png"
                  alt="review-person"
                  width="80"
                  height="80"
                ></Image>
              </div>

              <h2 className="text-white text-[20px]">John Doe</h2>
            </div>
            <h2 className="text-white text-[14px] py-4  ">
              Stay informed with the latest advancements and news from
              BallotChain. Join our community for exclusive insights and updates
              straight to your inbox
            </h2>
            <div className="w-[80%] mx-auto flex flex-row items-center justify-center">
              <Image
                src="/assets/review-img.png"
                alt="review"
                width="150"
                height="60"
              ></Image>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-[85%] px-4 md:my-0 my-4  rounded-lg py-4 mx-auto bg-[#002D62] text-white flex md:flex-row flex-col items-center justify-between">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20  rounded-full border-[8px] border-white">
                <Image
                  className="rounded-full"
                  src="/assets/dummy.png"
                  alt="review-person"
                  width="80"
                  height="80"
                ></Image>
              </div>

              <h2 className="text-white text-[20px]">John Doe</h2>
            </div>
            <h2 className="text-white text-[14px] py-4  ">
              Stay informed with the latest advancements and news from
              BallotChain. Join our community for exclusive insights and updates
              straight to your inbox
            </h2>
            <div className="w-[80%] mx-auto flex flex-row items-center justify-center">
              <Image
                src="/assets/review-img.png"
                alt="review"
                width="150"
                height="60"
              ></Image>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-[85%] px-4 md:my-0 my-4 rounded-lg py-4 mx-auto bg-[#002D62] text-white flex md:flex-row flex-col items-center justify-between">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20  rounded-full border-[8px] border-white">
                <Image
                  className="rounded-full"
                  src="/assets/dummy.png"
                  alt="review-person"
                  width="80"
                  height="80"
                ></Image>
              </div>

              <h2 className="text-white text-[20px]">John Doe</h2>
            </div>
            <h2 className="text-white text-[14px] py-4  ">
              Stay informed with the latest advancements and news from
              BallotChain. Join our community for exclusive insights and updates
              straight to your inbox
            </h2>
            <div className="w-[80%] mx-auto flex flex-row items-center justify-center">
              <Image
                src="/assets/review-img.png"
                alt="review"
                width="150"
                height="60"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
