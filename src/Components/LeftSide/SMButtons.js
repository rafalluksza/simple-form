import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  btns: {
    marginTop: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  google: {
    backgroundColor: "#4285F4",
    color: "#fff",
    textAlign: "center",
    fontSize: 14
  },
  facebook: {
    background: "#4267b2",
    borderRadius: "5px",
    color: "white",
    textAlign: "center",
    fontSize: 14,
    marginTop: 16
  },
  alert: {
    backgroundColor: "red"
  }
}));

const SMButtons = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.btns}>
      <Button className={classes.google} variant="contained" onClick={handleClick}>
        <SearchIcon style={{ marginRight: "24px" }} /> Sign up with Google
      </Button>
      <Button className={classes.facebook} variant="contained" onClick={handleClick}>
        <FacebookIcon style={{ marginRight: "24px" }} /> Continue with Facebook
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">This option is not available.</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
};

export default SMButtons;
