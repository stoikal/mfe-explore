import React, { Component } from "react";
import axios from "axios";

class Microfrontend extends Component {
  containerId = "mfe-container"

  componentDidMount () {
    const scriptId = `mfe-${this.props.slug}`;
    
    if (document.getElementById(scriptId)) {
      // berarti <script> sudah ditambahkan, kita bisa memanggil renderMfe
      this.renderMfe();
    } else {
      axios.get(this.props.host + "/asset-manifest.json") // asset-manifest.json adalah file yg digenerate oleh react-scripts
      .then((res) => {
        const manifest = res.data;
        const script = document.createElement("script");

        script.id = scriptId;
        script.src = this.props.host + manifest.files["main.js"];
        script.onload = () => {
          this.renderMfe();
        }

        document.body.after(script);
      })
      .catch(() => {
        alert("error!")
      })
    }
  }

  componentWillUnmount () {
    if (window[`unmount${this.props.slug}`]) {
      window[`unmount${this.props.slug}`](this.containerId)
    }
  }

  renderMfe = () => {
    if (window[`mount${this.props.slug}`]) {
      window[`mount${this.props.slug}`](this.containerId);
    }
  }

  render () {
    return (
      <div id={this.containerId}>
        memuat...
      </div>
    )
  }
}

export default Microfrontend;
