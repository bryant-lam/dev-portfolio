import React from 'react'

const invertButton = ({
    title, icon, position, handleClick, otherClasses, onMouseEnter, onMouseLeave,
    }: {
    title: string;
    icon?: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    otherClasses?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    }) => {
  return (
    <button 
      className={`px-8 py-2 rounded-md bg-black-100 text-white font-bold transition duration-200 
        hover:bg-white hover:text-black-100 border-2 border-transparent hover:border-green-600 
          gap-4 items-center cursor-pointer ${otherClasses}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick} // can remove this if theres a better format to handle clicks
    >
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
    </button>
  )
}

export default invertButton