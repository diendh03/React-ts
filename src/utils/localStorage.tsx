import { IUser } from "../interface/Interface";

export const authenticated = (user: IUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const isAuthenticate = () => {
  if (!localStorage.getItem("user")) return;
  return JSON.parse(localStorage.getItem("user") as string);
};
