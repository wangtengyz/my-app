// Action 本质上是 JavaScript 普通对象。
// 我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。
// 多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。
// Input响应事件
export const CHANGE_INPUT = 'CHANGE_INPUT'
// 新增任务
export const ADD_ITEM = 'ADD_ITEM'
// 删除任务
export const DELETE_ITEM = 'DELETE_ITEM'
