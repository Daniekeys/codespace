import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Api from "./Api";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
      [theme.breakpoints.down("sm")]: {
      alignItems: "flex-end",
    },
    justifyContent: "center",
  },
}));
const styles = {
  container:
    "w-full  lg:w-6/12 h-auto lg:h-full lg:p-6 mx-auto rounded-lg  flex md:items-center items-end",
};

export default function TransitionsModal({ open, handleClose }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.container}>
            <Api handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
