import React from "react";
// import PostList from "./componts/props/PostList.js";
import G6 from "./componts/G6";
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
        {/* <PostList /> */}
        <G6 />
      </div>
    );
  }
}
