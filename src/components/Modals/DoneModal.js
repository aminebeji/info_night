import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Score from "../Score";
import CommonButton from "../Buttons/CommonButton";
import StarIcon from "@mui/icons-material/Star";
import { useSelector, useDispatch } from "react-redux";
import { End, Regame } from "../../store/quiz/actions";

function DoneModal({ open, handleClose }) {
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
    height: 350,
  };
  var response = useSelector((state) => state.quizz.response);
  var Questions = useSelector((state) => state.quizz.Questions);
  var [score, setScore] = useState(0);
  useEffect(() => {
    var currentScore = 0;
    response.map((item) => {
      var question = Questions.find((q) => q.id == item.id);
      if (item.response == question.response) {
        currentScore++;
      }
    });
    console.log(currentScore / 6);
    setScore(currentScore);
  }, []);
  var dispatch = useDispatch();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 500, padding: "0 2em", textAlign: "center" }}>
        <h1>Félicitation</h1>
        <div className="score_icons">
          <Score currentScore={score / 6} />
        </div>{" "}
        <div className="scorecontainer">
          <b>Votre Score : {score} </b>
          <StarIcon sx={{ color: "yellow" }} value={score / 6} count={5} />
        </div>
        <div className="donebtn-container">
          <CommonButton
            content={true}
            title={"Rejouer"}
            onClick={() => {
              dispatch(Regame());
            }}
          />
          <CommonButton content={false} title={"Sortir"}   onClick={() => {
              dispatch(End());
            }} />
        </div>
      </Box>
    </Modal>
  );
}

export default DoneModal;
