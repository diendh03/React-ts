import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../interface/Interface";
interface IPropProduct {
  onAdd: (product: IProduct) => void;
}
const AddProduct = (props: IPropProduct) => {
  console.log(props);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IProduct>();

  const onHandleSubmit: SubmitHandler<IProduct> = (data: IProduct) => {
    // console.log(data);

    props.onAdd(data);
    navigate("/admin/products");
    location.reload();
  };
  return (
    <div>
      <h1>Add Product</h1>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name")} placeholder="Product Name" />
        <input type="text" {...register("price")} />
        <input
          type="text"
          {...register("categoryId")}
          placeholder="CategoryID"
        />
        {/* <input type="text" {...register("des")} /> */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
