import React from "react"
import ReactDOM from "react-dom";
import App from "./App";

window.mounthttplocalhost3001 = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId),
  );
}

window.unmounthttplocalhost3001 = (containerId) => {
  return ReactDOM.unmountComponentAtNode(
    document.getElementById(containerId)
  );
}
