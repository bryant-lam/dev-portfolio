/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid min-[1100px]:grid-cols-4 min-[1100px]:grid-rows-2 grid-cols-1 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  headerClassName,
  descriptionClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  headerClassName?: string;
  descriptionClassName?: string;
  titleClassName?: string;
}) => {
  const leftList = ["Typescript", "Express"];
  const rightList = ["React", "MongoDB"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("bryant124588@gmail.com");
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "relative row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-green-100/[0.1] bg-green-100 justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div
        className={cn(
          `group-hover/bento:translate-x-2 transition duration-200 relative 
          md:h-full min-h-40 flex flex-col p-5`,
          headerClassName
        )}
      >
        <div
          className={cn(
            "font-poppins font-semibold text-white text-xs",
            descriptionClassName
          )}
        >
          {description}
        </div>
        <div
          className={cn(
            "max-w-96 font-poppins font-bold text-xl text-white",
            titleClassName
          )}
        >
          {title}
        </div>

        {id === 1 && (
          <div className="min-h-96 md:h-full pt-2">
            <OrbitingCirclesDemo />
          </div>
        )}

        {id === 2 && (
          <div className="flex gap-2 w-fit absolute right-3 min-[1100px]:right-10 md:right-5">
            <div className="relative flex flex-col gap-3 bottom-3 min-[1100px]:gap-6">
              <span className="py-4 px-3 rounded-lg text-center bg-green-600"/>
              {leftList.map( (item) => (
                <span key={item} className="font-semibold py-2 text-xs px-3 rounded-lg text-center text-black-100 bg-green-600">
                  {item}
                </span>
              ))}
            </div>
            <div className="relative flex flex-col gap-3 top-3 min-[1100px]:top-4 min-[1100px]:gap-6">
              {rightList.map( (item) => (
                <span key={item} className="font-semibold py-2 text-xs px-3 rounded-lg text-center text-black-100 bg-green-600">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-green-600"/>
            </div>
          </div>
        )}

        {id === 3 && (
          <div className="relative inline-flex justify-center">
            <div className={`absolute -bottom-5 pointer-events-none z-40`}>
              <Lottie
                options ={{
                  loop: copied,
                  autoplay: copied,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                  }
                }} 
                height={200}
                width={200}
                />
            </div>
            <MagicButton
              title={copied ? "Email copied" : "Copy my email"}
              icon={<img src={"./copy.svg"} alt="" width={30} height={30}/>}
              position="left"
              handleClick={handleCopy}
              otherClasses="bg-green-600 font-semibold gap-3"
            />
          </div>
        )}
      </div>
    </div>
  );
};
