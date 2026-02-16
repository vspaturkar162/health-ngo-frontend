import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode; // ✅ Changed from JSX.Element
};

export default function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin/auth" replace />;
  }

  return <>{children}</>;
}