import React, { useState } from "react";

import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Header from "./Header";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  form: {
    // border: "1px solid black",
    width: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: 20
  },
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
  btnFirstPage: {
    alignSelf: "flex-end",
    marginTop: 30
  },
  btnSecondPage: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30
  },
  btnThirdPage: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    width: "100%"
  },
  table: {
    width: "400px"
  }
}));

const StyledTextField = styled(TextField)`
  .MuiInputBase-input {
    width: 300px;
  }
  label.focused {
    color: rgba(255, 146, 10, 1);
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: inherit;
    }
    &:hover fieldset {
      border-color: yellow;
    }
    &.Mui-focused fieldset {
      border-color: rgba(255, 146, 10, 1);
    }
  }
  .MuiFormLabel-root.Mui-focused {
    color: rgba(255, 146, 10, 1);
  }
`;

const Form = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    conPassword: "",
    cardName: "",
    cardNumber: "",
    cardDate: "",
    cardCode: ""
  });
  const [index, setIndex] = useState(3);

  const nextPage = () => {
    setIndex(index + 1);
  };

  const prevPage = () => {
    setIndex(index - 1);
  };

  const handleChange = event => {
    // setForm({ event.target.name : event.target.value });
  };

  const handleSubmit = () => {
    console.log("send");
  };

  return (
    <Container maxWidth={"sm"}>
      <section className={classes.container}>
        <Header index={index} />
        <form onSubmit={handleSubmit} className={classes.form}>
          {index === 1 && (
            <div className={classes.inputs}>
              <FormControl>
                <div className={classes.formItem}>
                  <StyledTextField
                    id="input-with-icon-grid"
                    variant="outlined"
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
                <div className={classes.formItem}>
                  <StyledTextField
                    id="input-with-icon-grid"
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                  />
                </div>
                <div className={classes.formItem}>
                  <StyledTextField
                    id="input-with-icon-grid"
                    variant="outlined"
                    label="Password"
                    value={form.password}
                  />
                </div>
                <div className={classes.formItem}>
                  <StyledTextField
                    id="input-with-icon-grid"
                    variant="outlined"
                    label="Confirm Password"
                    value={form.conPassword}
                  />
                </div>
              </FormControl>
              <Button
                className={classes.btnFirstPage}
                onClick={nextPage}
                variant="contained"
                primary
              >
                Next Page
              </Button>
            </div>
          )}
          {index === 2 && (
            <div>
              <div className={classes.inputs}>
                <div className={classes.formItem}>
                  <StyledTextField
                    variant="outlined"
                    id="input-with-icon-grid"
                    label="Name on card"
                    value={form.cardName}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.formItem}>
                  <StyledTextField
                    variant="outlined"
                    id="input-with-icon-grid"
                    label="Card number"
                    value={form.cardNumber}
                  />
                </div>
                <div className={classes.formItem}>
                  <StyledTextField
                    variant="outlined"
                    id="input-with-icon-grid"
                    label="Expiry date"
                    value={form.cardDate}
                  />
                </div>
                <div className={classes.formItem}>
                  <StyledTextField
                    variant="outlined"
                    id="input-with-icon-grid"
                    label="Security code"
                    value={form.cardCode}
                  />
                </div>
              </div>
              <div className={classes.btnSecondPage}>
                <Button onClick={prevPage} variant="contained">
                  Previous Page
                </Button>
                <Button onClick={nextPage} variant="contained" primary>
                  Next Page
                </Button>{" "}
              </div>
            </div>
          )}
          {index === 3 && (
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
                    <TableCell>Full name:</TableCell>
                    <TableCell>fdsfdsaadf</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Email:</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Name on card:</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Credit card number:</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Expiry date:</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Security code:</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className={classes.btnThirdPage}>
                <Button onClick={prevPage} variant="contained">
                  Previous Page
                </Button>
                <Button type="submit" variant="contained">
                  Send
                </Button>{" "}
              </div>
            </div>
          )}
        </form>
      </section>
    </Container>
  );
};

export default Form;
