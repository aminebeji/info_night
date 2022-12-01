import Types from "./Types"

export const StartQuizz = (data) => async (dispatch) => {
dispatch({type : Types.START_QUIZZ})
}