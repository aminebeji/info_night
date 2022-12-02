import Types from "./Types";
var questions = require("./../../data/Question.json");
var stages = require("./../../data/stages.json");

const inistialState = {
  Questions: questions,
  Stages: stages,
  currentStage: 0,
  response: [],
  isDone: false,
  score: 0,
  doneStages : []
};

const Reducer = (state = inistialState, action) => {
  switch (action.type) {
    case Types.START_QUIZZ:
      return {
        ...state,
        currentStage: 1,
      };
    case Types.SET_STAGE: {
      var doneStages = state.doneStages
      doneStages.push(action.payload - 1)
      return {
        ...state,
        currentStage: action.payload,
      };
    }
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
      case Types.REGAME : 
      return {
        ...state,
        isDone : false,
        responses : [],
        currentStage : 1
      }
      case Types.END : 
      return {
        ...state,
        isDone : false,
        responses : [],
        currentStage : 0
      }
    default:
      return state;
  }
};

export default Reducer;
