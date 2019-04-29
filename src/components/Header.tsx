import * as React from "react";
import { Statistic, Row, Col, Button } from "antd";

type State = {};
type Props = {
  temp: string;
};
export class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row style = {{borderStyle:"solid",borderWidth:"5px",padding: "10px"}}>
          <h1>Component 1</h1>
         this.props.temp (props for show) : {this.props.temp}
        </Row>
      </div>
    );
  }
}
