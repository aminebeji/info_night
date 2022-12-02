import React from 'react'
import InfoSection from '../sections/InfoSection'
import StepperFC from "../components/StepperFC";
import Questions from '../components/Questions';
function Home() {
  return (
    <div className="Home_fc" >
      <div className="stepperC" >
        <StepperFC/>

      </div>
      <div className="question_section" >
         <Questions   /> 

      </div>
         <InfoSection>
        </InfoSection> 
      </div>
    )
}

export default Home