import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { COLOR_SECONDARY, COLOR_TEXT } from "../../Constants/colors";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import WrapperForSteps from "./WrapperForSteps";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const useStyles = makeStyles(() => ({
  inputs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  formItem: {
    // border: "1px solid black",
    marginTop: 10,
    marginBottom: 10
  },
  btnNextPage: {
    width: 130,
    color: `rgba(${COLOR_TEXT},0.8)`,
    background: `rgba(${COLOR_SECONDARY},1)`,
    "&:hover": {
      background: `rgba(${COLOR_SECONDARY},0.8)`
    }
  },
  btnThirdPage: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    width: "100%"
  },
  table: {},
  errors: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    border: "1px solid #bf1650",
    backgroundColor: "#bf1650",
    color: `#fff`,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5
  }
}));

const ThirdStep = ({ form, prevPage, errors }) => {
  console.log(errors, errors.length);
  const classes = useStyles();
  return (
    <WrapperForSteps>
      <Table className={classes.table} aria-label="summary table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              Summary
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell size="small">Full name:</TableCell>
            <TableCell size="small">{form.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell size="small">Email:</TableCell>
            <TableCell size="small">{form.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell size="small">Name on card:</TableCell>
            <TableCell size="small">{form.cardName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell size="small">Credit card number:</TableCell>
            <TableCell size="small">{form.cardNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell size="small">Expiry date:</TableCell>
            <TableCell size="small">
              {form.cardMonth}/{form.cardYear}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell size="small">Security code:</TableCell>
            <TableCell size="small">{form.cardCode}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {(errors.name ||
        errors.email ||
        errors.password ||
        errors.conPassword ||
        errors.cardName ||
        errors.cardNumber ||
        errors.cardMonth ||
        errors.cardYear ||
        errors.cardCode) && (
        <div className={classes.errors}> Please fill the form correctly! </div>
      )}
      <div className={classes.btnThirdPage}>
        <Button onClick={prevPage} variant="outlined">
          <NavigateBeforeIcon /> Previous Page
        </Button>
        <Button
          form="signForm"
          type="submit"
          variant="contained"
          className={classes.btnNextPage}
        >
          Send <NavigateNextIcon />
        </Button>{" "}
      </div>
    </WrapperForSteps>
  );
};

export default ThirdStep;
