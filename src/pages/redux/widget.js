// Actions，定义到types命名空间下
export const types = {
  LOAD: "widget/LOAD",
  CREATE: "widget/CREATE",
  UPDATE: "widget/UPDATE",
  REMOVE: "widget/REMOVE"
};
const initialState = {
  widget: null,
  isLoading: false
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOAD:
      //...
      break;
    case types.CREATE:
      //...
      break;
    case types.UPDATE:
      break;
    //...
    case types.REMOVE:
      break;
    //...
    default:
      return state;
  }
}
// Action Creators，定义到actions命名空间下
export const actions = {
  loadWidget: function() {
    return { type: types.LOAD };
  },
  createWidget: function(widget) {
    return { type: types.CREATE, widget };
  },
  updateWidget: function(widget) {
    return { type: types.UPDATE, widget };
  },
  removeWidget: function(widget) {
    return { type: types.REMOVE, widget };
  }
};
