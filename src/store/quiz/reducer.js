import Types from "./Types";
var questions = require("./../../data/Question.json");
var stages = require("./../../data/stages.json");

const inistialState = {
  Questions: questions,
  Stages: stages,
  doneStages: [],
  currentStage: 0,
  stepone: true,
  steptwo: false,
  stepthree: false,
  forthstep: false,
  fifthstep: false,
  sixstep: false,
  response: [],
  isDone: false,
  score: 0,
};

const Reducer = (state = inistialState, action) => {
  switch (action.type) {
    case Types.START_QUIZZ:
      return {
        ...state,
        currentStage: 1,
      };
    case Types.SET_STAGE: {
      return {
        ...state,
        currentStage: action.payload,
      };
    }
    case Types.FIFTHSTEP:
      return {
        ...state,
        stepone: action.payload,
      };

    case Types.SECONDSTEP:
      return {
        ...state,
        steptwo: action.payload,
      };
    case Types.THIRDSTEP:
      return {
        ...state,
        stepthree: action.payload,
      };
    case Types.FORTHSTEP:
      return {
        ...state,
        forthstep: action.payload,
      };
    case Types.FIFTHSTEP:
      return {
        ...state,
        fifthstep: action.payload,
      };
    case Types.SIXTHSTEP:
      return {
        ...state,
        sixstep: action.payload,
      };
    case Types.ADD_RESPONSE:
      var responses = state.response;
      console.log(responses);
      responses.push(action.payload);
      return {
        ...state,
        response: responses,
      };
    case Types.SET_IS_DONE:
      return {
        ...state,
        isDone: true,
      };
    default:
      return state;
  }
};

export default Reducer;
