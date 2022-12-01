import React from "react";
import { useSelector } from "react-redux";
const StepperFC = () => {
  const doneFirststep =useSelector(state=>state.quizz.stepone);
  const doneSecondStep=useSelector(state=>state.quizz.steptwo);
  const doneThirdStep = useSelector(state=>state.quizz.stepthree);
  const doneForthStep=useSelector(state=>state.quizz.forthstep);
  const doneFifthStep = useSelector(state=>state.quizz.fifthstep);
  const doneSixthStep = useSelector(state=>state.quizz.sixstep);
  return (
    <div>
      <div className={ doneFirststep ? "firstSDone" : "firstStep"} ></div>
      <div className={ doneSecondStep ? "secondSDone" : "secondStep"} ></div>
      <div className={ doneThirdStep ?"thirdSDone" :"thirdStep"}  ></div>
      <div className={ doneForthStep ? "forthSDone" : "forthS"} ></div >
      <div className={ doneFifthStep ? "fifthSDone" : "fifthS"} ></div>
      <div className={ doneSixthStep ? "sixthSDone" : "sixthS"}></div>

    </div>
  )
}

export default StepperFC;