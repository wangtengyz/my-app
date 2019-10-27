import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "./store";
import {saveInput,addItem,deleteItem} from './store/action-creator'
// import Hello from './index.module.less'
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 订阅Redux的状态
    store.subscribe(this.storeChange);
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  changeInputValue = e => {
    // const action = {
    //   type: "changeInput",
    //   value: e.target.value
    // };
    // store.dispatch(action);
    store.dispatch(saveInput(e.target.value));
  };

  storeChange = () => {
    this.setState(store.getState());
  };

  clickBtn() {
    // const action = {type: 'addItem'}
    // store.dispatch(action)
    const {list,inputValue} = this.state
    const newList = [...list]
    newList.push(inputValue) 
    store.dispatch(addItem(newList))
  }

  deleteItem(index) {
    // const action = {type: 'deleteItem',index}
    // store.dispatch(action)
    const {list} = this.state
    const newList = [...list]
    newList.splice(index,1) 
    store.dispatch(deleteItem(newList))
  }

  render() {
    const { inputValue, list } = this.state;
    return (
      <div style={{ padding: "10px" }}>
        <div>
          <Input
            placeholder={inputValue}
            style={{ width: "250px", marginRight: "10px" }}
            onChange={this.changeInputValue}
            value={inputValue}
          ></Input>
          <Button type="primary" onClick={this.clickBtn}>增加</Button>
        </div>
        <div style={{ padding: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={list}
            renderItem={(item,index) => <List.Item 
              onClick={this.deleteItem.bind(this,index)}
              >{item}</List.Item>}
          ></List>
        </div>
      </div>
    );
  }
}
