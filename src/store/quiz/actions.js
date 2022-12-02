import Types from "./Types";

export const StartQuizz = (data) => async (dispatch) => {
  dispatch({ type: Types.START_QUIZZ });
};

export const setStage = (data) => async (dispatch) => {
  dispatch({ type: Types.SET_STAGE, payload: data });
};
