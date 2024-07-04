import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Bengkel from "./pages/Bengkel";
import Olahraga from "./pages/Olahraga";

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/alat/bengkel" component={Bengkel} />
        <Route path="/alat/olahraga" component={Olahraga} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
