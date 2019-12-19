import React from "react";
import Form from "./Form";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#F9F4F5",
    height: "100%",
    width: "100%",
    minHeight: "790px",
    paddingBottom: "40px",
    "@media(max-width: 960px)": {
      minHeight: 800
    }
  }
}));

const LeftSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth={"sm"}>
        <Form />
      </Container>
    </div>
  );
};

export default LeftSide;
