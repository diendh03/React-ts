import React from "react";
import { Link, Outlet } from "react-router-dom";
import FindCateById from "../../components/FindCateById";
import { ICate } from "../../interface/Interface";

const ShopPage = (props: any) => {
  return (
    <>
      <div
        className="flex  border-solid  border-t-2  border-[#D1D5DB]  container mx-auto"
        style={{ marginTop: "100px", paddingBottom: "30px" }}
      >
        <aside
          className="relative bg-sidebar h-screen w-70 hidden sm:block border-solid  border-r-2  border-[#D1D5DB] "
          style={{ width: "200px", paddingTop: "100px" }}
        >
          <label className="mb-3 block text-base font-bold text-[#07074D]">
            Category Name
          </label>
          <nav
            className="flex flex-col space-y-1"
            style={{ maxWidth: "200px" }}
          >
            <Link
              to="/shop"
              className="group flex items-center justify-between rounded-lg hover:bg-gray-100  px-4 py-2 text-gray-700"
            >
              <span className="text-sm font-medium"> General </span>
            </Link>
            {props.categories.map((category: ICate) => {
              return (
                <Link
                  key={category._id}
                  to={`/shop/${category._id}`}
                  className="group flex items-center justify-between rounded-lg hover:bg-gray-100  px-4 py-2 text-gray-700"
                >
                  <span className="text-sm font-medium">{category.name}</span>
                </Link>
              );
            })}
          </nav>
        </aside>
        <div style={{ marginLeft: "150px", maxWidth: "1000px" }}>
          {/* <FindCateById /> */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
