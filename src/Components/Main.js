import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import background from "../Images/cool-background.png";
import { COLOR_TEXT } from "../Constants/colors";

const useStyles = makeStyles(() => ({
  background: {
    backgroundImage: `url(${background})`,
    width: "100vw",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Hind Madurai",
    color: `rgba(${COLOR_TEXT},1)`,
    paddingTop: 20,
    paddingBottom: 20
  },
  container: {
    width: "88%",
    height: "80%",
    backgroundColor: "white",
    display: "flex"
  }
}));

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.background}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <LeftSide />
            </Grid>
            <Grid item xs={12} md={6}>
              <RightSide />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Main;
