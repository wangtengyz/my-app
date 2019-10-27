
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './action'
const defaultState = {
  inputValue: "Write Something",
  list: ["早上6点跑步", "早上7点吃饭", "早上8点上班", "早上9点上班"]
};

// Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，
// 记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
// reducer是一个纯函数，它接
// 收两个参数，当前的state和action，返回新的state。reducer函数签名如下：
// (previousState, action) => newState
export default function reducer (state = defaultState, action){
  const { type,payload } = action;
  // reducer只能接受state，不能改变state
  switch (type) {
    case CHANGE_INPUT:
      return Object.assign({}, state, {
        inputValue:payload
      })
    // case ADD_ITEM:
    //   let newState1 = JSON.parse(JSON.stringify(state));
    //   newState1.list.push(newState1.inputValue);
    //   newState11.inputValue = "";
    //   return newState;
    // case DELETE_ITEM:
    //   let newState2 = JSON.parse(JSON.stringify(state));
    //   newState2.list.splice(action.index,1);
    //   return newState2;
    case ADD_ITEM:
    case DELETE_ITEM:
      return  Object.assign({}, state, {
        list:[...payload]
      })   
    default:
      return state;
  }
};
