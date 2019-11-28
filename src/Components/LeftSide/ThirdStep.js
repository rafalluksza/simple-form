import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { COLOR_SECONDARY, COLOR_TEXT } from "../../Constants/colors";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

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
  table: {
    width: "400px",
    height: "310px"
  }
}));

const ThirdStep = ({ form, prevPage }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputs}>
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
            <TableCell size="small" >Full name:</TableCell>
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
      <div className={classes.btnThirdPage}>
        <Button onClick={prevPage} variant="outlined">
          Previous Page
        </Button>
        <Button
          form="signForm"
          type="submit"
          variant="contained"
          className={classes.btnNextPage}
        >
          Send
        </Button>{" "}
      </div>
    </div>
  );
};

export default ThirdStep;
