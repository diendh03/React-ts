import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
//Layout
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";

import Dashboard from "./admin/Dashboard";
//SanPham
import ProductManagement from "./admin/product/productManagement";
import AddProduct from "./admin/product/AddProduct";
import UpdateProduct from "./admin/product/UpdateProduct";
//DangNhap
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
//Layout
import ClientLayout from "./layout/ClientLayout";
import AdminLayout from "./layout/AdminLayout";
//type
import { ICate, IProduct, IUser } from "./interface/Interface";
//User
import { addUser, signin } from "./api/user";
//router
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProductId,
  updateProduct,
} from "./api/product";
import {
  createCate,
  deleteCate,
  getAllCategory,
  updateCate,
} from "./api/category";
import { useNavigate } from "react-router-dom";
//Danhmuc
import AddCategory from "./admin/category/addCategory";

import CategoryManagement from "./admin/category/categoryManagement";
import UpdateCategory from "./admin/category/updateCategory";
// import { useParams } from "react-router-dom";/
function App() {
  const navigate = useNavigate();
  const [products, setProduct] = useState<IProduct[]>([]);
  const [categories, setCategory] = useState<ICate[]>([]);
  // const [product, setProducts] = useState({});

  // console.log(id);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data));
    getAllCategory().then(({ data }) => setCategory(data));
  }, []);

  // console.log(products);
  ///SanPham
  const onHandleRemove = (id: number | string) => {
    deleteProduct(id)
      .then(() => {
        setProduct(products.filter((product) => product._id !== id));
      })
      .then(() => alert("Xoa thanh cong"));
  };
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => setProduct([...products, product]));
  };
  const onHandleUpdate = (product: IProduct) => {
    // console.log(product);
    const newData = products.filter((pro) => pro._id != product._id);
    // console.log(newData);
    updateProduct(product).then(() => setProduct([...newData, product]));
  };
  ///DanhMuc
  const onHandleAddCate = (category: ICate) => {
    createCate(category).then(() => alert("Thêm thành công"));
  };
  const onHandleRemoveCate = (id: string | number) => {
    deleteCate(id)
      .then(() => {
        setCategory(categories.filter((category) => category._id !== id));
      })
      .then(() => alert("Xoa thanh cong"));
  };
  const onHandleUpdateCate = (category: ICate) => {
    const newData = categories.filter((pro) => pro._id != category._id);
    updateCate(category).then(() => setCategory([...newData, category]));
  };
  ///User
  const onHandleAddUser = (user: IUser) => {
    addUser(user)
      .then(() => alert("Đăng ký thành công"))
      .then(() => navigate("/signin"));
  };
  const onHandleSignin = (user: IUser) => {
    signin(user)
      .then(({ data }) => {
        localStorage.setItem("accessToken", data.accessToken);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  const onHandleLogOut = () => {
    localStorage.removeItem("accessToken");
    location.reload();
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/products"
            element={
              <ProductPage products={products} onRemove={onHandleRemove} />
            }
          >
            <Route path="/products/:id" element={<ProductDetailPage />} />
          </Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="categories">
            <Route
              index
              element={
                <CategoryManagement
                  categories={categories}
                  onRemove={onHandleRemoveCate}
                />
              }
            />
            <Route
              path="add"
              element={<AddCategory onAdd={onHandleAddCate} />}
            />
            <Route
              path="update/:id"
              element={
                <UpdateCategory
                  category={categories}
                  onUpdate={onHandleUpdateCate}
                />
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <ProductManagement
                  products={products}
                  onRemove={onHandleRemove}
                />
              }
            />
            <Route path="add" element={<AddProduct onAdd={onHandleAdd} />} />
            <Route
              path="update/:id"
              element={
                <UpdateProduct products={products} onUpdate={onHandleUpdate} />
              }
            />
          </Route>
        </Route>
        <Route
          path="/signup"
          element={<SignUpPage onAddUser={onHandleAddUser} />}
        />
        <Route
          path="/signin"
          element={
            <SignInPage onSignIn={onHandleSignin} onLogOut={onHandleLogOut} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
