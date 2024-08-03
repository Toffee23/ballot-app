"use client";
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div>
      <div className="md:flex hidden  flex-row justify-between items-center px-4 bg-blur">
        <Image src="/assets/logo.png" alt="logo" width="60" height={60} />
        <div className="flex md:flex-row ">
          <div className="flex md:flex-row md:mr-14 flex-col md:space-x-6 md:space-y-0 space-y-6  ">
            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              Home
            </button>
            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              About Us
            </button>
            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              Pricing
            </button>
            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              Who we serve
            </button>
            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              Contact
            </button>
            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              FAQ
            </button>
          </div>
          <div className="flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-6  ">
            <button className="hover:bg-[#002D62] border border-[#002D62] text-[#002D62] bg-white  py-2.5 px-6  rounded-lg hover:text-white text-[16px]">
              Sign In
            </button>
            <button className="bg-[#002D62] border border-[#002D62]   py-2.5 px-6  rounded-lg text-white text-[16px]">
              Create Account
            </button>
          </div>
        </div>
      </div>
      <div className="flex md:hidden   flex-row justify-between items-center px-4 bg-white">
        <Image src="/assets/logo.png" alt="logo" width="60" height={60} />
        <div className="flex md:flex-row ">
          <button onClick={() => setShow(!show)} className="text-black">
            <Image
              src="/assets/hamburger.png"
              alt="logo"
              width="60"
              height={60}
            />
          </button>
        </div>
      </div>

      {show && (
        <>
          <div className="flex md:flex-row md:mr-14 flex-col items-center justify-center md:space-x-6 md:space-y-0 space-y-6  ">
            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              Home
            </button>

            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              About Us
            </button>

            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              Pricing
            </button>

            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              Who we serve
            </button>

            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              Contact
            </button>
            <button className="hover:bg-[#002D62] text-[#002D62]   px-3  rounded-lg hover:text-white text-[14px]">
              FAQ
            </button>
            <div className="flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-6  ">
              <button className="hover:bg-[#002D62] border border-[#002D62] text-[#002D62] bg-white  py-2.5 px-6  rounded-lg hover:text-white text-[16px]">
                Sign In
              </button>
              <button className="bg-[#002D62] border border-[#002D62]   py-2.5 px-6  rounded-lg text-white text-[16px]">
                Create Account
              </button>
              //{" "}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar