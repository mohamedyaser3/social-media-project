import { createContext, useEffect, useState } from "react";
import { getUserDataApi } from "../service/authService";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [isLoggdin, setIsLoggdin] = useState(
    localStorage.getItem("token") != null
  );

  async function getUserData() {
    const response = await getUserDataApi();
    console.log(response);
    if (response.message == "success") {
      setUserData(response.user);
    }
  }
  useEffect(() => {
    if (isLoggdin) {
      getUserData();
    }else{
      setUserData(null)
    }
  }, [isLoggdin]);

  return (
    <>
      <authContext.Provider
        value={{ isLoggdin, setIsLoggdin, userData, setUserData }}
      >
        {children}
      </authContext.Provider>
    </>
  );
}
