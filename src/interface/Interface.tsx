import React from "react";

interface IProduct {
  _id?: string | number;
  productName: string;
  price: number;
  originalPrice: number;
  description: string | undefined;
  image: string;
  categoryId: string;
}
interface IUser {
  _id?: string | number;
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface IPropUser {
  user: IUser[];
  onAddUser?: (inputValue: IUser) => void;
  onSignIn?: (inputValue: IUser) => void;
  onLogOut?: () => void;
}
interface ICate {
  _id: string | number;
  name: string;
}
interface ICartItem {
  product: {
    _id: string;
    name: string;
    price: number;
  };
  quantity: number;
}
// interface IPropProductAdd {
//   //   products: IProduct[];
//   //   onRemove: (id: number | string) => void;
//   onAdd: (inputValue: IProduct) => void;
//   //   onUpdate: (id: number | string, product: IProduct) => void;
// }
// interface IPropProductUpdate {
//   products: IProduct[];
//   //   onRemove: (id: number | string) => void;
//   //   onAdd: (inputValue: IProduct) => void;
//   onUpdate: (id: number | string, product: IProduct) => void;
// }
export type { IProduct, IUser, ICate, ICartItem, IPropUser };
