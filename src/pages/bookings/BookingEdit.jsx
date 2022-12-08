import React from "react";
import { Header } from "../../components";
import { SecondaryMenu } from "../../components";

const BookingEdit = (props) => {
  // get the id of the booking
  console.log(props.bookingId)
  const id = 1;

  // menu items to create secondary menu
  const secondaryMenuItems = [
    { title: "Overview", bookingId: id },
    { title: "Edit", bookingId: id },
    { title: "Email Tenant", bookingId: id },
    { title: "Cancel/Close Booking", bookingId: id },
    { title: "Delete Booking", bookingId: id },
  ];
  return (
    <>
      <div className="flex justify-start items-center mt-10">
        <div className="flex items-center mr-10 ">
          <Header title="Overview" />
        </div>
        <SecondaryMenu links={secondaryMenuItems} />
      </div>
    </>
  );
};

export default BookingEdit;
