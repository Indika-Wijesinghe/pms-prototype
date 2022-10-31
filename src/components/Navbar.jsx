import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/shenu.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import UserProfile from "./UserProfile";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-3 top-3"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex bg-main-bg  justify-between p-2 md:mx-6 dark:bg-slate-800">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((preValue) => !preValue)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex gap-1">
        <NavButton
          title="Chat"
          dotColor={currentColor}
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BiEnvelope />}
        />
        <NavButton
          title="Notifications"
          dotColor={currentColor}
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg "
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 font-medium ml-1 text-14">
                Shenu
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.UserProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
