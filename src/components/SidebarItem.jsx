import React, { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";


const SidebarItem = ({ href, Icon, label, active,id,isCollapsed,  children}) => {

  const [openDropDown, setOpenDropDown] = useState(false)
  const [activeItem, setActiiveItem] = useState(0)
  const ToggleChevron  = openDropDown ? FaChevronDown : FaChevronUp 

  const handleOpenDropDown = (itemId) => {
    setActiiveItem(itemId)
    setOpenDropDown(!openDropDown)
  }

  if (children) {
    return (
      <div className="w-full z-50">
        <div
          className={twMerge(
            `       
                    flex
                    flex-row
                    h-auto
                    items-center
                    w-full
                    gap-x-4
                    text-md
                    font-medium
                    cursor-pointer
                    hover:text-white
                    transition
                    text-neutral-400
                    py-1
                    mb-2
                        `,
            active && "text-white"
          )}>

          <Icon size={26} />
          <p className={`${isCollapsed && 'hidden'} truncate w-full`}>{label}</p>
          <ToggleChevron className={` ${isCollapsed && 'hidden'} text-white`} size={20} onClick={() => handleOpenDropDown(id)}/>
        </div>
        <div className={`${activeItem === id && openDropDown && !isCollapsed && 'hidden'} transition py-2 space-y-2 w-full`}>
          {children.map((i) => (
            <Link
              key={i.id}
              to={i.href}
              className={twMerge(
                `
            flex
            flex-row
            h-auto
            items-center
            w-full
            gap-x-4
            text-md
            font-medium
            cursor-pointer
            hover:text-white
            transition
            text-neutral-400
            py-1
                `,
                i.active && "text-white"
              )}>
              <i.Icon size={26} />
              <p className={`${isCollapsed && 'hidden'} truncate w-full`}>{i.label}</p>
            </Link>
          ))}

        </div>
      </div>
    );
  }

  return (
    <Link
      to={href}
      className={twMerge(
        `
            flex
            flex-row
            h-auto
            items-center
            w-full
            gap-x-4
            text-md
            font-medium
            cursor-pointer
            hover:text-white
            transition
            text-neutral-400
            py-1
            z-50
                `,
        active && "text-white"
      )}>
      <Icon size={26} />
      <p className={`${isCollapsed && 'hidden'} truncate w-full`}>{label}</p>
    </Link>
  );
};

export default SidebarItem;
