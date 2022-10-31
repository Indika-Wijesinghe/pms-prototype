export default function Page1(props) {
  return (
    <div>
      <h2 className={props.cssObject.h2Classes}>Basic company details</h2>

      <div className="mt-3">
        <label htmlFor="companyName" className={props.cssObject.labelClasses}>
          Company name
        </label>
        <input
          className={props.cssObject.inputClasses}
          type="text"
          placeholder="Enter your company name"
          name="companyName"
          id="companyName"
          value={props.formData.companyName}
          onChange={props.handleOnChange}
        />
      </div>
      <div className="mt-3">
        <label
          className={props.cssObject.labelClasses}
          htmlFor="contactPersonName"
        >
          Contact person's name
        </label>
        <input
          className={props.cssObject.inputClasses}
          type="text"
          placeholder="Enter the contact person's name"
          name="contactPersonName"
          id="contactPersonName"
          value={props.formData.contactPersonName}
          onChange={props.handleOnChange}
        />
      </div>
      <div className="mt-3">
        <label
          className={props.cssObject.labelClasses}
          htmlFor="contactPersonEmail"
        >
          Contact person's email address
        </label>
        <input
          className={props.cssObject.inputClasses}
          type="email"
          placeholder="Enter the contact person's email"
          name="contactPersonEmail"
          id="contactPersonEmail"
          value={props.formData.contactPersonEmail}
          onChange={props.handleOnChange}
        />
      </div>
      <div className="mt-3">
        <label
          className={props.cssObject.labelClasses}
          htmlFor="contactPersonPhone"
        >
          Contact person's phone number
        </label>
        <input
          className={props.cssObject.inputClasses}
          type="tel"
          placeholder="Enter the contact person's phone number"
          name="contactPersonPhone"
          id="contactPersonPhone"
          onChange={props.handleOnChange}
          value={props.formData.contactPersonPhone}
        />
      </div>
      <h2 className={props.cssObject.h2Classes}>Payment</h2>
      <p className="font-semibold text-gray-500 text-sm mb-4 ">
        In order to continue, please make the first payment mentioned below
        which includes the documentation fee
      </p>
      <div>
        <p className={`${props.cssObject.labelClasses} mb-2`}>
          Payment summary
        </p>
        <hr />
        <div className={props.cssObject.cellDivClasses}>
          <span>Documentation</span>
          <span>LKR 20,000</span>
        </div>
        <hr />
        <div className={props.cssObject.cellDivClasses}>
          <span>When you sign the documents</span>
          <span>LKR 13,000</span>
        </div>
        <hr />
        <div className={props.cssObject.cellDivClasses}>
          <span>When collecting the documents</span>
          <span>LKR 12,000</span>
        </div>
        <hr />
        <div className={props.cssObject.cellDivClasses}>
          <span className="font-extrabold text-[#080a3c]">Total amount</span>
          <span className="font-extrabold text-[#080a3c]">LKR 45,000</span>
        </div>
        <hr />
        <div className={props.cssObject.cellDivClasses}>
          <span className="font-extrabold text-red-400">Amount due now</span>
          <span className="font-extrabold text-red-400">LKR 20,000</span>
        </div>
      </div>
      <div>
        <h2 className={`${props.cssObject.h2Classes} my-5`}> Payment method</h2>
        <div className="mt-1 flex justify-start items-center">
          <input
            className="mr-2 h-4 w-4"
            type="radio"
            name="paymentMethod"
            id="cardPayment"
            onChange={props.handleOnChange}
            value="card-payment"
            checked={props.formData.paymentMethod === "card-payment"}
          />
          <label
            className={`${props.cssObject.labelClasses} inline`}
            htmlFor="cardPayment"
          >
            Pay with credit/debit card
          </label>
        </div>
        <div className="mt-3 flex justify-start items-center">
          <input
            className="mr-2 h-4 w-4"
            type="radio"
            name="paymentMethod"
            id="bankTransfer"
            onChange={props.handleOnChange}
            checked={props.formData.paymentMethod === "bank-transfer"}
            value="bank-transfer"
          />
          <label
            className={`${props.cssObject.labelClasses} inline-block`}
            htmlFor="bankTransfer"
          >
            Bank transfer
          </label>
        </div>
      </div>
      <div className="mt-3">
        <h2 className={props.cssObject.h2Classes}>Card information</h2>
        <div className="flex gap-5 mb-2">
          <div>
            <label
              className={props.cssObject.labelClasses}
              htmlFor="cardFirstName"
            >
              First Name
            </label>
            <input
              className={props.cssObject.inputClasses}
              type="text"
              name="cardFirstName"
              id="cardFirstName"
              onChange={props.handleOnChange}
              value={props.formData.cardFirstName}
            />
          </div>
          <div>
            <label
              className={props.cssObject.labelClasses}
              htmlFor="cardLastName"
            >
              Last Name
            </label>
            <input
              className={props.cssObject.inputClasses}
              type="text"
              name="cardLastName"
              id="cardLastName"
              onChange={props.handleOnChange}
              value={props.formData.cardLastName}
            />
          </div>
        </div>

        <div className="mt-2">
          <label
            className={props.cssObject.labelClasses}
            htmlFor="cardHolderEmail"
          >
            Email
          </label>
          <input
            className={props.cssObject.inputClasses}
            type="email"
            id="cardHolderEmail"
            name="cardHolderEmail"
            onChange={props.handleOnChange}
            value={props.formData.cardHolderEmail}
          />
        </div>

        <div className="mt-2">
          <label
            className={props.cssObject.labelClasses}
            htmlFor="cardHolderContactNo"
          >
            ContactNo
          </label>
          <input
            className={props.cssObject.inputClasses}
            type="tel"
            id="cardHolderContactNo"
            name="cardHolderContactNo"
            onChange={props.handleOnChange}
            value={props.formData.cardHolderContactNo}
          />
        </div>
      </div>
    </div>
  );
}
