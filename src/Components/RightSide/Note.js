import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

import { FormatQuote } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "65%",
    height: "30%"
    // border: "1px solid white"
  },
  text: {
    // border: "1px solid white",
    height: "70%",
    color: "#f9f9f9",
    position: "relative",
    lineHeight: "24px"
  },
  quoteIcon: {
    position: "absolute",
    left: -50,
    top: -15
  },
  quote: { fontSize: 16 },

  radioGroup: {
    flexDirection: "row"
  },
  signature: {
    position: "absolute",
    bottom: 0,
    fontSize: 20
  },
  line: {
    borderTop: "3px solid rgba(255,146,10,1)",
    width: 100,
    height: 8,
    display: "inline-block"
  },
  boss: {}
}));

const Note = () => {
  const classes = useStyles();
  const [index, setIndex] = useState("1");

  const handleChange = event => {
    setIndex(event.target.value);
  };

  return (
    <section className={classes.container}>
      <div className={classes.text}>
        <div className={classes.quoteIcon}>
          <FormatQuote style={{ fontSize: "50px" }} />
        </div>
        {index === "1" && (
          <div className={classes.quote}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            orci metus. Morbi lacinia, neque et efficitur dignissim, ligula
            nisl.
            <div className={classes.signature}>
              <div className={classes.line} />{" "}
              <strong className={classes.boss}>Jive Sobs </strong>
            </div>
          </div>
        )}
        {index === "2" && (
          <div className={classes.quote}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum erat a diam condimentum, sed ornare lectus lobortis.
            Integer tempus libero est, eget aliquet massa.
            <div className={classes.signature}>
              <div className={classes.line} />{" "}
              <strong className={classes.boss}>Beff Jezzos</strong>
            </div>
          </div>
        )}
        {index === "3" && (
          <div className={classes.quote}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
            placerat felis. Suspendisse aliquam hendrerit eros. Sed aliquam
            metus tortor, eu tristique mauris posuere nec. Nulla mollis
            fermentum fringilla.
            <div className={classes.signature}>
              <div className={classes.line} />{" "}
              <strong className={classes.boss}>Gill Bates </strong>
            </div>
          </div>
        )}
      </div>
      <div>
        <FormControl>
          <RadioGroup
            value={index}
            onChange={handleChange}
            className={classes.radioGroup}
          >
            <FormControlLabel value="1" control={<Radio />} label="" />
            <FormControlLabel value="2" control={<Radio />} label="" />
            <FormControlLabel value="3" control={<Radio />} label="" />{" "}
          </RadioGroup>
        </FormControl>
      </div>
    </section>
  );
};

export default Note;
