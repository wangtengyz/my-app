const defaultState = {
  inputValue: "Write Something",
  list: ["早上6点跑步", "早上7点吃饭", "早上8点上班", "早上9点上班"]
};
export default (state = defaultState, action) => {
  const { type } = action;
  // reducer只能接受state，不能改变state
  switch (type) {
    case "changeInput":
      let newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    case "addItem":
      let newState1 = JSON.parse(JSON.stringify(state));
      newState1.list.push(newState1.inputValue);
      newState1.inputValue = "";
      return newState1;
    case "deleteItem":
      let newState2 = JSON.parse(JSON.stringify(state));
      newState2.list.splice(action.index,1);
      return newState2;
    default:
      return state;
  }
};
