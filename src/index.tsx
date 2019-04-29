import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
// import './index.css'
import { Body } from "./components/Body";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (            <Body />
)
  }
}

render(<App />, document.getElementById('root'))