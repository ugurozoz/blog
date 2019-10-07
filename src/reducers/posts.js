//posts reducer

const postsReducerDefaultState = [];

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return [...state, action.post];
    default:
      return state;
  }
};
