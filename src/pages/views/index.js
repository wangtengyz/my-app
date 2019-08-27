import React from "react";
// import PostList from "./componts/props/PostList.js";
import CssModules from "./componts/CssModules";
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
        props练习
        {/* <PostList /> */}
        <CssModules />
      </div>
    );
  }
}
