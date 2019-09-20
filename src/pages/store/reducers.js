import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'
import { combineReducers } from 'redux'

const initialState = {
    todos: [],
    visibilityFilter: VisibilityFilters.SHOW_ALL
}
// reducer
// function todoApp(state = initialState, action) {
//     return state
// }
// function todoApp(state = initialState, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return { ...state, visibilityFilter: action.filter }
//         // 新增待办事项
//         case ADD_TODO:
//             // 使用了ES6的扩展语法
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         // 修改待办事项的状态（已完成/未完成）
//         case TOGGLE_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo, index) => {
//                     if (index === action.index) {
//                         return { ...todo, completed: !todo.completed }
//                     }
//                     return todo
//                 })
//             }
//         default:
//             return state
//     }
// }
// 我们使用todoApp一个reducer处理所有的action，当应用变得
// 复杂时，这个reducer也会逐渐变复杂，这时，一般会拆分出多个
// reducer，每个reducer处理state中的部分状态。例如，这里可以拆分出
// todos和visibilityFilter两个reducer，分别处理state的todos和visibilityFilter
// 两个子状态：
// 处理todos的reducer
function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{
                text: action.text, completed:
                    false
            }])
        case 'TOGGLE_TODO':
            return state.map(
                (todo, index) =>
                    action.index === index
                        ? { ...todo, completed: !todo.completed }
                        : todo
            )
        default:
            return state
    }
}
// // 处理visibilityFilter的reducer
function visibilityFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
// // todoApp简化为：
// function todoApp(state = {}, action) {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter:
//             visibilityFilter(state.visibilityFilter, action)
//     }
// }
// Redux还提供了一个combineReducers函数，用于合并多个reducer。
// 使用combineReducers，todoApp可以改写如下
export const todoApp = combineReducers({
    todos,
    visibilityFilter
})
// 它等价于：
// function todoApp(state = {}, action) {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter:
//             visibilityFilter(state.visibilityFilter, action)
//     }
// }
// 还可以为combineReducers接收的参数对象指定和reducer的函数名不
// 同的key值：
const reducer = combineReducers({
    a: doSomethingWithA,
    b: processB,
    c: c
})
// 它等价于：
function reducer(state = {}, action) {
    return {
        a: doSomethingWithA(state.a, action),
        b: processB(state.b, action),
        c: c(state.c, action)
    }
}
    // 可见，combineReducers传递给每个reducer的state中的属性取决于它
    // 的参数对象的key值。