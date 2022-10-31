import React from "react";
import { Header } from "../components";
import Select, { StylesConfig } from "react-select";
import { MdDeleteForever } from "react-icons/md";

import { useStateContext } from "../contexts/ContextProvider";

import { v4 as uuidv4 } from "uuid";

const CreateABooking = (props) => {
  //  states for the form data
  const initialFormData = {
    propertyName: "",
    arrivalDateTime: "",
    departureDateTime: "",
    sourceType: "",
    source: "",
    adultsCount: "",
    childrenCount: "",
    petsCount: "",
    tenantName: "",
    notes: "",
    monthlyRent: 2500,
    deposit: 5000,
    cleaningFee: 100,
    totalFirstPayment: "",
    totalMonthlyPayment: "",
    newFeeName: "",
    newFeeType: "",
    newFeeValue: "",
    otherFees: [],
    total: "",
    bookingConfirmationGuestCheck: "",
    bookingConfirmationAgentCheck: "",
    notifyThirdParitiesCheck: "",
  };
  const [formData, setFormData] = React.useState(initialFormData);

  const [feeId, setFeeid] = React.useState(0);
  //==========functions==========
  // handle changes of input feilds
  const handleChange = (selectedOption, ctx) => {
    // check if target is select component
    let name = "";
    let value = "";
    let type = "";
    let checked = "";

    if (selectedOption.value && selectedOption.label) {
      name = ctx.name;
      value = selectedOption.value;
      console.log("in here 1");
    } else {
      type = selectedOption.target.type;
      if (type == "checkbox") {
        checked = selectedOption.target.checked;
        name = selectedOption.target.name;

        console.log(name, checked);
      } else {
        name = selectedOption.target.name;
        value = selectedOption.target.value;
      }
    }

    setFormData((preFormData) => {
      return {
        ...preFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  React.useEffect(() => {
    let totalOtherFeesMonthly = 0;
    let totalOneTimeFees = 0;

    formData.otherFees.forEach((element) => {
      if (element.type === "monthly") {
        totalOtherFeesMonthly += +element.value;
      } else if (element.type === "one-time") {
        totalOneTimeFees += +element.value;
      }
    });
    let totalFirstPayment =
      +formData.monthlyRent +
      +formData.deposit +
      +formData.cleaningFee +
      totalOneTimeFees;
    let totalMonthlyPayment =
      +formData.monthlyRent + +formData.cleaningFee + totalOtherFeesMonthly;

    console.log(typeof formData.monthlyRent);
    console.log(typeof formData.deposit);
    console.log(typeof formData.cleaningFee);

    setFormData((preFormData) => {
      return { ...preFormData, totalFirstPayment, totalMonthlyPayment };
    });
  }, [
    formData.monthlyRent,
    formData.deposit,
    formData.cleaningFee,
    formData.otherFees,
  ]);

  // add new tenant popup
  const addNewTenant = () => {};

  // make textbox editable

  const addNewFee = (feeId) => {
    setFeeid((preFeeId) => (preFeeId = preFeeId + 1));

    setFormData((preFormData) => {
      return {
        ...preFormData,
        otherFees: [
          ...preFormData.otherFees,
          {
            id: feeId,
            name: preFormData.newFeeName,
            value: preFormData.newFeeValue,
            type: preFormData.newFeeType,
          },
        ],
      };
    });
  };
  function deleteFee(id) {
    const preFeesArray = formData.otherFees;

    const newFeesArray = preFeesArray.filter((fee) => fee.id != id);

    setFormData((preFormData) => {
      return {
        ...preFormData,
        otherFees: newFeesArray,
      };
    });
  }

  //=====Components=====
  // additional fee component

  // additional

  console.log(formData);

  const feeElements = formData.otherFees.map((element) => {
    return (
      <Fee
        key={uuidv4()}
        name={element.name}
        value={element.value}
        type={element.type}
        id={element.id}
      />
    );
  });
  function Fee(props) {
    return (
      <>
        <div className="flex justify-between">
          <div className="w-2/6 flex items-center">
            <label htmlFor="" className={`${labelClasses}`}>
              {props.name}
            </label>
          </div>
          <div className="w-1/5 flex items-center">
            <label htmlFor="" className={`${labelClasses}`}>
              {props.value}
            </label>
          </div>
          <div className="w-1/5 flex items-center">
            <label htmlFor="" className={`${labelClasses}`}>
              {props.type}
            </label>
          </div>
          <div className="flex items-center">
            <button
              className={`whitespace-nowrap text-sm `}
              onClick={() => deleteFee(props.id)}
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
        <hr className="mt-1 mb-2" />
      </>
    );
  }

  // properties from context api
  // const { themeColor, specialButtonColor } = useStateContext();

  const themeColor = "#0f172a";

  // styles for label
  const labelClasses = `block font-inter text-lg mb-1 `;

  // styles for input
  const inputClasses = `placeholder:text-gray-400 placeholder:font-normal block w-full font-inter outline-none text-md border-1 border-[#cccccc] px-2 py-1 rounded-md `;

  const specialButtonClass = `text-xl font-medium mt-2 `;

  const primaryBtn = `text-md text-white pt-[6px] px-4 py-1 rounded-lg bg-[#0f172a]`;
  const secondaryBtn = `text-md border-2 pt-[6px] px-4 py-1 rounded-lg border-[#0f172a]`;

  // styles for select
  const colourStyles = {
    control: (styles) => ({
      ...styles,

      borderRadius: "6px",
      border: "1px solid #cccccc",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #cccccc",
      },
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

  // options for propertyName
  const propertyNameOptions = [
    { value: "property 1", label: "property 1 (ID:1224)" },
    { value: "property 2", label: "property 2 (ID:234)" },
    { value: "property 3", label: "property 3 (ID:545)" },
  ];

  // options for source
  const sourceOptions = [
    { value: "source 1", label: "source 1" },
    { value: "source 2", label: "source 2" },
    { value: "source 3", label: "source 3" },
  ];

  // options for tenants
  const tenantOptions = [
    { value: "tenant 1", label: "tenant 1" },
    { value: "tenant 2", label: "tenant 2" },
    { value: "tenant 3", label: "tenant 3" },
  ];

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-[#fafafa] rounded-md flex flex-col items-center ">
      <div>
        <div>
          <Header title="Create a booking" />
        </div>

        <div className="flex justify-start">
          <div className="w-[500px] ">
            {/*  PROPERTY*/}
            <div className="mt-3 flex justify-center flex-col">
              <label htmlFor="propertyName" className={labelClasses}>
                Property
              </label>

              <Select
                options={propertyNameOptions}
                name="propertyName"
                id="propertyName"
                placeholder="Select property"
                isSearchable
                styles={colourStyles}
                onChange={handleChange}
                required
              />
            </div>

            {/* Arrival date time */}
            <div className="mt-5 flex justify-center gap-5">
              <div className="w-full">
                <label htmlFor="arrivalDateTime" className={labelClasses}>
                  Arrival Date and Time
                </label>
                <input
                  type="datetime-local"
                  name="arrivalDateTime"
                  id="arrivalDateTime"
                  value={formData.arrivalDateTime}
                  className={`${inputClasses} datetime-picker`}
                  onChange={handleChange}
                  placeholder="MM-DD-YYYY"
                  required
                />
              </div>
            </div>

            {/* Departure date time */}
            <div className="mt-5 flex justify-center gap-5">
              <div className="w-full">
                <label htmlFor="departureDateTime" className={labelClasses}>
                  Departure Date and Time
                </label>
                <input
                  type="datetime-local"
                  name="departureDateTime"
                  id="departureDateTime"
                  value={formData.departureDateTime}
                  className={`${inputClasses} datetime-picker`}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* source */}
            <div className="mt-5 grid grid-cols-[1fr_2fr] gap-5">
              <div className="w-full">
                <label htmlFor="sourceType" className={labelClasses}>
                  Source Type
                </label>
                <Select
                  options={[
                    { value: "agent", label: "Agent" },
                    { value: "platform", label: "Platform" },
                  ]}
                  name="sourceType"
                  id="sourceType"
                  placeholder="source type"
                  isSearchable
                  styles={colourStyles}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="source" className={labelClasses}>
                  Source
                </label>
                <Select
                  options={sourceOptions}
                  name="source"
                  id="source"
                  placeholder="Select source"
                  isSearchable
                  styles={colourStyles}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <hr className="mt-10 mb-10" />

            {/* Guests section */}
            <h3 className="text-xl font-semibold">Guests</h3>

            {/* guests counts */}
            <div className="mt-5 flex justify-center gap-5">
              <div className="w-full">
                <label htmlFor="adultsCount" className={labelClasses}>
                  Adults
                </label>
                <input
                  type="number"
                  id="adultsCount"
                  name="adultsCount"
                  className={`${inputClasses}`}
                  value={formData.adultsCount}
                  onChange={handleChange}
                  placeholder="Total adults"
                  min={1}
                />
              </div>
              <div className="w-full">
                <label htmlFor="childrenCount" className={labelClasses}>
                  Children
                </label>
                <input
                  type="number"
                  id="childrenCount"
                  name="childrenCount"
                  className={`${inputClasses}`}
                  value={formData.childrenCount}
                  onChange={handleChange}
                  placeholder="Total children"
                  min={0}
                />
              </div>
              <div className="w-full">
                <label htmlFor="petsCount" className={labelClasses}>
                  Pets
                </label>
                <input
                  type="number"
                  id="petsCount"
                  name="petsCount"
                  className={`${inputClasses}`}
                  value={formData.petsCount}
                  onChange={handleChange}
                  placeholder="Total pets"
                  min={0}
                />
              </div>
            </div>

            {/*  Tenant name */}
            <div className="mt-5 gap-5">
              <div className="w-full">
                <label htmlFor="tenantName" className={labelClasses}>
                  Billing Tenant Name
                </label>
                <Select
                  options={tenantOptions}
                  name="tenantName"
                  id="tenantName"
                  placeholder="Select tenant from existing tenants"
                  isSearchable
                  styles={colourStyles}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* add tenant popup button */}
              <button
                className={`${labelClasses} ${specialButtonClass} `}
                onClick={addNewTenant}
              >
                Add new tenant +
              </button>
            </div>

            {/* notes */}
            <div className="mt-5 gap-5">
              <div className="w-full">
                <label htmlFor="tenantName" className={labelClasses}>
                  Notes
                </label>
                <textarea
                  cols="30"
                  rows="5"
                  value={formData.notes}
                  name="notes"
                  id="notes"
                  className={inputClasses}
                  onChange={handleChange}
                />
              </div>
            </div>

            <hr className="mt-10 mb-10" />

            {/* Payments section */}
            <h3 className="text-xl font-semibold">Payments (€)</h3>

            {/* monthly rent */}
            <div className="mt-5 gap-5">
              <div className="flex justify-start gap-5 items-center">
                <label
                  htmlFor="monthlyRent"
                  className={`${labelClasses} whitespace-nowrap `}
                >
                  Monthly Rent
                </label>
                <input
                  className={`${inputClasses} w-40 `}
                  type="number"
                  id="monthlyRent"
                  name="monthlyRent"
                  value={formData.monthlyRent}
                  onChange={handleChange}
                  min={0}
                />
              </div>
            </div>

            {/* deposit */}
            <div className="mt-5 gap-5">
              <div className="flex justify-start gap-5 items-center">
                <label
                  htmlFor="deposit"
                  className={`${labelClasses} whitespace-nowrap mr-11`}
                >
                  Deposit
                </label>
                <input
                  className={`${inputClasses} w-40 `}
                  type="number"
                  id="deposit"
                  name="deposit"
                  value={formData.deposit}
                  onChange={handleChange}
                  min={0}
                />
              </div>
            </div>

            {/* cleaning fee */}
            <div className="mt-5 gap-5">
              <div className="flex justify-start gap-5 items-center">
                <label
                  htmlFor="cleaningFee"
                  className={`${labelClasses} whitespace-nowrap `}
                >
                  Cleaning Fee
                </label>
                <input
                  className={`${inputClasses} w-40 `}
                  type="number"
                  id="cleaningFee"
                  name="cleaningFee"
                  value={formData.cleaningFee}
                  onChange={handleChange}
                  min={0}
                />
              </div>
            </div>

            <div className="mt-10 gap-5">{feeElements}</div>
            {/* add more fees */}
            <div className="mt-5 flex flex-col">
              <div>
                <label className={labelClasses}>Add more fees</label>
              </div>
              <div className=" flex gap-4 justify-start items-end">
                <div className="w-2/6">
                  <input
                    type="text"
                    id="newFeeName"
                    name="newFeeName"
                    className={inputClasses}
                    placeholder="Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/5">
                  <input
                    type="number"
                    id="newFeeValue"
                    name="newFeeValue"
                    className={inputClasses}
                    placeholder="Amount"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Select
                    options={[
                      { value: "one-time", label: "One Time" },
                      { value: "monthly", label: "Monthly" },
                    ]}
                    name="newFeeType"
                    id="newFeeType"
                    placeholder="Type"
                    styles={colourStyles}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="">
                  <button
                    className={`${labelClasses} ${specialButtonClass} whitespace-nowrap `}
                    onClick={addNewFee}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
            {/* Payment totals */}
            <div>
              <div className="mt-10 flex items-center">
                <span className="text-md mr-1">First Payment:</span>

                <span>
                  <span className="currency font-bold mr-1">€</span>
                  <span
                    className="font-bold"
                    name="totalFirstPayment"
                    id="totalFirstPayment"
                  >
                    {formData.totalFirstPayment}
                  </span>
                </span>
              </div>
              <div>
                <span className="text-sm -mt-10">
                  (Deposit + 1st Month Rent and Fees + One Time Fees)
                </span>
              </div>

              <div className="flex items-center mt-5">
                <span className="text-md mr-1 ">Monthly Rent:</span>

                <span>
                  <span className="currency font-bold mr-1">€</span>
                  <span
                    className="font-bold"
                    name="totalFirstPayment"
                    id="totalFirstPayment"
                  >
                    {formData.totalMonthlyPayment}
                  </span>
                </span>
              </div>
            </div>

            <hr className="mt-10 mb-10" />

            {/* Emails  */}
            <h3 className="text-xl font-semibold">Send Emails</h3>
            <div className="mt-5 flex justify-start items-center gap-5">
              <input
                type="checkbox"
                id="bookingConfirmationGuestCheck"
                name="bookingConfirmationGuestCheck"
                checked={formData.bookingConfirmationGuestCheck}
                onChange={handleChange}
                className="h-4 w-4 mb-1"
              />
              <label
                htmlFor="bookingConfirmationGuestCheck"
                className={labelClasses}
              >
                Send booking confirmation to guest
              </label>
            </div>
            <div className="mt-2 flex justify-start items-center gap-5">
              <input
                type="checkbox"
                id="bookingConfirmationAgentCheck"
                name="bookingConfirmationAgentCheck"
                checked={formData.bookingConfirmationAgentCheck}
                onChange={handleChange}
                className="h-4 w-4 mb-1"
              />
              <label
                htmlFor="bookingConfirmationAgentCheck"
                className={labelClasses}
              >
                Send booking confirmation to agent
              </label>
            </div>
            <div className="mt-2 flex justify-start items-center gap-5">
              <input
                type="checkbox"
                id="notifyThirdParitiesCheck"
                name="notifyThirdParitiesCheck"
                checked={formData.notifyThirdParitiesCheck}
                onChange={handleChange}
                className="h-4 w-4 mb-1"
              />
              <label
                htmlFor="notifyThirdParitiesCheck"
                className={labelClasses}
              >
                Notify 3rd parties
              </label>
            </div>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="mt-5 mb-10 flex justify-start gap-5">
          <button type="button" className={`${primaryBtn}`}>
            Add Booking
          </button>
          <button type="button" className={`${secondaryBtn} `}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateABooking;
