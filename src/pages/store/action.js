// todos应用涉及的操作有新增待办事项、修改待办事项的状态（已完成/未完成）、筛选当前显示的待办事项列表。对应的完整action creator如下：
// action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
// 筛选待办事项列表的条件
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
// action creators
// 新增待办事项
// export function addTodo(text) {
//     return { type: ADD_TODO, text }
// }
// // 修改某个待办事项的状态，index是待办事项在todos数组中的位置索引
// export function toggleTodo(index) {
//     return { type: TOGGLE_TODO, index }
// }
// // 筛选当前显示的待办事项列表
// export function setVisibilityFilter(filter) {
//     return { type: SET_VISIBILITY_FILTER, filter }
// }