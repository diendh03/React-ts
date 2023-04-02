import React, { useState } from "react";
import { IPropUser, IUser } from "../interface/Interface";

const SignInPage = (props: IPropUser) => {
  console.log(props);

  const [inputValue, setInputValue] = useState<IUser[]>([]);

  const onHandleChange = (e: any) => {
    const name = e.target.name; // Lấy ra name của input
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };
  console.log(inputValue);

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    props.onSignIn(inputValue);

    // kiểm tra thông tin đăng nhập và xử lý đăng nhập
  };
  const onHandleLogOut = (e: any) => {
    e.preventDefault();
    props.onLogOut();
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Tên đăng nhập:</label>
          <input type="text" name="email" onChange={onHandleChange} />
        </div>
        <div className="form-group">
          <label>Mật khẩu:</label>
          <input type="password" name="password" onChange={onHandleChange} />
        </div>

        <button type="submit">Đăng nhập</button>
      </form>
      <form action="" onSubmit={onHandleLogOut}>
        <button>Log Out</button>
      </form>
    </div>
  );
};

export default SignInPage;
