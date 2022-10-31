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

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-[#fafafa] rounded-md flex justify-start ">
        <div>
          <div className="">
            <NavLink to={`/create-a-booking`}>
              <button className="text-md text-white pt-[6px] px-4 py-1 rounded-lg bg-[#0f172a]">
                Create a booking
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
