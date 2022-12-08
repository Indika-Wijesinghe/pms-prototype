import { createContext, useState, useEffect } from "react";
import { useStateContext } from "./ContextProvider";
import jwt_decode from "jwt-decode";

// check for refresh token in the local storage
// if there login and redirect to the admin
// if not redirect to the login
// store the login data

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const { BASE_URL } = useStateContext();
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();

  const getTokens = async (refreshToken) => {
    let response = await fetch(BASE_URL + "token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: refreshToken,
      }),
    });

    if (response.status !== 200) {
      throw new Error("login failed. try again later ");
    } else {
      let data = await response.json();
      const userData = jwt_decode(data.access);
      setRefreshToken(data.refresh);
      setAccessToken(data.access);

      localStorage.setItem("pmsrefresh", data.refresh);
      return userData;
    }
  };

  const [user, setUser] = useState(() => {
    // if (localStorage.getItem("pmsrefresh")) {
    //   setRefreshToken(localStorage.getItem("pmsrefresh"));
    //   getTokens(refreshToken);
    // } else {
    //   return null;
    // }
    return "";
  });

  const loginUser = async (username, password) => {
    let response = await fetch(BASE_URL + "token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });

    if (response.status !== 200) {
      throw new Error("login failed. try again later ");
    } else {
      let data = await response.json();
      const userData = await jwt_decode(data.access);

      setRefreshToken(data.refresh);
      setAccessToken(data.access);
      setUser(userData);
      console.log(userData);
      localStorage.setItem("pmsrefresh", data.refresh);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
