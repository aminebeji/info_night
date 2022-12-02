import React from "react";
import "./../styles/quizz.css";
import { ArcherContainer, ArcherElement } from "react-archer";
import { useSelector, useDispatch } from "react-redux";
import { setStage } from "../store/quiz/actions";

import Step2 from "./../assets/steps/non_active/Step2.svg";
import Step3 from "./../assets/steps/non_active/Step3.svg";
import Step4 from "./../assets/steps/non_active/Step4.svg";
import Step5 from "./../assets/steps/non_active/Step5.svg";

import Step1Active from "./../assets/steps/active/Step1.svg";
import Step2Active from "./../assets/steps/active/Step2.svg";
import Step3Active from "./../assets/steps/active/Step3.svg";
import Step4Active from "./../assets/steps/active/Step4.svg";
import Step5Active from "./../assets/steps/active/Step5.svg";

import QuestionModal from "../components/Modals/QuestionModal";
import DoneModal from "../components/Modals/DoneModal";

const Start = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  textAlign: "right",
};
const End = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
};

function Quizz() {
  var dispatch = useDispatch();
  var doneStages = useSelector((state) => state.quizz.doneStages);
  var isDone= useSelector(state=> state.quizz.isDone)
  var Stages = useSelector((state) => state.quizz.Stages);
  var currentStage = useSelector((state) => state.quizz.currentStage);
  var IsActive = (id) => {
    return doneStages.includes(id - 1);
  };
  var OpenStage = (id) => {
    dispatch(setStage(id));
  };
  return (
    <div
      style={{ position: "relative", overflowY: "hidden", overflowX: "hidden" }}
    >
      <img className="top_cover" src={require("./../assets/steps/top.png")} style={{ width: "750px" }} />
      <div className="quizz_container">
        <ArcherContainer
          endMarker={false}
          startMarker={false}
          strokeColor="#ff989c"
        >
          <div className="start" style={Start}>
            <ArcherElement
              id="stage1"
              endMarker={false}
              startMarker={false}
              relations={[
                {
                  targetId: "stage2",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                },
              ]}
            >
              <div className="step_container">
                <img
                  onClick={() => {
                    OpenStage(1);
                  }}
                  className="step_image active"
                  src={Step1Active}
                />
              </div>
            </ArcherElement>
            <div className="texts">
              <h1 className="Level"> {Stages[0].name} </h1>
              <p>{Stages[0].description}</p>
            </div>
          </div>
          <div className="end" style={End}>
            <div className="texts">
              <h1 className="Level"> {Stages[1].name} </h1>
              <p>{Stages[1].description}</p>
            </div>
            <ArcherElement
              id="stage2"
              endMarker={false}
              startMarker={false}
              relations={[
                {
                  targetId: "stage3",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                },
              ]}
            >
              <div className="step_container">
                <img
                  src={IsActive(2) ? Step2Active : Step2}
                  className={
                    IsActive(2) ? "step_image active" : "step_image desactive"
                  }
                />
              </div>
            </ArcherElement>
          </div>
          <div className="start" style={Start}>
            <ArcherElement
              id="stage3"
              endMarker={false}
              startMarker={false}
              relations={[
                {
                  targetId: "stage4",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                },
              ]}
            >
              <div className="step_container">
                <img
                  src={IsActive(3) ? Step3Active : Step3}
                  className={
                    IsActive(3) ? "step_image active" : "step_image desactive"
                  }
                />
              </div>
            </ArcherElement>
            <div className="texts">
              <h1 className="Level"> {Stages[2].name} </h1>
              <p>{Stages[2].description}</p>
            </div>
          </div>
          <div className="end" style={End}>
            <div className="texts">
              <h1 className="Level"> {Stages[3].name} </h1>
              <p>{Stages[3].description}</p>
            </div>
            <ArcherElement
              id="stage4"
              endMarker={false}
              startMarker={false}
              relations={[
                {
                  targetId: "stage5",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                },
              ]}
            >
              <div className="step_container">
                <img
                  src={IsActive(4) ? Step4Active : Step4}
                  className={
                    IsActive(4) ? "step_image active" : "step_image desactive"
                  }
                />
              </div>
            </ArcherElement>
          </div>
          <div className="start" style={Start}>
            <ArcherElement id="stage5" endMarker={false} startMarker={false}>
              <div className="step_container">
                <img
                  src={IsActive(5) ? Step5Active : Step5}
                  className={
                    IsActive(5) ? "step_image active" : "step_image desactive"
                  }
                />
              </div>
            </ArcherElement>
            <div className="texts">
              <h1 className="Level"> {Stages[4].name} </h1>
              <p>{Stages[4].description}</p>
            </div>
          </div>
        </ArcherContainer>
      </div>
      <img className="down_cover" src={require("./../assets/steps/down.png")} style={{ width: "750px" }} />
      {currentStage != 0 && !isDone && (
        <QuestionModal open={currentStage != 0} handleClose={() => {}} />
      )}{" "}
      { isDone && <DoneModal open={isDone} />}
    </div>
  );
}

export default Quizz;
