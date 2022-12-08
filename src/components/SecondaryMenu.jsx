import React from "react";
import { NavLink } from "react-router-dom";

const SecondaryMenu = (props) => {
  const MenuItem = ({ title, bookingId }) => {
    const path = title.toLowerCase().replaceAll(" ", "-");
    return (
      <NavLink
        to={`/booking/${bookingId}/${path}`}
        className={(isActive) =>
          `font-semibold text-lg ${
            isActive ? "text-fonts-primary-color" : "text-fonts-secondary-color"
          }`
        }
      >
        <span>{title}</span>
      </NavLink>
    );
  };

  const menuItems = props.links.map(({ title, bookingId }) => {
    return (
      <li>
        <MenuItem title={title} bookingId={bookingId} />
      </li>
    );
  });

  return (
    <div>
      <nav>
        <ul className="flex justify-start gap-5">{menuItems}</ul>
      </nav>
    </div>
  );
};

export default SecondaryMenu;
