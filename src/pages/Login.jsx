import React, { useContext } from "react";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "react-icons/fa";
import AuthContext from "../contexts/AuthContext";

import { Link, useNavigate, useLocation } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";
import {
  h3FormClass,
  labelClasses,
  inputClasses,
  primaryBtn,
} from "../css/CustomStyles.js";
const Login = () => {
  const { user, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username, password);
    console.log(user.roles);
    // navigate(from, { replace: true });
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="">
        <h1 className={`${h3FormClass} text-2xl`}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className={`${labelClasses} mt-5`}>
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className={`${inputClasses}`}
            />
          </div>
          <div>
            <label htmlFor="password" className={`${labelClasses} mt-2`}>
              {" "}
              Username
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className={`${inputClasses}`}
            />
          </div>
          <input
            className={`${primaryBtn} mt-5 w-full`}
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
