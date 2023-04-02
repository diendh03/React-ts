// import { IProduct } from "../interface/Interface";
import { IUser } from "../interface/Interface";
import instance from "./instance";
const getAllUser = () => {
  return instance.get("/users");
};
const addUser = (user: IUser) => {
  return instance.post("/signup", user);
};
const signin = (user: IUser) => {
  return instance.post("/signin", user);
};

export { getAllUser, addUser, signin };
