import React from "react";
import ReduxFirst from "./componts/ReduxFirst/index";
import CombineReducers from "./componts/CombineReducers/index";
import ReactRedux from "./componts/ReactRedux/index";
import "./index.less";
const classPrefix = "Views";

export default class Views extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className={`${classPrefix}`}>
        {/* <ReduxFirst /> */}
        <CombineReducers />
          {/* <ReactRedux /> */}
      </div>
    );
  }
}
