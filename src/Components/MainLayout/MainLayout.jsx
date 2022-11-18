import React from 'react'
import Header from '../Header'
import { Layout } from "antd"

import  "./mainlayout.css"
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const MainLayout = () => {
  return (
    <Layout>
      <Layout.Header className="Header">
        <Header />
      </Layout.Header>
      <Layout.Content className="Content">
        <Outlet />
      </Layout.Content>
      <Layout.Content className="Footer">
        <Footer/>
      </Layout.Content>
    </Layout>
  )
}

export default MainLayout