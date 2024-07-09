import React from "react";
import { Icon, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import navs from "../../data/navs"

function Sidenav () {
  const renderMenu = (navs) => {
    return navs.map((navItem) => {
      if (navItem.children) {
        return (
          <Menu.SubMenu
            key={navItem.name}
            title={
              <span>
                <Icon type={navItem.icon} />
                <span>{navItem.name}</span>
              </span>
            }
          >
            {renderMenu(navItem.children)}
          </Menu.SubMenu>
        )
      }

      return (
        <Menu.Item key={navItem.name}>
          <Link to={navItem.url}>
            <span>
              {navItem.icon && (
                <Icon type={navItem.icon} />
              )}
              <span>{navItem.name}</span>
            </span>
          </Link>
        </Menu.Item>
      )
    })
  }

  return (
    <Layout.Sider>
      <Menu
        mode="inline"
      >
        {renderMenu(navs)}
      </Menu>
    </Layout.Sider>
  )
}

export default Sidenav;
