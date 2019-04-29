import * as React from "react";
import { Input, Row } from 'antd';

type State = {
};
type Props = {
    onChange: (data:string) => void
    temp: string
}
export class Content extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  private handleChange = (e) => {
    this.props.onChange(e.target.value)
  }
  render() {
    return (
      <div>
        <Row style = {{borderStyle:"solid",borderWidth:"5px",padding: "10px"}}>
        <h1>Component 2</h1>
          input to change state of state.temp<br />
          <Input size="large" value={this.props.temp} onChange={this.handleChange}/>
          <br />
          </Row>
          <br />
      </div>
    );
  }
}
