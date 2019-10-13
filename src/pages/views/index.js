import React from "react";
import ReduxLearning from "./componts/ReduxFirst/index";
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
        <ReduxLearning />
      </div>
    );
  }
}
