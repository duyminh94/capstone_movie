import React from 'react'
import { Outlet, Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"

import "./auth.css"
const AuthLayout = () => {
    return (
        <div className='auth_layout'>
            <div className='auth_overlay'></div>
            <div className='auth_form'>
                <div className='back_home'>
                    <Link className='close' to="/">
                        <AiFillHome />
                    </Link>
                </div>
                <div className="auth_user">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout