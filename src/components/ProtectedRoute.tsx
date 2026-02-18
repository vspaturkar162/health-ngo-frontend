// import React from "react";
// import { Navigate } from "react-router-dom";

// type Props = { children: React.ReactNode };// ✅ Changed to React.ReactNode for better type safety


// export default function ProtectedRoute({ children }: Props): React.ReactNode {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     return <Navigate to="/admin/auth" replace />;
//   }
//   return <>{children}</>;
// }

import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
}