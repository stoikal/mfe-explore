import React from "react";
import { Icon, Layout, Menu } from "antd";
import { Link } from "react-router-dom";

function Sidenav () {
  return (
    <Layout.Sider>
      <Menu
        mode="inline"
      >
        <Menu.SubMenu
          key="alat"
          title={
            <span>
              <Icon type="appstore" />
              <span>Alat</span>
            </span>
          }
        >
          <Menu.Item key="perkakas">
            <Link to="/alat/bengkel">Bengkel</Link>
          </Menu.Item>
          <Menu.Item key="olahraga">
            <Link to="/alat/olahraga">Olahraga</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu
          key="buku"
          title={
            <span>
              <Icon type="appstore" />
              <span>Buku</span>
            </span>
          }
        >
          <Menu.Item key="novel">
          <Link to="/buku/novel">Novel</Link>
          </Menu.Item>
          <Menu.Item key="puisi">
            <Link to="/buku/puisi">Puisi</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  )
}

export default Sidenav;
