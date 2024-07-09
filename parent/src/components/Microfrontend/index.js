import React, { Component } from "react";
import axios from "axios";

class Microfrontend extends Component {
  /**
   * @param {Object} props
   * @param {string} props.slug
   * @param {string} props.host
   */
  constructor (props) {
    super(props)
  }

  containerId = "mfe-container"

  componentDidMount () {
    const scriptId = `mfe-${this.props.slug}`;
    
    if (!document.getElementById(scriptId)) {
      axios.get(this.props.host + "/asset-manifest.json")
        .then((res) => {
          const manifest = res.data;
          const script = document.createElement("script");

          script.crossorigin = "anonymous";
          script.id = scriptId;
          script.crossOrigin = "";
          script.src = this.props.host + manifest.files["main.js"];
          script.onload = () => {
            this.renderMfe();
          }

          document.body.after(script);
        })
        .catch(() => {
          alert("error!")
        })
    } else {
      this.renderMfe();
    }
  }

  componentWillUnmount () {
    if (window[`unmount${this.props.slug}`]) {
      window[`unmount${this.props.slug}`](this.containerId)
    }
  }

  renderMfe = () => {
    window[`mount${this.props.slug}`](this.containerId);
  }


  render () {
    return (
      <div id={this.containerId}>
      </div>
    )
  }
}

export default Microfrontend;
