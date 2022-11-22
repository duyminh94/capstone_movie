import React from 'react'
import authAPI from '../../Services/authAPI'
import useRequest from "../../Hook/useRequest"
import cn from 'classnames'
import UsersInfo from './UserInfo/UsersInfo'
import UsersBook from './UserBook/UsersBook'
import "./Users.css"

const Users = () => {
    const { data : userInfo } = useRequest(() => authAPI.getUsersInfo())

    const ticketsNum = userInfo?.thongTinDatVe.reduce((total, item) => {
        return total + item.danhSachGhe.length
    }, 0)
    console.log(userInfo)
    const numBook = userInfo?.thongTinDatVe.length;
    return (
        <div className='users'>
            <div className='users-main'>
                <div className='users-info'>
                    <p className='users-photo'>
                        {userInfo?.taiKhoan.slice(0, 1).toUpperCase()}
                    </p>
                    <p className="users-name">{userInfo?.hoTen}</p>
                    <p className={cn("users-type text-primary", {
                        "text-danger": userInfo?.maLoaiNguoiDung === "QuanTri"
                    })}>
                        {userInfo?.loaiNguoiDung.tenLoai}
                    </p>
                    <div className="users-info-booking">
						<p>
							Số lần đặt vé:{" "}
							<strong className="text-success">{numBook}</strong>
						</p>
						<p>
							Số vé đã đặt:{" "}
							<strong className="text-success">{ticketsNum}</strong>
						</p>
					</div>
                </div>

                <div className='users-show'>
                    <div className='info-users'>
                    <UsersInfo userInfo={userInfo}/>
                    </div>

                    <div className='users-history'>
                    <UsersBook userInfo={userInfo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users