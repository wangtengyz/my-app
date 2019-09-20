// store是Redux中的一个对象，也是action和reducer之间的桥梁。store
// 主要负责以下几个 工作：
// （1）保存应用状态。
// （2）通过方法getState()访问应用状态。
// （3）通过方法dispatch(action)发送更新状态的意图。
// （4）通过方法subscribe(listener)注册监听函数、监听应用状态的改
// 变。
// 一个Redux应用中只有一个store，store保存了唯一数据源。store通
// 过createStore()函数创建，创建时需要传递reducer作为参数，创建todos
// 应用的store的代码如下：
import { createStore } from 'redux'
import { todoApp } from './reducers'
let store = createStore(todoApp)

// store创建完成后，就可以通过getState()获取当前应用的状态state：
const state = store.getState()
// 当需要修改state时，通过store的dispatch方法发送action。例如，发
// 送一个新增待办事项的action：
// 定义action
function addTodo(text){
return {type: 'ADD_TODO', text}
}
// 发送action
store.dispatch(addTodo('Learn about actions'))
// 当todoApp这个reducer处理完成addTodo这个action时，应用的状态
// 会被更新，此时通过store.getState()可以得到最新的应用状态。为了能准
// 确知道应用状态更新的时间，需要向store注册一个监听函数：
let unsubscribe = store.subscribe(() =>
console.log(store.getState())
)
// 这样，每当应用状态更新时，最新的应用状态就会被打印出来。当
// 需要取消监听时，直接调用store.subscribe返回的函数即可：
unsubscribe()
// 下面再来总结一下Redux的数据流过程。
// （1）调用store.dispatch(action)。一个action是一个用于描述“发生了
// 什么”的对象。store.dispatch(action)可以在应用的任何地方调用，包括组
// 件、XHR 的回调，甚至在定时器中。
// （2）Redux的store调用reducer函数。store传递两个参数给reducer：
// 当前应用的状态和action。reducer必须是一个纯函数，它的唯一职责是
// 计算下一个应用的状态。
// （3）根reducer会把多个子reducer的返回结果组合成最终的应用状
// 态。根reducer的构建形式完全取决于用户。Redux提供了
// combineReducers，方便把多个拆分的子reducer组合到一起，但完全可以
// 不使用它。当使用combineReducers时，action会传递给每一个子reducer
// 处理，子reducer处理后的结果会合并成最终的应用状态。
// （4）Redux的store保存根reducer返回的完整应用状态。此时，应用
// 状态才完成更新。如果UI需要根据应用状态进行更新，那么这就是更新
// UI的时机。对于React应用而言，可以在这个时候调用组件的setState方
// 法，根据新的应用状态更新UI。