import React from "react";

import { useStateContext } from "../../contexts/ContextProvider";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Step from "./Step";

const Form = () => {
  const {
    formData,
    updatePage,
    goToNextPage,
    goToPreviousPage,
    currentPage,
    themeColor,
    stepDetails,
    pages,
  } = useStateContext();

  let formPage;

  const cssObject = {
    inputClasses:
      "text-sm font-normal py-[10px] px-3  rounded-md text-black placeholder-gray-400  outline-none border-[1px] border-gray-200 bg-[#eff1fc]  w-full block mt-1",

    labelClasses: "block text-[#080a3c] font-bold text-sm",

    h2Classes: "text-lg text-[#080a3c] font-black mt-5",

    cellDivClasses:
      "flex items-center justify-between my-3 text-sm font-normal text-black",

    stepDiv: "flex flex-col items-center justify-center relative ",

    stepSpanClasses: `h-8 w-8 flex items-center justify-center rounded-[100%] text-md border-[2px] border-gray-400 text-[${themeColor}] `,

    stepTextSpanClass:
      " absolute text-center top-9 text-gray-400 text-sm font-semibold ",

    hrClass: "h-[2px] w-[100%] mt-4 bg-gray-400",
  };
  switch (currentPage) {
    case 1:
      formPage = (
        <Page1
          cssObject={cssObject}
          themeColor={themeColor}
          formData={formData.page1}
          handleOnChange={updatePage}
        />
      );
      break;

    case 2:
      formPage = (
        <Page2
          cssObject={cssObject}
          themeColor={themeColor}
          formData={formData.page2}
          handleOnChange={updatePage}
        />
      );
      break;

    case 3:
      formPage = (
        <Page3
          cssObject={cssObject}
          themeColor={themeColor}
          formData={formData.page3}
          handleOnChange={updatePage}
        />
      );
      break;

    case 4:
      formPage = (
        <Page4
          cssObject={cssObject}
          themeColor={themeColor}
          formData={formData.page4}
          handleOnChange={updatePage}
        />
      );
      break;

    case 5:
      formPage = (
        <Page5
          cssObject={cssObject}
          themeColor={themeColor}
          formData={formData.page5}
          handleOnChange={updatePage}
        />
      );
      break;

    case 6:
      formPage = (
        <Page6
          cssObject={cssObject}
          themeColor={themeColor}
          formData={formData.page6}
          handleOnChange={updatePage}
        />
      );
      break;
  }

  const steps = stepDetails.map((item, index) => {
    return (
      <Step
        key={index}
        pageNumber={item.number}
        title={item.title}
        maxPages={pages}
        themeColor={themeColor}
        currentPage={currentPage}
      />
    );
  });

  return (
    <div className="bg-simplebooks-background flex flex-col items-center justify-center  containers">
      <div className="grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] mt-10 mb-5 w-[50%]">
        {steps}
      </div>
      <form className="max-w-sm w-[350px] mt-10">
        {formPage}
        <div className="flex justify-end items-center gap-4 mt-10 mb-10">
          <button
            className={`text-${
              currentPage == 1 ? "gray-400" : `[${themeColor}]`
            } `}
            onClick={goToPreviousPage}
          >
            Prev
          </button>

          <span className="text-black">|</span>
          <button
            className={`text-${
              currentPage == 6 ? "gray-400" : `[${themeColor}]`
            } `}
            onClick={goToNextPage}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
