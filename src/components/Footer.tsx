import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="text-center  w-[95%]  pt-20  mx-auto">
      <div className="flex md:flex-row flex-col items-center md:space-y-  justify-between ">
        <div className="">
          <Image width={"120"} height={50} src="/assets/logo.png" alt="logo" />
          <Image
            width={"120"}
            height={80}
            src="/assets/social.png"
            alt="logo"
          />
          <Image
            width={"120"}
            height={80}
            src="/assets/location.png"
            alt="logo"
          />
          <Image width={"150"} height={50} src="/assets/phone.png" alt="logo" />
        </div>
        <div className="flex md:flex-row flex-col md:space-x-32 md:py-0 py-4 md:items-start items-center">
          <div className="flex flex-col items-start md:space-y-4 space-y-0">
            <h2 className=" text-black font-bold text-[24px] ">Company</h2>
            <Link href="" className=" text-black text-[16px] ">
              Our Portfolio
            </Link>
            <Link href="" className=" text-black text-[16px] ">
              About Us
            </Link>
          </div>
          <div className="flex flex-col items-start md:py-0 py-4 md:space-y-4 space-y-0">
            <h2 className=" text-black font-bold text-[24px] ">Resources</h2>
            <Link href="" className=" text-black text-[16px] ">
              Login
            </Link>
            <Link href="" className=" text-black text-[16px] ">
              FAQ
            </Link>
            <Link href="" className=" text-black text-[16px] ">
              Our Services
            </Link>
            <Link href="" className=" text-black text-[16px] ">
              Latest Article
            </Link>
          </div>
          <div className="flex flex-col items-start md:py-0 py-4 md:space-y-4 space-y-0">
            <h2 className=" text-black font-bold text-[24px] ">Support</h2>
            <Link href="" className=" text-black text-[16px] ">
              Contact Us
            </Link>
            <Link href="" className=" text-black text-[16px] ">
              Blog
            </Link>
            <Link href="" className=" text-black text-[16px] ">
              Book A Demo
            </Link>
            <Link href="" className=" text-black text-[16px] ">
              Getting Started
            </Link>
            <Link href="" className=" text-black text-[16px] ">
              Help Center
            </Link>
          </div>
        </div>
      </div>
      <p className="text-black md:text-[14px]  text-[12px] py-10">
        Copyright 2024 All Rights Reserved{" "}
        <span className="text-black md:text-[14px] font-bold text-[12px]">
          <Link href="">Terms and Conditions Privacy Policy</Link>
        </span>{" "}
      </p>
    </div>
  );
};
