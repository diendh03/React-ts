import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticate } from "../utils/localStorage";
type PrivateRouterProps = {
  children: JSX.Element;
};

const PrivateRouterMem = (props: PrivateRouterProps) => {
  const user = isAuthenticate();
  if (!user) {
    alert("Bạn cần đăng nhập để thực hiện chức năng này");
    return <Navigate to="/signin" />;
  }

  return props.children;
};

export default PrivateRouterMem;
