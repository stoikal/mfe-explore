import React from "react"
import ReactDOM from "react-dom";
import App from "./App";

window.mounthttplocalhost3002 = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId),
  );
}

window.unmounthttplocalhost3002 = (containerId) => {
  return ReactDOM.unmountComponentAtNode(
    document.getElementById(containerId)
  );
}
