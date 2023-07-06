import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICate } from "../../../interface/Interface";
import { useNavigate, useParams } from "react-router-dom";
interface IPropCategory {
  category: ICate[];
  onUpdate: (category: ICate) => void;
}

const UpdateCategory = (props: IPropCategory) => {
  const { register, handleSubmit, reset } = useForm<ICate>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const currentCategory = props.category.find(
      (category) => category._id === id
    );
    reset(currentCategory);
  }, [props]);
  const onHandleSubmit = (category: ICate) => {
    props.onUpdate(category);
    navigate("/admin/categories");
  };
  return (
    <div>
      <h1>Update Category</h1>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name")} placeholder="Category Name" />

        {/* <input type="text" {...register("des")} /> */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default UpdateCategory;
