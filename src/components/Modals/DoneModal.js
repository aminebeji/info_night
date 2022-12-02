import  React, {useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Score from "../Score";
import CommonButton from "../Buttons/CommonButton";
import StarIcon from '@mui/icons-material/Star';
function DoneModal({open, handleClose}) {
  
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
 
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 700 }}>
        <h1>Félicitation</h1>
        <Score/>
          <div className="scorecontainer" >
          <b>Votre Score</b>
          <StarIcon sx={{color:"yellow"}} />
          </div>
        <div className="donebtn-container" >
          <CommonButton content={true} title={"Rejouer"} />
          <CommonButton content={false} title={"Sortir"} />

        </div>

      </Box>
    </Modal>
  );
}

export default DoneModal;
