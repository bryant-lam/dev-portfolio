/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { socialMedia } from "@/data";
import { Boxes } from "./ui/BackgroundBoxes";
import InvertButton from "./ui/InvertButton";


const Hero = () => {
  const [iconSrc, setIconSrc] = useState('/locarrow-light.svg');

  const handleMouseEnter = () => {
    setIconSrc('/locarrow-dark.svg'); // Change to your hover image source
  };

  const handleMouseLeave = () => {
    setIconSrc('/locarrow-light.svg'); // Change back to the original image source
  };

  return (
    <div id="about" className="py-20 pt-44">
      <div className="flex justify-center md:justify-between md:mx-auto">
        <div className="absolute inset-0 w-full h-[calc(100vh-50px)] max-h-[820px] overflow-hidden z-20 bg-teal">
          <Boxes className="-right-25 top-50 md:-right-40 md:-top-30 h-screen" />
        </div>

        <div className="relative flex flex-col md:flex-row items-start">
          <div className="md:pl-5 z-30 w-auto text-center md:text-left justify-center flex-col">
            <h1 className="text-[40px] font-bold text-white leading-[52px] tracking-wide">
              Bryant Lam
            </h1>
            <h2 className="text-[30px] font-semibold text-black-100  leading-[52px]">
              Full-Stack Developer
            </h2>
            <div className="w-full text-[20px] font-medium text-white leading-[25px] flex flex-row items-center md:ml-[-7px]">
              <img src="/sewing-pin.svg" alt="" width={30} height={30} />
              <p className="tracking-wide whitespace-nowrap">
                California, United States of America
              </p>
            </div>
            <div className="mt-2  inline-flex">
              {socialMedia.map((item) => (
                <div key={item.id} className="py-2 px-1">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.name}
                  >
                    <img src={item.img} alt={item.name} width={48} height={48} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <img
          src="/portrait.jpg"
          alt="Bryant Lam"
          className="relative z-30 hidden min-[1100px]:block right-0 rounded-[10px] w-[580px] h-[435px] 
            border-solid border-[3px] border-green-600
            "
        />
      </div>

      <div className="relative z-30 mt-10 px-3 text-center text-black-100 text-2xl 
      min-[1100px]:mt-5 min-[1100px]:bottom-40 min-[1100px]:w-[40%] 
      md:w-[80%] md:text-left md:px-2 md:justify-center md:flex">
        <p>
          I&apos;m a Computer Science graduate <span className="font-extrabold">learning fast</span> to become a Full-Stack Developer.
        </p>
      </div>

      <div className="flex items-center justify-center 
      min-[1100px]:justify-start min-[1100px]:px-[8rem]">
        <div className="relative z-30 mt-20 min-[1100px]:bottom-[8rem]">
          <a href="#projects">
          <InvertButton 
            title="Show my work"
            icon={<img src={iconSrc} alt="" width={22} height={22}/>}
            position="right"
            otherClasses="inline-flex font-semibold tracking-wide font-[18px] md:px-12 rounded-xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
