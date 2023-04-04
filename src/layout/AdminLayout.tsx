import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      Admin
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default AdminLayout;
