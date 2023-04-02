import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICate } from "../../interface/Interface";
import { useNavigate } from "react-router-dom";
interface IPropCategory {
  category: ICate[];
  onAdd: (category: ICate) => void;
}
const AddCategory = (props: IPropCategory) => {
  const { register, handleSubmit } = useForm<ICate>();
  const navigate = useNavigate();
  const onHandleSubmit: SubmitHandler<ICate> = (category: ICate) => {
    props.onAdd(category);
    navigate("/admin/categories");
    location.reload();
  };
  return (
    <div>
      <h1>Add Category</h1>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name")} placeholder="Category Name" />

        {/* <input type="text" {...register("des")} /> */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddCategory;
