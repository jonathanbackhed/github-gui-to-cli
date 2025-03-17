import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

interface Props {
  icon: React.ReactElement;
  topText: string;
  bottomText: string;
  flipBold?: boolean;
  largeWidth?: boolean;
  hideArrow?: boolean;
}

const NavbarButton = ({
  icon,
  topText,
  bottomText,
  flipBold = false,
  largeWidth = false,
  hideArrow = false,
}: Props) => {
  return (
    <button
      className={`${largeWidth ? 'w-1/4' : 'w-1/5'} flex cursor-pointer items-center justify-between border-r border-neutral-950 px-4 py-3 text-xs`}
    >
      <div className="flex items-center space-x-2">
        {icon}
        <div className="flex flex-col items-start">
          <span className={`${flipBold ? 'font-bold' : 'text-neutral-300'}`}>{topText}</span>
          <span className={`${flipBold ? 'text-neutral-300' : 'font-bold'}`}>{bottomText}</span>
        </div>
      </div>
      {!hideArrow && <IoMdArrowDropdown size={16} />}
    </button>
  );
};

export default NavbarButton;
