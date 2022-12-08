export const formValidationError = `text-red-300`;

export const labelClasses = `block font-inter text-lg mb-1 `;

export const inputClasses = `placeholder:text-gray-400 placeholder:font-normal block w-full font-inter outline-[#3B82F6] text-lg border-1 border-[#cccccc] px-2 py-1 rounded-md `;

export const specialButtonClass = `text-xl text-[#3B82F6] font-medium mt-2 `;

export const primaryBtn = `text-lg text-white pt-2 pb-2 rounded-lg bg-[#3B82F6] cursor-pointer `;
export const secondaryBtn = `text-lg border-2 px-4 py-1 rounded-lg border-[#3B82F6]`;

export const h3FormClass = "text-xl font-semibold";

export const hrFormClass = "mt-10 mb-10";

export const colourStyles = {
  control: (styles) => ({
    ...styles,

    borderRadius: "6px",
    paddingTop: "0px",
    paddingBottom: "0px",

    // border: "1px solid #cccccc",
    // boxShadow: "none",
    // "&:hover": {
    //   border: "1px solid #cccccc",
    // },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "rgb(229 231 235)"
        : isFocused
        ? "rgb(229 231 235)"
        : "white",
      color: "black",
    };
  },
  input: (styles, { isFocused }) => ({
    ...styles,
    color: "black",
    borderRadius: "100px",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: "500",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#9ca3af",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: "400",
  }),
  singleValue: (styles, { data }) => ({ ...styles }),
  menu: (styles) => ({ ...styles }),
};
