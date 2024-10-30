import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-60 mt-3 min-[1100px]:mt-8" onClick={handleClick}> 
    {/* md:w-60 and mt-10 subject to change */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F2F2F2_0%,#57ba98_50%,#F2F2F2_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-green-600 px-7 text-lg font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
