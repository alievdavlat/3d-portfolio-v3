import React, { useEffect, useMemo, useRef, useState } from "react";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { twMerge } from "tailwind-merge";
import { Outlet, useLocation } from "react-router-dom";

import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaBook, FaThList } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";

import { useMediaQuery } from "usehooks-ts";

const Sidebar = ({ children }) => {
  const {pathname} = useLocation();
  
  const isMobile = useMediaQuery("(max-width: 770px)");
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);

  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [isResetting, setIsResetting] = useState(false);

  const routes = useMemo(
    () => [
      {
        id: 1,
        label: "Home",
        active: pathname == "/",
        href: "/",
        Icon: HiHome,
      },
      {
        id: 2,
        label: "About",
        href: "/about",
        Icon: FaBook,
        children: [
          {
            id: 3,
            label: "create",
            active: pathname === "/dashboard/create-about",
            href: "/dashboard/create-about",
            Icon: IoIosCreate,
          },
          {
            id: 4,
            label: "About list",
            active: pathname === "/dashboard/about-list",
            href: "/dashboard/about-list",
            Icon: FaThList,
          },
        ],
      },
    ],
    [pathname]
  );

  const reset = () => {
    if (sidebarRef.current && contentRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "90px" : "300px";
      contentRef.current.style.width = isMobile ? "calc(100% - 90px)" : "calc(100% - 300px)";
      contentRef.current.style.left = isMobile ? "0" : "300px";
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && contentRef.current) {
      
      if (isCollapsed) {
        reset()
      } else {
        setIsCollapsed(true);
        setIsResetting(true);
      
      sidebarRef.current.style.width = "90px";
      contentRef.current.style.width = "calc(100% - 90px)";
      contentRef.current.style.left = "0";
      }
      
      setTimeout(() => setIsResetting(false), 300);
    }
  };
  
  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      reset();
    }

  }, [isMobile]);

  const ToggleCollpase = isCollapsed ? FaCircleChevronLeft : FaCircleChevronRight;

  return (
    <div className={twMerge(`flex  h-full z-50`)}>
      <div
        ref={sidebarRef}
        className={`
        hidden md:flex  
        relative flex-col gap-y-2 bg-black h-full 
        p-2 ${isResetting && "transition-all ease-in duration-300"} ${isMobile && "w-[90px] items-center justify-center"}
        `}>

        <div className={`absolute z-50 ${isCollapsed ? 'left-[50%] top-10 translate-x-[-50%] h-fit w-fit' : 'right-0 top-10'}`} onClick={collapse}>
          <ToggleCollpase
            size={26}
            className={`text-white cursor-pointer ${isMobile && "opacity-100"}`}
          />
        </div>

    

        <Box>
          <div
            className={`
            ${isCollapsed && 'mt-24 z-50'}
          flex 
          flex-col
          gap-y-4
          px-5
          py-4
          
            `}>
            {routes.map((item, index) => (
              <SidebarItem key={item.id} {...item}  isCollapsed={isCollapsed}/>
            ))}
          </div>
        </Box>
      </div>

      <div className={`
        h-full flex-1 overflow-y-auto py-2
        ${isResetting && "transition-all ease-in duration-300"}
        ${isMobile && "w-full left-0"}
        `} ref={contentRef}>
          <Outlet/>
        </div>
    </div>
  );
};

export default Sidebar;
