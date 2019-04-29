import * as React from "react";

import { Header } from "./Header";
import { Content } from "./Content";
import { Icon, Row } from "antd";

type State = {
  temp: string;
};

export class Body extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      temp: "test 1 2 3"
    };
  }
  private handleOnchange = (data: string) => {
    this.setState({ temp: data });
  };
  render() {
    return (
      <Row
        style={{
          borderStyle: "solid",
          borderWidth: "5px",
          margin: "5px",
          padding: "20px"
        }}
      >
        <h1>NOW => this.state.temp : {this.state.temp}</h1>
        <Header temp={this.state.temp} />
        <Icon
          style={{ alignSelf: "center", fontSize: "32px" }}
          type="arrow-down"
        />
        <Content onChange={this.handleOnchange} temp={this.state.temp} />
      </Row>
    );
  }
}
