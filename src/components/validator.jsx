import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 3,
};

export default function Validator(props){

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.oPen}
        onClose={props.handleSubmit}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.oPen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Welcome
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Glad to Have you!!!
            </Typography>
            <Button variant="contained" size="small" sx={{ mt: 2 }} onClick={props.handleSubmit}>
            back to Login
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


