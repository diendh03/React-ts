import React from "react";

interface IProduct {
  _id: string | number;
  name: string;
  price: number;
  des: string;
  categoryId: string;
}
interface IUser {
  _id: string | number;
  name?: string;
  email?: string;
  password?: string;
  confirmPass?: string;
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
export type { IProduct, IUser, ICate, IPropUser };
