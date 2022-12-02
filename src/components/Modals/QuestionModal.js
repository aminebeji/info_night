import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Questions from "../Questions";
import StepperFC from "../StepperFC";
import { useSelector, useDispatch } from "react-redux";

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
  var currentStage = useSelector((state) => state.quizz.currentStage);
  var question = useSelector((state) => state.quizz.Questions);
  var currentQuestion = question.filter((item) => {
    if (item.stageID == currentStage) {
      return item;
    }
  });
  console.log(currentQuestion)
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 700 }}>
        <StepperFC />
        <div className="question_section">
          {currentQuestion.map((item) => {
            return (
              <Questions key={item.id} question={item.question} title={item.question}  type={item.type}/>
            );
          })}
        </div>{" "}
      </Box>
    </Modal>
  );
}

export default QuestionModal;
