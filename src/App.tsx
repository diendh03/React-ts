import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Layout
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Dashboard from "./admin/Dashboard";
//SanPham
import ProductManagement from "./admin/product/productManagement";
import AddProduct from "./admin/product/AddProduct";
import UpdateProduct from "./admin/product/UpdateProduct";
//DangNhap
import SignIn from "./pages/SignIn";
import SignUp, { SignupForm } from "./pages/SignUp";
import PrivateRouter from "./components/PrivateRouter";
import { authenticated, isAuthenticate } from "./utils/localStorage";
//Layout
import ClientLayout from "./layout/ClientLayout";
import AdminLayout from "./layout/AdminLayout";
//type
import { ICartItem, ICate, IProduct, IUser } from "./interface/Interface";
//User
import { addUser, signin } from "./api/user";
//router
import {
  addProduct,
  deleteProduct,
  getAllProduct,
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
import UserList from "./admin/product/productMana";
import CartList from "./pages/CartList";
import PrivateRouterMem from "./components/PrivateRouterMem";
import ShopPage from "./pages/ShopPage";
import FindCateById from "./components/FindCateById";
import FindAllCate from "./components/FindAllCate";

function App() {
  const navigate = useNavigate();
  const [products, setProduct] = useState<any>([]);
  const [categories, setCategory] = useState<ICate[]>([]);

  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data));
    getAllCategory().then(({ data }) => setCategory(data));
  }, []);

  ///SanPham
  const onHandleRemove = (id: number | string) => {
    deleteProduct(id)
      .then(() => {
        setProduct(products.filter((product: IProduct) => product._id !== id));
      })
      .then(() => alert("Xoa thanh cong"));
  };
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => setProduct([...products, product]));
  };
  const onHandleUpdate = (product: IProduct) => {
    // console.log(product);
    const newData = products.docs.filter(
      (pro: IProduct) => pro._id != product._id
    );
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
  ///ADD to cart

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      return JSON.parse(savedCartItems);
    } else {
      return [];
    }
  });

  const handleAddToCart = (product: any, quantity: number) => {
    const existingCartItem = cartItems.find(
      (item: ICartItem) => item.product._id === product._id
    );
    if (existingCartItem) {
      setCartItems(
        cartItems.map((item: ICartItem) =>
          item.product._id === product._id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };
  const handleRemoveFromCart = (id: string) => {
    setCartItems(
      cartItems.filter((item: ICartItem) => item.product._id !== id)
    );
    alert("Đã xóa sản phẩm khỏi giỏ hàng");
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  ///User
  const onHandleAddUser = (user: SignupForm) => {
    addUser(user)
      .then(() => alert("Đăng ký thành công"))
      .then(() => navigate("/signin"));
  };
  const onHandleSignin = (user: IUser) => {
    signin(user)
      .then(({ data }) => {
        localStorage.setItem("accessToken", data.accessToken);
        authenticated(data.user);
      })
      .then(() => {
        const user = isAuthenticate();
        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.response.data.messages);
      });
  };
  const onHandleLogOut = () => {
    localStorage.removeItem("accessToken");
    location.reload();
  };
  return (
    <div className="App">
      <Routes>
        //Dang nhap or dang ki
        <Route path="/signin" element={<SignIn onAdd={onHandleSignin} />} />
        <Route path="/signup" element={<SignUp onAdd={onHandleAddUser} />} />
        //Client
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage products={products} />} />
          <Route path="/shop" element={<ShopPage categories={categories} />}>
            <Route index element={<FindAllCate />} />
            <Route path=":id" element={<FindCateById />} />
          </Route>
          <Route
            path="/carts"
            element={
              <PrivateRouterMem>
                <CartList
                  item={cartItems}
                  onRemoveFromCart={handleRemoveFromCart}
                />
              </PrivateRouterMem>
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetailPage onAddToCart={handleAddToCart} />}
          />
        </Route>
        //Admin
        <Route
          path="/admin"
          element={
            <PrivateRouter>
              <AdminLayout />
            </PrivateRouter>
          }
        >
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
                <UserList products={products} onRemove={onHandleRemove} />
              }
            />
            <Route
              path="add"
              element={
                <AddProduct categories={categories} onAdd={onHandleAdd} />
              }
            />
            <Route
              path="update/:id"
              element={
                <UpdateProduct
                  products={products}
                  categories={categories}
                  onUpdate={onHandleUpdate}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
