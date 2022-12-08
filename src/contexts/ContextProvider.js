import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  // constants
  const BASE_URL = "http://127.0.0.1:8000/";

  // user authentication and authorization
  const [user, setUser] = useState(null);

  const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };

  const pages = 6;
  const stepDetails = [
    { number: 1, title: "Company name" },
    { number: 2, title: "Company details" },
    { number: 3, title: "Processing details" },
    { number: 4, title: "Sign documents" },
    { number: 5, title: "Authorization" },
    { number: 6, title: "Final documents" },
  ];

  // states

  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#0f172a");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [specialButtonColor] = useState("#2563EB");

  const [themeColor, setThemeColor] = useState("#0560FD");
  const [fontPrimaryColor, setFontPrimaryColor] = useState("#101C2D");
  const [fontSecondaryColor, setFontSecondaryColor] = useState("#66768E");
  const [outlineColor, setOutlineColor] = useState("#DDE4EE");

  const [formData, setFormData] = useState({
    page1: {
      companyName: "a",
      contactPersonName: "a",
      contactPersonEmail: "a",
      contactPersonPhone: "a",
      paymentMethod: "",
      cardFirstName: "a",
      cardLastName: "a",
      cardHolderEmail: "a",
      cardHolderContactNo: "a",
    },
    page2: { test1: "", test2: "" },
    page3: { test1: "", test2: "" },
    page4: { test1: "", test2: "" },
    page5: { test1: "", test2: "" },
    page6: { test1: "", test2: "" },
  });

  // functions

  function checkPageDetails() {
    let allOkay = true;
    let pageNo = "page".concat(currentPage);
    const obj = formData[pageNo];

    for (const key in obj) {
      if (obj[key] == "") {
        allOkay = false;
      }
    }
    console.log(formData[pageNo]);

    return allOkay;
  }

  function goToNextPage(event) {
    event.preventDefault();

    if (checkPageDetails(currentPage)) {
      if (currentPage < pages) {
        setCurrentPage((preCurrentPage) => preCurrentPage + 1);
      }
    }
  }

  function goToPreviousPage(event) {
    event.preventDefault();

    if (checkPageDetails(currentPage)) {
      if (currentPage > 1) {
        setCurrentPage((preCurrentPage) => preCurrentPage - 1);
      }
    }
  }

  function updatePage(event) {
    const item = event.target;
    let page = "page".concat(currentPage);

    setFormData((preFormData) => {
      return {
        ...preFormData,
        [page]: { ...preFormData[page], [item.name]: item.value },
      };
    });
  }

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", "color");
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        formData,
        updatePage,
        goToNextPage,
        goToPreviousPage,
        currentPage,
        themeColor,
        stepDetails,
        pages,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        specialButtonColor,
        BASE_URL,
        user,
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
