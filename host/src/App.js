import React from "react";
import { Icon, Layout, Menu } from "antd";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

const Novel = () => <h1>Novel</h1>
const Puisi = () => <h1>Puisi</h1>

function App () {
  return (
    <BrowserRouter>
      <Layout style={{ height: '100vh' }}>
        <Header>
          <h1 style={{ color: "#fff" }}>Hello World</h1>
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['buku']}
              mode="inline"
            >
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
                <Link to="/novel">Novel</Link>
                </Menu.Item>
                <Menu.Item key="puisi">
                  <Link to="/puisi">Puisi</Link>
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.SubMenu
                key="alat"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>Alat</span>
                  </span>
                }
              >
                <Menu.Item key="olahraga">
                  <Link to="/olahraga">Olahraga</Link>
                </Menu.Item>
                <Menu.Item key="perkakas">
                  <Link to="/bengkel">Bengkel</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Content>
            <Switch>
              <Route
                path="/puisi"
                component={Puisi}
              />
              <Route
                path="/novel"
                component={Novel}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
