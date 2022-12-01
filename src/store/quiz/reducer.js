import Types from "./Types";
const inistialState = {
  Question: [],
  Stages: [],
  currentStage: 0,
};

const Reducer = (state = inistialState, action) => {
  switch (action.type) {
    case Types.START_QUIZZ:
      return {
        ...state,
        currentStage: 1,
      };
    default:
      return state;
  }
};

export default Reducer;
