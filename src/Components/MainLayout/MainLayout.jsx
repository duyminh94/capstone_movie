import React from 'react'
import Header from '../Header'
import { Layout } from "antd"

import style from "./mainlayout.module.css"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <Layout>
      <Layout.Header className={style.Header}>
        <Header />
      </Layout.Header>
      <Layout.Content className={style.Content}>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}

export default MainLayout