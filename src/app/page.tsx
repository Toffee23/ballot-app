"use client";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FourthSection } from "@/components/FourthSection";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { StartVoting } from "@/components/StartVoting";
import { Testimonial } from "@/components/Testimonial";
import { ThirdSection } from "@/components/ThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-full ">
      <div className="fixed w-full backdrop-filter md:bg-transparent md:shadow-none shadow bg-white backdrop-blur-sm md:backdrop-blur-lg   ">
        <Navbar />
      </div>

      <div className=" pt-24 md:pt-40">
        <Hero />
        <ThirdSection />
        <FourthSection />
        <Testimonial />
        <FAQ />
        <StartVoting />
        <Footer />
      </div>
    </div>
  );
}
