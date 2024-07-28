import React from "react"
import ReactDOM from "react-dom";
import App from "./App";

window.mounthttplocalhost4002 = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId),
  );
}

window.unmounthttplocalhost4002 = (containerId) => {
  return ReactDOM.unmountComponentAtNode(
    document.getElementById(containerId)
  );
}
