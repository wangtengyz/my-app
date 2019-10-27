import {createStore} from 'redux'
import reducer from './reducer'
// 用combineReducers函数时 解除注释
// import {reducer} from './reducer'
// 创建store 并将reducer作为参数传入
const store = createStore(reducer,
    // 使用redux—tool工具
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store