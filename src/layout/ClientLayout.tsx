import React from "react";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div>
      <header>adasdasd</header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default ClientLayout;
