import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../Contexts/AuthContext";

export default function ProtectedRoutes({ children }) {
  const {isLoggdin} = useContext(authContext);
  return isLoggdin ? children : <Navigate to="/login" />;
}
