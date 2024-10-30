/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    description: string;
    img: string;
    iconLists: string[];
    link: string;
    buttonText: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn("grid grid-cols-1 lg:grid-cols-2 py-10 gap-4", className)}
    >
      {items.map(({ id, title, description, img, iconLists, link, buttonText}, idx) => (
        <div
          key={link}
          rel="noopener noreferrer"
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-green-600 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            id={id}
            title={title}
            description={description}
            img={img}
            iconLists={iconLists}
            link={link}
            buttonText={buttonText}
          />
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  id,
  title,
  description,
  img,
  iconLists,
  link,
  buttonText,
}: {
  className?: string;
  id?: number;
  title?: string;
  description?: string;
  img?: string;
  iconLists: string[];
  link?: string;
  buttonText?: string;
}) => {
  return (
    <div
      id={`${id}`}
      className={cn(
        `sm:min-h-[30rem] min-h-[25rem] p-7 flex-col items-center justify-center w-full rounded-2xl 
        overflow-hidden bg-green-100 border border-transparent relative z-20`,
        className
      )}
    >
      <img
        // img dimensions are 1340x760
        src={img}
        alt={title}
        className="z-20 relative rounded-2xl border-black-100 border-4"
      />
      <h1 className="font-semibold text-2xl text-black-100 line-clamp-1 mt-3">
        {title}
      </h1>
      <p className="font-normal text-base line-clamp-2 text-black-100 mt-3">
        {description}
      </p>
      <div className="flex items-center justify-between mt-7 mb-3">
        <div className="flex items-center">
          {iconLists.map((icon, index) => (
            <div
              key={icon}
              className={`border border-green-100 rounded-full bg-black-100 
                w-8 h-8 flex justify-center items-center md:w-10 md:h-10`}
                style={{transform: `translateX(-${5 * index}px)`}}
            >
              <img src={icon} alt="icon" className="p-2" />
            </div>
          ))}
        </div>
        <a href={link} target={id === 1 ? "" : "_blank"} className="flex justify-center items-center gap-2 min-[1100px]:gap-4">
          <p className="text-base text-black-100 font-semibold md:text-xl">{buttonText}</p>
          <img src="/arrow.svg" alt="" className="md:w-7 md:h-7 w-4 h-4 " />
        </a>
      </div>
    </div>
  );
};
