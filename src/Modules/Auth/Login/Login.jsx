import React from 'react'
import { Form, Input,  notification } from "antd"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom"
import swal from "sweetalert";
import { login } from "../../../Slices/authSlice"
import "./Login.css"
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isloading } = useSelector((state) => state.auth);
  const { control, handleSubmit } = useForm({
    defaultValues: { taiKhoan: "", matKhau: "" },
    mode: "onTouched",
  })

  const onSubmit = async (values) => {
    try {
      await dispatch(login(values)).unwrap();
      await swal("Đăng Nhập Thành Công!", "You clicked the 'OK'!", "success");
      navigate("/");
    } catch (error) {
      notification.open({
        message: "Đăng nhập thất bại",
        description: error,
      });
      
    }
    setTimeout(() => {
      if (user) {
        return <Navigate to="/" />;
      }
    }, 3000);
  }
  return (
    <div className='login'>
      <h1 className='login_title'>
        <img style={{ width: 100 }} src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="" />
      </h1>

      <Form onFinish={handleSubmit(onSubmit)}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}>
        <Controller
          name="taiKhoan"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Tài khoản Không Được Để Trống",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <Form.Item label="Tài Khoản"
              validateStatus={error ? "error" : ""}
              help={error?.message}>
              <Input type="text" {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="matKhau"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Vui lòng nhập mật khẩu",
            },
            minLength: {
              value: 5,
              message: "Mật khẩu phải từ 5 đến 10 ký tự",
            },
            maxLength: {
              value: 10,
              message: "Mật khẩu phải từ 5 đến 10 ký tự",
            },
          }}

          render={({ field, fieldState: { error } }) => (
            <Form.Item
              label="Mật Khẩu"
              validateStatus={error ? "error" : ""}
              help={error?.message}
            >
              <Input.Password type="password" {...field} />
            </Form.Item>
          )}
        />
        <Form.Item>
          <button
            className="login_button"
            type="submit"
            disabled={isloading}
          >
            Đăng Nhập
          </button>
          <div>
            <Link to="/register" type="primary">
              Bạn chưa có tài khoản? Đăng ký
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login