import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function DoneModal({ open }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 700 }}>
        
      </Box>
    </Modal>
  );
}

export default DoneModal;
