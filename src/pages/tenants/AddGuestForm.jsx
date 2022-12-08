import React from "react";
import { Header } from "../../components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useStateContext } from "../../contexts/ContextProvider";
import {} from "../../data/dummy";

import {
  labelClasses,
  inputClasses,
  specialButtonClass,
  primaryBtn,
  secondaryBtn,
  colourStyles,
  h3FormClass,
  hrFormClass,
} from "../../css/CustomStyles";

export default function AddTenantForm(props) {
  const initialFormData = {
    firstName: "",
    lastName: "",
    gender: "male",
    email: "",
    contactNumber: "",
    whatsAppNumber: "",
    addressLineOne: "",
    addressLineTwo: "",
    cityDistrict: "",
    provinceState: "",
    postalCode: "",
    country: "",
  };
  const [formData, setFormData] = React.useState(initialFormData);

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;

    setFormData((preFormData) => {
      return {
        ...preFormData,
        [name]: value,
      };
    });
  };
  console.log(formData);
  return (
    <div className="w-[500px] p-1 overflow-y-scroll">
      <form action="">
        {/* Firstname Lastname */}
        <div className="mt-5 flex justify-center gap-5">
          {/* first name */}
          <div className="w-full">
            <label htmlFor="firstName" className={labelClasses}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`${inputClasses}`}
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          {/* last name */}
          <div className="w-full">
            <label htmlFor="lastName" className={labelClasses}>
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`${inputClasses}`}
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* gender */}
        <div className="mt-5">
          <label className={`${labelClasses} `}>Gender</label>
          <div className="flex justify-start items-center gap-10">
            <div>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={handleChange}
                className="scale-125"
                checked={formData.gender === "male"}
              />
              <label
                htmlFor="male"
                className={`${labelClasses} inline-block ml-2`}
              >
                Male
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={handleChange}
                className="scale-125"
                checked={formData.gender === "female"}
              />

              <label
                htmlFor="female"
                className={`${labelClasses} inline-block ml-2`}
              >
                Female
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                onChange={handleChange}
                className="scale-125"
                checked={formData.gender === "other"}
              />
              <label
                htmlFor="other"
                className={`${labelClasses} inline-block ml-2`}
              >
                Other
              </label>
            </div>
          </div>
        </div>
        <hr className={`${hrFormClass}`} />
        <h3 className={`${h3FormClass}`}>Contact Info</h3>
        {/* email */}
        <div className="mt-5 ">
          <label className={`${labelClasses} `}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputClasses}`}
          />
        </div>
        {/* contact number */}
        <div className="mt-5 ">
          <label className={`${labelClasses} `}>Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            id="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className={`${inputClasses}`}
          />
        </div>
        {/* whatsapp number */}
        <div className="mt-5 ">
          <label className={`${labelClasses} `}>WhatsApp Number</label>
          <input
            type="tel"
            name="whatsAppNumber"
            id="whatsAppNumber"
            value={formData.whatsAppNumber}
            onChange={handleChange}
            className={`${inputClasses}`}
          />
        </div>
        <hr className={`${hrFormClass}`} />
        <h3 className={`${h3FormClass}`}>Contact Info</h3>
        {/* Address */}
        <div className="mt-5 ">
          <label htmlFor="addressLineOne" className={`${labelClasses} `}>
            Address Line 1
          </label>
          <input
            type="text"
            name="addressLineOne"
            id="addressLineOne"
            value={formData.addressLineOne}
            onChange={handleChange}
            className={`${inputClasses}`}
          />
        </div>
        <div className="mt-5 ">
          <label htmlFor="addressLineTwo" className={`${labelClasses} `}>
            Address Line 2 (optional)
          </label>
          <input
            type="text"
            name="addressLineTwo"
            id="addressLineTwo"
            value={formData.addressLineTwo}
            onChange={handleChange}
            className={`${inputClasses}`}
          />
        </div>
        <div className="mt-5 flex justify-start gap-5">
          <div>
            <label htmlFor="cityDistrict" className={`${labelClasses} `}>
              City/District (optional)
            </label>
            <input
              type="text"
              name="cityDistrict"
              id="cityDistrict"
              value={formData.cityDistrict}
              onChange={handleChange}
              className={`${inputClasses}`}
            />
          </div>

          <div>
            <label htmlFor="provinceState" className={`${labelClasses} `}>
              Province/State (optional)
            </label>
            <input
              type="text"
              name="provinceState"
              id="provinceState"
              value={formData.provinceState}
              onChange={handleChange}
              className={`${inputClasses}`}
            />
          </div>
        </div>
        <div className="mt-5 flex justify-start gap-5">
          <div>
            <label htmlFor="postalCode" className={`${labelClasses} `}>
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className={`${inputClasses}`}
            />
          </div>

          <div>
            <label htmlFor="country" className={`${labelClasses} `}>
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              value={formData.country}
              onChange={handleChange}
              className={`${inputClasses}`}
            />
          </div>
        </div>
        <hr className="mt-10" />
        <div className="mt-5 mb-10 flex justify-start gap-5">
          <button type="button" className={`${primaryBtn} w-full`}>
            Add Guest
          </button>
        </div>
      </form>
    </div>
  );
}
