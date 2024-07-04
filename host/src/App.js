import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidenav from "./components/App/Sidenav";
import './App.css';
import Microfrontend from "./components/Microfrontend";
import menuMicro from "./data/menuMicro";
import Cangkir from "./pages/Cangkir";

function createModulSlug(value) {
  return value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
}

function App () {
  return (
    <BrowserRouter>
      <Layout style={{ height: '100vh' }}>
        <Layout.Header>
          <h1 style={{ color: "#fff" }}>Perpustakaan</h1>
        </Layout.Header>

        <Layout>
          <Sidenav />

          <Layout.Content>
            <div style={{ padding: 24 }}>
              <Switch>
                {menuMicro.map(({ path, host }) => {
                  const props = {
                    path,
                    host,
                    slug: createModulSlug(host)
                  }

                  return (
                    <Route
                      key={path}
                      path={path}
                      render={() => <Microfrontend {...props} />}
                    />
                  )
                })}

                <Route
                  path="/cangkir"
                  component={Cangkir}
                />
              </Switch>
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
