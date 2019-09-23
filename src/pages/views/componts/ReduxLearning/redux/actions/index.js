let nextTodoId = 0
// 新增
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

// 设置过滤
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

// 切换tab
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})