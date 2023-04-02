import { IProduct } from "../interface/Interface";
import instance from "./instance";
const getAllProduct = () => {
  return instance.get("/products");
};
const getProductId = (id: string | number) => {
  return instance.get("/products/" + id);
};
const deleteProduct = (id: string | number) => {
  return instance.delete("/products/" + id);
};
const addProduct = (product: IProduct) => {
  return instance.post("/products/add", product);
};
const updateProduct = (product: IProduct) => {
  return instance.patch("/products/update/" + product._id, product);
};
export {
  getAllProduct,
  getProductId,
  deleteProduct,
  addProduct,
  updateProduct,
};
