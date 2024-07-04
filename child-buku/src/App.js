import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Puisi from "./pages/Puisi";
import Novel from "./pages/Novel";

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/buku/puisi" component={Puisi} />
        <Route path="/buku/novel" component={Novel} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
