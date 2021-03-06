import React from "react";
import { RHFInput } from "react-hook-form-input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { COLOR_SECONDARY, COLOR_TEXT } from "../../Constants/colors";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import WrapperForSteps from "./WrapperForSteps";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const StyledTextField = styled(TextField)`
  .MuiInputBase-input {
    width: 300px;
  }
  @media (max-width: 480px) {
    width: 195px;
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

const useStyles = makeStyles(() => ({
  inputs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%"
  },
  formItem: {
    // border: "1px solid black",
    marginTop: 10,
    marginBottom: 10
  },
  selects: {
    display: "flex",
    width: "328px",
    "@media(max-width: 480px)": {
      width: "195px",
    }
  },
  btnNextPage: {
    color: `rgba(${COLOR_TEXT},0.8)`,
    background: `rgba(${COLOR_SECONDARY},1)`,
    "&:hover": {
      background: `rgba(${COLOR_SECONDARY},0.8)`
    },
    "@media(max-width: 480px)": {
      marginTop: 10
    }
  },
  btnSecondPage: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    "@media(max-width: 480px)": {
      flexDirection: "column",
      marginTop: 0
    }
  },
  error: {
    margin: 0,
    color: "#bf1650",
    "&:before": {
      display: "inline",
      content: "'⚠ '"
    }
  }
}));

const SecondStep = ({
  form,
  nextPage,
  prevPage,
  handleChange,
  register,
  setValue,
  errors
}) => {
  const classes = useStyles();

  return (
    <WrapperForSteps>
      <div className={classes.inputs}>
        <div className={classes.formItem}>
          <RHFInput
            register={register}
            as={
              <StyledTextField
                variant="outlined"
                label="Name on card"
                type="text"
                name="cardName"
              />
            }
            id="cardName"
            name="cardName"
            value={form.cardName}
            onChange={handleChange}
            rules={{ required: true }}
            setValue={setValue}
          />
          {errors.cardName && (
            <p className={classes.error}> Card name is required! </p>
          )}
        </div>
        <div className={classes.formItem}>
          <RHFInput
            register={register}
            as={
              <StyledTextField
                variant="outlined"
                label="Card number"
                type="number"
                name="cardNumber"
              />
            }
            id="cardNumber"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            setValue={setValue}
            rules={{
              required: true,
              pattern: /[0-9]{13,16}/
            }}
          />
          {errors.cardNumber && (
            <p className={classes.error}> Card number is required! </p>
          )}
        </div>
        <div className={classes.formItem}>
          <div className={classes.selects}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <RHFInput
                  style={{ marginRight: "20px", width: "100%" }}
                  register={register}
                  as={
                    <StyledTextField
                      variant="outlined"
                      label="Exp month"
                      type="number"
                      name="cardMonth"
                    />
                  }
                  variant="outlined"
                  id="cardMonth"
                  name="cardMonth"
                  setValue={setValue}
                  onChange={handleChange}
                  value={form.cardMonth}
                  rules={{ required: true, min: 1, max: 12 }}
                />
                {errors.cardMonth && (
                  <p className={classes.error}>
                    {" "}
                    Card expiration month is required!{" "}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <RHFInput
                  register={register}
                  as={
                    <StyledTextField
                      variant="outlined"
                      label="Exp year"
                      type="number"
                      name="cardYear"
                    />
                  }
                  variant="outlined"
                  id="cardYear"
                  name="cardYear"
                  onChange={handleChange}
                  value={form.cardYear}
                  rules={{
                    required: true,
                    min: 2019,
                    max: 2025,
                    minLength: 4,
                    maxLength: 4
                  }}
                  setValue={setValue}
                  style={{ width: "100%" }}
                />

                {errors.cardYear && (
                  <p className={classes.error}>
                    {" "}
                    Card expiration year is required!{" "}
                  </p>
                )}
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.formItem}>
          <RHFInput
            register={register}
            as={
              <StyledTextField
                variant="outlined"
                label="Security code"
                type="number"
                name="cardCode"
              />
            }
            id="cardCode"
            name="cardCode"
            value={form.cardCode}
            onChange={handleChange}
            rules={{ required: true, maxLength: 3, minLength: 3 }}
            setValue={setValue}
          />
          {errors.cardCode && (
            <p className={classes.error}> Card code is required! </p>
          )}
        </div>
      </div>
      <div className={classes.btnSecondPage}>
        <Button onClick={prevPage} variant="outlined">
          <NavigateBeforeIcon/> Previous Page
        </Button>
        <Button
          onClick={() => {
            nextPage();
          }}
          variant="contained"
          className={classes.btnNextPage}
        >
          Next Page <NavigateNextIcon />
        </Button>{" "}
      </div>
    </WrapperForSteps>
  );
};

export default SecondStep;
