import React from "react";
import CartItem from "../components/CartItem";

type Props = {
  name: string;
  price: number;
  quantity: number;
};
const CartList = ({ item }: any) => {
  let isChecked = true;
  const existCartItems = JSON.parse(
    localStorage.getItem("cartItems") as string
  );
  if (existCartItems.length == 0) {
    isChecked = false;
  } else {
    isChecked = true;
  }
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {isChecked &&
                item.map((item: any, index: any) => {
                  return <CartItem key={index} item={item} />;
                })}
              {!isChecked && (
                <li className="flex items-center gap-4">
                  Không có sản phẩm nào trong giỏ hàng của bạn
                </li>
              )}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartList;
