import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu, Space } from "antd";
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../Slices/authSlice'
import { Twirl as Hamburger } from 'hamburger-react';
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi"
import "./Header.css"

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout());
        navigate("/")
    }

    const listMenu = 
        user?.maLoaiNguoiDung === "QuanTri"
            ? [
                {
                    label: (
                        <>
                            <span style={{ lineHeight: "25px", marginRight: "10px" }}>
                                <AiOutlineUser />
                            </span>
                            <Link
                                to="/user"
                                style={{ textDecoration: "none", fontWeight: "500" }}
                            >
                                Thông tin cá nhân
                            </Link>
                        </>
                    ),
                    key: "0",
                },
                {
                    label: (
                        <>
                            <span style={{ lineHeight: "25px", marginRight: "10px" }}>
                                <AiOutlineSetting />
                            </span>
                            <Link
                                style={{ textDecoration: "none", fontWeight: "500" }}
                                to="/admin"
                            >
                                Quản trị
                            </Link>
                        </>
                    ),
                    key: "1",
                },
                {
                    type: "divider",
                },
                {
                    label: (
                        <>
                            <span style={{ lineHeight: "25px", marginRight: "10px" }}>
                                <FiLogOut />
                            </span>
                            <a
                                style={{ textDecoration: "none", fontWeight: "500" }}
                                href="/"
                                onClick={handleLogout}
                            >
                                Đăng xuất
                            </a>
                        </>
                    ),
                    key: "3",
                },
            ]
            : [
                {
                    label: (
                        <>
                            <span style={{ lineHeight: "25px", marginRight: "10px" }}>
                                <AiOutlineUser />
                            </span>
                            <Link
                                to="/user"
                                style={{ textDecoration: "none", fontWeight: "500" }}
                            >
                                Thông tin cá nhân
                            </Link>
                        </>
                    ),
                    key: "0",
                },
                {
                    type: "divider",
                },
                {
                    label: (
                        <>
                            <span style={{ lineHeight: "25px", marginRight: "10px" }}>
                                <FiLogOut />
                            </span>
                            <a
                                style={{ textDecoration: "none", fontWeight: "500" }}
                                href="/"
                                onClick={handleLogout}
                            >
                                Đăng xuất
                            </a>
                        </>
                    ),
                    key: "3",
                },
            ]

    const menus = <Menu items={listMenu} />;

    // const menus = (
    //     <Menu items={
    //         user?.maLoaiNguoiDung === "QuanTri"
    //             ? [
    //                 {
    //                     label: (
    //                         <>
    //                             <span style={{ lineHeight: "25px", marginRight: "10px" }}>
    //                                 <AiOutlineUser />
    //                             </span>
    //                             <a style={{ fontWeight: "500" }} href="#">
    //                                 Thông tin cá nhân
    //                             </a>
    //                         </>
    //                     ),
    //                     key: "0",
    //                 },
    //                 {
    //                     label: (
    //                         <>
    //                             <span
    //                                 style={{
    //                                     lineHeight: "25px",
    //                                     marginRight: "10px",
    //                                     color: "#fff",
    //                                 }}
    //                             >
    //                                 <AiOutlineSetting />
    //                             </span>
    //                             <Link style={{ fontWeight: "500", color: "#fff" }} to="/admin">
    //                                 Quản trị
    //                             </Link>
    //                         </>
    //                     ),
    //                     key: "1",
    //                 },
    //                 {
    //                     type: "divider",
    //                 },
    //                 {
    //                     label: (
    //                         <>
    //                             <span
    //                                 style={{
    //                                     lineHeight: "25px",
    //                                     marginRight: "10px",
    //                                     color: "#fff",
    //                                 }}
    //                             >
    //                                 <FiLogOut />
    //                             </span>
    //                             <a
    //                                 style={{ fontWeight: "500", color: "#fff" }}
    //                                 href="#"
    //                                 onClick={handleLogout}
    //                             >
    //                                 Đăng xuất
    //                             </a>
    //                         </>
    //                     ),
    //                     key: "3",
    //                 },
    //             ]
    //             : [
    //                 {
    //                     label: (
    //                         <>
    //                             <span style={{ lineHeight: "25px", marginRight: "10px" }}>
    //                                 <AiOutlineUser />
    //                             </span>
    //                             <a style={{ fontWeight: "500" }} href="#">
    //                                 Thông tin cá nhân
    //                             </a>
    //                         </>
    //                     ),
    //                     key: "0",
    //                 },
    //                 {
    //                     type: "divider",
    //                 },
    //                 {
    //                     label: (
    //                         <>
    //                             <span style={{ lineHeight: "25px", marginRight: "10px" }}>
    //                                 <FiLogOut />
    //                             </span>
    //                             <a
    //                                 style={{ fontWeight: "500" }}
    //                                 href="#"
    //                                 onClick={handleLogout}
    //                             >
    //                                 Đăng xuất
    //                             </a>
    //                         </>
    //                     ),
    //                     key: "3",
    //                 },
    //             ]
    //     }
    //     />
    // )


    return (
        <>
            <div className="header">
                <img className="logo" to="/" style={{ width: "25%" }} src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="" />
                <div className="menu">
                    <a href="/">Trang Chủ</a>
                    <a href="#showing">Lịch Chiếu</a>
                    <a href="#cinemax">Cụm Rạp</a>
                    <a href="#footer">Liên Hệ</a>
                </div>

                {user ? (
                    <div className="logout">
                        <Avatar
                            style={{
                                backgroundColor: "#f53900",
                            }}
                        >
                            {user.taiKhoan.slice(0, 1).toUpperCase()}
                        </Avatar>
                        <p className="name">{user.taiKhoan}</p>
                        <Dropdown menu={menus} trigger={["click"]}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <DownOutlined style={{ color: "#999", fontSize: "18px" }} />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                ) : (
                    <div className="auth">
                        <div className="btn">
                            <Avatar icon={<UserOutlined />} />
                            <Link to="/login" className="signin">
                                Đăng Nhập
                            </Link>
                        </div>
                        <div className="btn">
                            <Avatar icon={<UserOutlined />} />
                            <Link to="/register" className="register">
                                Đăng Ký
                            </Link>
                        </div>
                    </div>
                )}

                <div className="menu-icon">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>

            <div
                style={{ display: isOpen ? "block" : "none" }}
                className="overlay-mobile"
                onClick={() => setOpen(false)}
            ></div>

            <div
                style={{ transform: isOpen ? "translateX(0)" : "translateX(-101%)" }}
                className="header-mobile"
            >
                <img className='logo-mobile' src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="" />

                {user ? (
                    <div className="user-mobile">
                        <div className="logout-mobile">
                            <Avatar
                                style={{
                                    backgroundColor: "#f56a00",
                                }}
                            >
                                {user.taiKhoan.slice(0, 1).toUpperCase()}
                            </Avatar>
                            <p className="name-mobile">{user.taiKhoan}</p>
                            <Dropdown menu={menus} trigger={["click"]}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <DownOutlined style={{ color: "#999", fontSize: "18px" }} />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                ) : (
                    <div className="auth-mobile">
                        <div className="btn-mobile">
                            <Avatar icon={<UserOutlined />} />
                            <Link to="/login" className="signin-mobile">
                                Đăng Nhập
                            </Link>
                        </div>
                        <div className="btn-mobile">
                            <Avatar icon={<UserOutlined />} />
                            <Link to="/register" className="register-mobile">
                                Đăng Ký
                            </Link>
                        </div>
                    </div>
                )}

                <div className="menu-mobile">
                    <Link to="/">Trang Chủ</Link>
                    <a href="#showing">Lịch Chiếu</a>
                    <a href="#cinema">Cụm Rạp</a>
                    <a href="#footer">Liên Hệ</a>
                </div>
            </div>
        </>
    )
}

export default Header