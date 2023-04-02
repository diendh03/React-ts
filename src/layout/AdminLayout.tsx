import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      Admin
      <header>aasdasdad</header>
      <main>
        <Outlet />
      </main>
      <footer>ádadasdasdasdad</footer>
    </div>
  );
};

export default AdminLayout;
