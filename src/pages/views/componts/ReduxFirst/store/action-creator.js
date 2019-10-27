// Action 创建函数 就是生成 action 的方法。“action” 和 “action 创建函数” 
// 这两个概念很容易混在一起，使用时最好注意区分。
// 在 Redux 中的 action 创建函数只是简单的返回一个 action:
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './action'
// 保存input动作
export const saveInput = payload => ({ type: CHANGE_INPUT, payload });
// 新增任务动作
export const addItem = payload => ({ type: ADD_ITEM, payload });
// 减少任务动作
export const deleteItem = payload => ({ type: DELETE_ITEM, payload });