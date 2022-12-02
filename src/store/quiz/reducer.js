import Types from "./Types";
const inistialState = {
  Questions: [
    { step:"FIRSTSTEP",id: 1, question: "", stageID: 1, type: "oui/non", response: "oui" },
    {
      step:"SECONDSTEP",
      id: 2,
      question: "question 1 ?",
      stageID: 2,
      type: "input",
      response: "response here !",
    },
    {
      step:"THIRDSTEP",
      id: 2,
      question: "question 2 ?",
      stageID: 3,
      type: "input",
      response: "response here !",
    },
    {
      step:"FORTHSTEP",
      id: 2,
      question: "question 2 ?",
      stageID: 3,
      type: "input",
      response: "response here !",
    },
    {
      step:"FIFTHSTEP",
      id: 2,
      question: "question 2 ?",
      stageID: 3,
      type: "input",
      response: "response here !",
    },
    {
      step:"SIXTHSTEP",
      id: 2,
      question: "question 2 ?",
      stageID: 3,
      type: "input",
      response: "response here !",
    },
  ],
  Stages: [
    { id: 1, name: "Stage 1", description: "" },
    { id: 2, name: "Stage 2", description: "" },
  ],
  currentStage: 0,
  stepone:true,
  steptwo:false,
  stepthree:false,
  forthstep:false,
  fifthstep:false,
  sixstep:false,
};

const Reducer = (state = inistialState, action) => {
  switch (action.type) {
    case Types.START_QUIZZ:
      return {
        ...state,
        currentStage: 1,
      };
    case Types.FIFTHSTEP:
      return {
        ...state,
        stepone:action.payload,
      };

    case Types.SECONDSTEP :
      return {
        ...state,
        steptwo:action.payload,
      }
    case Types.THIRDSTEP:
      return {
        ...state,
        stepthree:action.payload,
      }
    case Types.FORTHSTEP:
      return {
        ...state,
        forthstep:action.payload
      }
    case Types.FIFTHSTEP : 
    return {
      ...state,
      fifthstep:action.payload,
    }
    case Types.SIXTHSTEP:
      return {
        ...state,
        sixstep : action.payload
      }
    default:
      return state;
  }
};

export default Reducer;
