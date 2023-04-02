import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../interface/Interface";
interface IPropProduct {
  products: IProduct[];

  onUpdate: (product: IProduct) => void;
}
const UpdateProduct = (props: IPropProduct) => {
  // console.log(props.products);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  // const [product, setProduct] = useState<IProduct[]>([]);
  const { register, handleSubmit, reset } = useForm<IProduct>();

  // console.log(props);
  useEffect(() => {
    const currentProduct = props.products.find((product) => product._id == id);
    reset(currentProduct);
  }, [props]);
  const onHandleSubmit = (data: IProduct) => {
    props.onUpdate(data);
    // console.log(id);
    navigate("/admin/products");
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name")} placeholder="Product Name" />
        <input type="text" {...register("price")} />
        <button type="submit">update product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
