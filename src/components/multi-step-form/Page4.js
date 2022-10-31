import React from "react";

export default function Page4(props) {
  return (
    <div>
      <h2 className={props.cssObject.h2Classes}>Page 4</h2>

      <div className="mt-3">
        <label htmlFor="companyName" className={props.cssObject.labelClasses}>
          Test 1
        </label>
        <input
          className={props.cssObject.inputClasses}
          type="text"
          placeholder="Enter your company name"
          name="test1"
          id="companyName"
          value={props.formData.test1}
          onChange={(event) => props.handleOnChange(event, "page4")}
        />
      </div>
      <div className="mt-3">
        <label
          className={props.cssObject.labelClasses}
          htmlFor="contactPersonName"
        >
          Test 2
        </label>
        <input
          className={props.cssObject.inputClasses}
          type="text"
          placeholder="Enter the contact person's name"
          name="test2"
          id="contactPersonName"
          value={props.formData.test2}
          onChange={(event) => props.handleOnChange(event, "page4")}
        />
      </div>
    </div>
  );
}
