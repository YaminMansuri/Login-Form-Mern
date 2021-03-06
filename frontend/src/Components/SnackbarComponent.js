import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackbarComponent = (props) => {
  const { open, setOpen, status } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3500} onClose={handleClose}>
      <Alert onClose={handleClose} severity={status}>
        {props.children}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
