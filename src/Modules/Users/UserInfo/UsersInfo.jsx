import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { updateUserClient } from "../../../Slices/userSlice"
import swal from "sweetalert"
import { notification } from "antd"

import "./usersInfo.css"


const UsersInfo = ({ userInfo }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
     reset ({
      taiKhoan: userInfo?.taiKhoan,
      matKhau: userInfo?.matKhau,
      email: userInfo?.email,
      soDt: userInfo?.soDT,
      hoTen: userInfo?.hoTen,
      maLoaiNguoiDung: userInfo?.maLoaiNguoiDung,
    });
    // eslint-disable-next-line
  },[userInfo]);
    console.log(userInfo)
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maLoaiNguoiDung: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    try {
     await dispatch(updateUserClient(values)).unwrap();
      await swal("Cập Nhật Thành Công!", "You clicked the 'OK'!", "success");
    } catch (error) {
      notification.error({
        message: "Cập nhật thất bại",
        description: error,
      });
    }
  };
  return (
    <div className='user_update'>
      <h1 className='user_title'> Thông Tin Người Dùng</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">

            <div className="form-group mb-3">
              <label className="form-label">Tài Khoản</label>
              <input
                className="form-control"
                type="text"
                placeholder="Tài khoản"
                disabled
                {...register("taiKhoan", {
                  required: {
                    value: true,
                    message: "Tài khoản không được để trống",
                  },
                })}
              />
              {errors.taiKhoan && (
                <p className="text-danger">{errors.taiKhoan.message}</p>
              )}
            </div>


            <div className="form-group mb-3">
              <label className="form-label">Mật Khẩu</label>
              <input
                className="form-control"
                type="text"
                placeholder="Mật khẩu"
                {...register("matKhau", {
                  required: {
                    value: true,
                    message: "Mật khẩu không được để trống",
                  },
                  minLength: {
                    value: 5,
                    message: "Mật khẩu phải từ 5 đến 10 ký tự",
                  },
                  maxLength: {
                    value: 10,
                    message: "Mật khẩu phải từ 5 đến 10 ký tự",
                  },
                })}
              />
              {errors.matKhau && (
                <p className="text-danger">{errors.matKhau.message}</p>
              )}
            </div>


            <div className="form-group mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email không được để trống",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email không đúng định dạng",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">

            <div className="form-group mb-3">
              <label className="form-label">Số Điện Thoại</label>
              <input
                className="form-control"
                type="text"
                placeholder="Số điện thoại"
                {...register("soDt", {
                  required: {
                    value: true,
                    message: "Số điện thoại không được để trống",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Vui lòng nhập số",
                  },
                })}
              />
              {errors.soDt && (
                <p className="text-danger">{errors.soDt.message}</p>
              )}
            </div>


            <div className="form-group mb-3">
              <label className="form-label">Họ Tên</label>
              <input
                className="form-control"
                type="text"
                placeholder="Họ tên"
                {...register("hoTen", {
                  required: {
                    value: true,
                    message: "Họ tên không được để trống",
                  },
                })}
              />
              {errors.hoTen && (
                <p className="text-danger">{errors.hoTen.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="add-user-btn mt-3">
          <button className="btn btn-dark">Cập Nhật</button>
        </div>
      </form>
    </div>
  )
}

export default UsersInfo