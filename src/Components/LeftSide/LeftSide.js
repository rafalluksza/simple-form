import React from "react";
import Form from "./Form";
import Container from "@material-ui/core/Container";

const LeftSide = () => {
  return (
    <div
      style={{
        backgroundColor: "#F9F4F5",
        height: "100%",
        width: "100%",
        minHeight: "700px",
        paddingBottom: "40px"
      }}
    >
      <Container maxWidth={"sm"}>
        <Form />
      </Container>
    </div>
  );
};

export default LeftSide;
