import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPropUser, IUser } from "../interface/Interface";
const SignUpPage = (props: IPropUser) => {
  const [inputValue, setInputValue] = useState<IUser[]>([]);
  const navigate = useNavigate();
  const onHandleChange = (e: any) => {
    const name = e.target.name; // Lấy ra name của input
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };
  console.log(inputValue);
  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    props.onAddUser(inputValue);

    // kiểm tra thông tin đăng ký và xử lý đăng ký
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="from-group">
        <label>Tên:</label>
        <input type="text" name="name" onChange={onHandleChange} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" onChange={onHandleChange} />
      </div>
      <div className="form-group">
        <label>Mật khẩu:</label>
        <input type="password" name="password" onChange={onHandleChange} />
      </div>
      <div className="form-group">
        <label>Nhập lại Mật khẩu:</label>
        <input type="password" name="confirmPass" onChange={onHandleChange} />
      </div>

      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default SignUpPage;
