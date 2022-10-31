import React from "react";

import { FcCheckmark } from "react-icons/fc";

export default function Step({
  pageNumber,
  title,
  maxPages,
  themeColor,
  currentPage,
}) {
  const cssObject = {
    cellDivClasses:
      "flex items-center justify-between my-3 text-sm font-normal text-black",

    stepDiv: "flex flex-col items-center justify-center relative ",

    stepSpanClasses: `h-8 w-8 flex items-center justify-center rounded-[100%] text-md border-[3px] border-gray-400 ${
      pageNumber < currentPage && "border-green-500"
    } text-gray-400 `,

    stepTextSpanClass:
      " absolute text-center top-9 text-gray-400 text-sm font-semibold ",

    hrClass: `h-[3px] w-[75%] bg-gray-400 mt-4 ${
      pageNumber < currentPage && "bg-green-500"
    }`,
  };

  return (
    <>
      <div className={cssObject.stepDiv}>
        <span className={cssObject.stepSpanClasses}>
          {pageNumber < currentPage ? <FcCheckmark /> : pageNumber}
        </span>
        <span className={cssObject.stepTextSpanClass}>{title}</span>
      </div>
      {maxPages > pageNumber && (
        <div className=" flex justify-center">
          <hr className={cssObject.hrClass} />
        </div>
      )}
    </>
  );
}
