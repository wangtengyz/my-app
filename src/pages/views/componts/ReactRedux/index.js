import React, { Component } from "react";
import store from "./store";
import { saveInput, addItem, deleteItem } from "./store/action-creator";
import TodoListUI from "./componts/TodoListUI";
// import Hello from './index.module.less'
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 订阅Redux的状态
    store.subscribe(this.storeChange);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  changeInputValue = e => {
    store.dispatch(saveInput(e.target.value));
  };

  storeChange = () => {
    this.setState(store.getState());
  };

  clickBtn() {
    const { list, inputValue } = this.state;
    const newList = [...list];
    newList.push(inputValue);
    store.dispatch(addItem(newList));
  }

  deleteItem(index) {
    const { list } = this.state;
    const newList = [...list];
    newList.splice(index, 1);
    store.dispatch(deleteItem(newList));
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
      />
    );
  }
}
