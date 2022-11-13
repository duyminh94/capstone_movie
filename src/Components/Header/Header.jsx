import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link to="/trangchu">
                        <img style={{ width: "30%" }} src="https://assets.glxplay.io/web/images/logoglx.svg" alt="" />
                    </Link>
                </div>

                <div className="menu">
                    <Link to="/trangchu">
                        Trang Chủ
                    </Link>
                    <Link>
                        Lịch Chiếu
                    </Link>
                    <Link>
                        Cụm Rạp
                    </Link>
                    <Link>
                        Liên Hệ
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header