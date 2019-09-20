import React from "react";
import Lifecycle from "./componts/Lifecycle";
import './index.less'
const classPrefix = "Views";

export default class Views extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() { }

  render() {
    return (
      <div className={`${classPrefix}`}>
        <Lifecycle />
      </div>
    );
  }
}
