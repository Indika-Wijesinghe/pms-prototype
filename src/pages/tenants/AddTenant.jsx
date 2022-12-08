import React from "react";
import { Header } from "../../components";

import AddTenantForm from "./AddTenantForm";

export default function AddTenant() {
  return (
    <>
      <div className="mt-10">
        <Header title="Add Tenant" />
      </div>

      <div className="m-2 md:m-10 p-2 md:p-10 bg-[#fafafa] rounded-md flex flex-col items-center ">
        <div>
          <h2 className="text-2xl mb-5 font-semibold">Add a new tenant</h2>
          <AddTenantForm />
        </div>
      </div>
    </>
  );
}
