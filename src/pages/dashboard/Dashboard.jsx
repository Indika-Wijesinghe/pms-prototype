import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
  Sort,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../../components";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-[#fafafa] rounded-md flex justify-start ">
        <div>
          <div className="">
            <NavLink to={`/new-booking`}>
              <button className="text-md text-white pt-[6px] px-4 py-1 rounded-lg bg-[#0f172a]">
                Create a booking
              </button>
            </NavLink>

            <NavLink to={`/add-tenant`}>
              <button className="text-md text-white pt-[6px] px-4 py-1 rounded-lg bg-[#0f172a]">
                Add Tenant
              </button>
            </NavLink>
            <NavLink to={`/single-booking`}>
              <button className="text-md text-white pt-[6px] px-4 py-1 rounded-lg bg-[#0f172a]">
                Single Booking
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
