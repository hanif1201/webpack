//[]

let lastId = 0;

//create a reducer function
const reducer = (state = [], action) => {
  if (action.type === "bugAdded") {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === "bugRemoved") {
    // <-- added missing else
    return state.filter((bug) => bug.id !== action.payload.id);
    // add code to remove bug
  }

  return state;
}; // <-- added missing semicolon
export default reducer;
