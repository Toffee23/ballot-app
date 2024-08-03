import Image from "next/image";
import React from "react";

export const ThirdSection = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col items-start md:space-x-2 space-x-0 justify-start  md:w-[85%] w-[95%] py-2 pb-20 mx-auto">
        <div className="md:w-[38%] flex flex-col items-start justify-start">
          <h2 className="text-[40px] text-black font-bold pb-2 ">
            What makes us different?
          </h2>
          <p className="text-[16px] text-black  pb-4">
            BallotChain is here to fix the problems of old-school voting, making
            it simple, fair and safe for everyone to participate. With
            BallotChain, voting is an easy as sending a text securely from the
            comfort of your homes, anytime, everywhere!
          </p>
          <div className=" ">
            <button className="bg-[#002D62] border border-[#002D62]   py-2 px-4  rounded-3xl text-white text-[16px]">
              see more
            </button>
          </div>
        </div>

        <div className=" ">
          <Image
            src="/assets/curly-arrow.svg"
            alt="arrow"
            width="150"
            height="50"
          ></Image>
        </div>
        <div className="md:w-[50%]">
          <div className="flex md:flex-row flex-col items-start pb-4 md:space-x-4">
            <div className="text-start md:w-[40%] md:py-0 py-4 ">
              <div className="border-b-[2px] pb-2 ">
                <h2 className="text-black text-[24px]">01</h2>
              </div>

              <h2 className="text-black text-[16px] py-2 pl-2 ">
                Transparency
              </h2>
              <p className=" text-black">
                Experience true transparency in the voting process. Our process
                offers a crystal-clear audit trail for every vote cast, ensuring
                integrity confidence, and trust that your vote counts
              </p>
            </div>
            <div className="text-start md:w-[40%] md:py-0 py-4 ">
              <div className="border-b-[2px] pb-2 ">
                <h2 className=" text-cyan-400 text-[24px]">02</h2>
              </div>

              <h2 className="text-black text-[16px] py-2 ">Security</h2>
              <p className="text-black  ">
                Experience true transparency in the voting process. Our process
                offers a crystal-clear audit trail for every vote cast, ensuring
                integrity confidence, and trust that your vote counts
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:space-x-4 items-start">
            <div className="text-start md:w-[40%] md:py-0 py-4 ">
              <div className="border-b-[2px] pb-2 ">
                <h2 className="text-red-500 text-[24px]">03</h2>
              </div>

              <h2 className="text-black text-[16px] py-2 pl-2 ">
                Accessibility
              </h2>
              <p className=" text-black">
                Experience true transparency in the voting process. Our process
                offers a crystal-clear audit trail for every vote cast, ensuring
                integrity confidence, and trust that your vote counts
              </p>
            </div>
            <div className="text-start md:w-[40%] md:py-0 py-4 ">
              <div className="border-b-[2px] pb-2 ">
                <h2 className="text-black text-[24px]">04</h2>
              </div>

              <h2 className="text-black text-[16px] py-2 ">Transparency</h2>
              <p className=" text-red-950">
                Experience true transparency in the voting process. Our process
                offers a crystal-clear audit trail for every vote cast, ensuring
                integrity confidence, and trust that your vote counts
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center text-black text-[40px] py-6 capitalize font-bold">
        Our trusted partners{" "}
      </h2>
      <div className="md:w-[70%] w-[85%] md:px-32  md:py-14 mx-auto  text-black hidden md:flex flex-row  md:items-center justify-between">
        <div className="text-center">
          <Image
            src="/assets/partner.png"
            alt="arrow"
            width="100"
            height="50"
          ></Image>

          <h2 className="text-black pt-2 text-[16px] font-bold  ">
            Lorem Lorem
          </h2>
        </div>
        <div className="text-center">
          <Image
            src="/assets/partner.png"
            alt="arrow"
            width="100"
            height="50"
          ></Image>

          <h2 className="text-black pt-2 text-[16px] font-bold  ">
            Lorem Lorem
          </h2>
        </div>
        <div className="text-center">
          <Image
            src="/assets/partner.png"
            alt="arrow"
            width="100"
            height="50"
          ></Image>

          <h2 className="text-black pt-2 text-[16px] font-bold  ">
            Lorem Lorem
          </h2>
        </div>
        <div className="text-center">
          <Image
            src="/assets/partner.png"
            alt="arrow"
            width="100"
            height="50"
          ></Image>

          <h2 className="text-black pt-2 text-[16px] font-bold  ">
            Lorem Lorem
          </h2>
        </div>
        <div className="text-center">
          <Image
            src="/assets/partner.png"
            alt="arrow"
            width="100"
            height="50"
          ></Image>

          <h2 className="text-black pt-2 text-[16px] font-bold  ">
            Lorem Lorem
          </h2>
        </div>
      </div>
      <div className="md:w-[70%] w-[60%] md:px-32  md:py-14 mx-auto   text-black md:hidden  grid grid-cols-2  gap-8">
        <div className="text-start">
          <Image
            src="/assets/partner.png"
            alt="arrow"
            width="100"
            height="50"
          ></Image>

          <h2 className="text-black pt-2 text-[16px] font-bold  ">
            Lorem Lorem
          </h2>
        </div>
        <div className="text-start">
          <Image
            src="/assets/partner.png"
            alt="arrow"
            width="100"
            height="50"
          ></Image>

          <h2 className="text-black pt-2 text-[16px] font-bold  ">
            Lorem Lorem
          </h2>
        </div>
        <div className="text-start">
          <Image
            src="/assets/partner.png"
            alt="arrow"
            width="100"
            height="50"
          ></Image>

          <h2 className="text-black pt-2 text-[16px] font-bold  ">
            Lorem Lorem
          </h2>
        </div>
        <div className="text-start">
          <Image
            src="/assets/partner.png"
            alt="arrow"
            width="100"
            height="50"
          ></Image>

          <h2 className="text-black pt-2 text-[16px] font-bold  ">
            Lorem Lorem
          </h2>
        </div>
        <div className="text-start">
          <Image
            src="/assets/partner.png"
            alt="arrow"
            width="100"
            height="50"
          ></Image>

          <h2 className="text-black pt-2 text-[16px] font-bold  ">
            Lorem Lorem
          </h2>
        </div>
      </div>
    </div>
  );
};
