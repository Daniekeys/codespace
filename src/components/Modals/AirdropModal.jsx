import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Airdrop from "./Airdrop";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-end !important",
    },
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "50%",
  },
}));
const styles = {
  container: "w-full  lg:w-5/12 h-full lg:p-6 mx-auto rounded-lg flex md:items-center items-end ",
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
            <Airdrop handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
