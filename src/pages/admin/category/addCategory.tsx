import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICate } from "../../../interface/Interface";
import { useNavigate } from "react-router-dom";
interface IPropCategory {
  onAdd: (category: ICate) => void;
}
const AddCategory = (props: IPropCategory) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICate>();
  const navigate = useNavigate();
  const onHandleSubmit: SubmitHandler<ICate> = (category: ICate) => {
    props.onAdd(category);
    navigate("/admin/categories");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Category Name
          </label>
          <input
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <button className="ml-4 align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded inline-block shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
