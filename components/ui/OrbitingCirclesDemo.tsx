/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect } from "react";
import { OrbitingCircles } from "./OrbitingCircles";

export function OrbitingCirclesDemo() {
    const [outerRadius, setOuterRadius] = React.useState(170);
    const [innerRadius, setInnerRadius] = React.useState(70);

    useEffect( () => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setOuterRadius(150);
                setInnerRadius(60);
            } else {
                setOuterRadius(170);
                setInnerRadius(70);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        {/* Put Text Here (Optional) */}
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={innerRadius}
      >
        <img src={"./ts.svg"} alt={"typescript"} width={100} height={100} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={innerRadius}
      >
        <img src={"./dock.svg"} alt={"typescript"} width={100} height={100} />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={outerRadius}
        duration={20}
        delay={5}
        reverse
      >
        <img src={"./netlify.svg"} alt={"typescript"} width={100} height={100} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={outerRadius}
        duration={20}
        delay={10}
        reverse
      >
        <img src={"./re.svg"} alt={"typescript"} width={100} height={100} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={outerRadius}
        duration={20}
        delay={15}
        reverse
      >
        <img src={"./tail.svg"} alt={"typescript"} width={100} height={100} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={outerRadius}
        duration={20}
        delay={20}
        reverse
      >
        <img src={"./gatsby.svg"} alt={"typescript"} width={100} height={100} />
      </OrbitingCircles>
    </div>
  );
}