import React from "react"
import ReactDOM from "react-dom";
import App from "./App";

window.mounthttplocalhost4001 = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId),
  );
}

window.unmounthttplocalhost4001 = (containerId) => {
  return ReactDOM.unmountComponentAtNode(
    document.getElementById(containerId)
  );
}
