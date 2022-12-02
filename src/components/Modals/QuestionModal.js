import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Questions from "../Questions";
import StepperFC from "../StepperFC";
import { useSelector, useDispatch } from "react-redux";
import { setIsDone, setStage } from "../../store/quiz/actions";
import DoneModal from './DoneModal';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  height: 300,
};

function QuestionModal({ open, handleClose }) {
  const dispatch = useDispatch();
  var currentStage = useSelector((state) => state.quizz.currentStage);
  var question = useSelector((state) => state.quizz.Questions);
  var [currentQuestion, setcurrentQuestion] = React.useState(null);
  React.useEffect(() => {
    var ThiscurrentQuestion = question.filter((item) => {
      if (item.stageID == currentStage) {
        return item;
      }
    });
    console.log(ThiscurrentQuestion);
    setcurrentQuestion(ThiscurrentQuestion);
  }, [currentStage]);

  const [currentQuestionID, setCurrentQuesiton] = React.useState(0);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 700 }}>
        <StepperFC
          currentQuestion={currentQuestion}
          currentQuestionID={currentQuestionID}
        />
        {currentQuestion != null && (
          <div className="question_section">
            <Questions
              id={currentQuestion[currentQuestionID].id}
              question={currentQuestion[currentQuestionID].question}
              title={currentQuestion[currentQuestionID].question}
              type={currentQuestion[currentQuestionID].type}
              change={() => {
                if (currentQuestionID == 5 && currentStage == 5) {
                  dispatch(setIsDone(true));
                  return;
                }
                if (currentQuestionID == 5) {
                  dispatch(setStage(currentStage + 1));
                  setCurrentQuesiton(0);
                } else {
                  setCurrentQuesiton(currentQuestionID + 1);
                }
              }}
            />
          </div>
        )}
      </Box>
      </Modal>
  );
}

export default QuestionModal;
