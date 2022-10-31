import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { BiCog } from "react-icons/bi";

import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy.js";
import { useStateContext } from "../contexts/ContextProvider.js";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = `flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg font-light text-white text-md m-2 `;

  const normalLink =
    "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md font-light text-gray-400 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  const iconStyle = { color: "gray" };
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center border-b-1 pb-5 ">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-whitetext-slate-900"
            >
              <span
                className={`ml-2 text-xl font-[400] font-logo text-[${currentColor}]`}
              >
                PMS LOGO
              </span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu);
                }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-5">
            {links.map((item) => {
              return (
                <div key={item.title}>
                  {/* <p className="text-gray-600 m-3 mt-4 uppercase">
                    {item.title}
                  </p> */}
                  {item.links.map((link) => {
                    return (
                      <NavLink
                        to={`/${link.name}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        className={({ isActive }) => {
                          const activeStatus = isActive
                            ? activeLink
                            : normalLink;
                          return `${activeStatus} flex items-center ${
                            isActive ? "text-white" : "text-gray-400"
                          }`;
                        }}
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? currentColor : "",
                          };
                        }}
                      >
                        {link.icon}
                        <span>{link.linkTitle}</span>
                      </NavLink>
                    );
                  })}
                </div>
              );
            })}

            <hr className=" block mb-10" />
            <NavLink
              to={`/settings`}
              onClick={handleCloseSideBar}
              className={`${normalLink} flex items-center`}
            >
              {<BiCog />}
              <span>Settings</span>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
