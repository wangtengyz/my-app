import { combineReducers } from 'redux'
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './action'
const defaultState = {
  inputValue: "Write Something",
  list: ["早上6点跑步"]
};

// export default function reducer (state = defaultState, action){
//   const { type,payload } = action;
//   // reducer只能接受state，不能改变state
//   switch (type) {
//     case CHANGE_INPUT:
//       return Object.assign({}, state, {
//         inputValue:payload
//       })
//     case ADD_ITEM:
//     case DELETE_ITEM:
//       return  Object.assign({}, state, {
//         list:[...payload]
//       })   
//     default:
//       return state;
//   }
// };
// 处理inputValue改变的reducer
function inputValue (state='Write Something',action){
  const { type,payload } = action;
   switch (type) {
     case CHANGE_INPUT:
       return payload
     default:
       return state;
   }
}
// 处理列表list改变的reducer
function list (state=["早上6点跑步"],action){
  const { type,payload } = action;
   switch (type) {
     case ADD_ITEM:
     case DELETE_ITEM:
       return [...payload]
     default:
       return state;
   }
}

export default function reducer (state = defaultState, action) {
  return {
    inputValue: inputValue(state.inputValue, action),
    list:list(state.list, action)
    }
  }

// 注意，每个拆分的reducer只接收它负责的state中的部分属性，而不
// 再是完整的state对象。todos接收state.todos，visibilityFilter接收
// state.visibilityFilter。这样，当应用较复杂时，就可以拆分出多个reducer保存到独立的文件中。
// 默认值也进行了拆分。
// Redux还提供了一个combineReducers函数，用于合并多个reducer。
// 使用combineReducers，reducer可以改写如下：
// export const reducer =  combineReducers({
//   inputValue,
//   list
//   })

// 还可以为combineReducers接收的参数对象指定和reducer的函数名不同的key值
// const reducer = combineReducers({
//   inputValue: doSomethingWithInput,
//   list: processlist
//   })

// 它等价于：
  // function reducer(state = {}, action) {
  // return {
  // inputValue: doSomethingWithInput(state.inputValue, action),
  // list: processlist(state.list, action),
  // }
  // }
  // 可见，combineReducers传递给每个reducer的state中的属性取决于它的参数对象的key值