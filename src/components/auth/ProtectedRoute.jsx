// src/components/auth/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./UseAuth";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
