import * as Yup from "yup";
export const signupSchema = Yup.object({
  name: Yup.string().required("Trường dữ liệu bắt buộc"),
  email: Yup.string()
    .required("Trường dữ liệu bắt buộc")
    .email("Email sai định dạng"),
  password: Yup.string()
    .required("Trường dữ liệu bắt buộc")
    .min(6, "Mật khẩu không được ít hơn 6 kí tự"),
  confirmPassword: Yup.string()
    .required("Trường dữ liệu bắt buộc")
    .oneOf([Yup.ref("password")], "Mật khẩu không khớp"),
});
