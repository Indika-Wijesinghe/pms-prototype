import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import {
  Dashboard,
  AddTenent,
  CreateABooking,
  SingleBooking,
  BookingEdit,
  Login,
  Register,
} from "./pages";
import Layout from "./components/Layout";
import RequireAuth from "./pages/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route element={<RequireAuth />}>
          {/* private routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* create a booking */}
          <Route path="new-booking" element={<CreateABooking />} />
          <Route path="add-tenant" element={<AddTenent />} />
          <Route
            path="booking/:bookingId"
            element={<Navigate replace to="/booking/:bookingId/overview" />}
          />
          <Route
            path="booking/:bookingId/overview"
            element={<SingleBooking />}
          />
          <Route path="booking/:bookingId/edit" element={<BookingEdit />} />
        </Route>
        {/* catch all */}
      </Route>
    </Routes>
  );
}

export default App;
