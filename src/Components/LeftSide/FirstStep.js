import React from "react";
import { RHFInput } from "react-hook-form-input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { COLOR_SECONDARY, COLOR_TEXT } from "../../Constants/colors";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import WrapperForSteps from "./WrapperForSteps";
import SMButtons from "./SMButtons";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

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
  btnFirstPage: {
    alignSelf: "center",
    marginTop: 30,
    color: `rgba(${COLOR_TEXT},0.8)`,
    background: `rgba(${COLOR_SECONDARY},1)`,
    "&:hover": {
      background: `rgba(${COLOR_SECONDARY},0.8)`
    },
    "@media(max-width: 480px)": {
      alignSelf: "center"
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

const FirstStep = ({
  form,
  nextPage,
  handleChange,
  setValue,
  register,
  errors
}) => {
  const classes = useStyles();

  return (
    <WrapperForSteps>
      <div className={classes.inputs}>
        <div className={classes.formItem}>
          <RHFInput
            register={register}
            id="name"
            name="name"
            as={
              <StyledTextField
                variant="outlined"
                label="Full name"
                name="name"
                type="text"
              />
            }
            value={form.name}
            onChange={handleChange}
            setValue={setValue}
            rules={{
              required: true,
              minLength: 5
            }}
          />
          {errors.name && (
            <p className={classes.error}> Your name is required! </p>
          )}
        </div>
        <div className={classes.formItem}>
          <RHFInput
            register={register}
            as={
              <StyledTextField
                variant="outlined"
                label="Email"
                type="email"
                name="email"
              />
            }
            id="email"
            name="email"
            value={form.email}
            setValue={setValue}
            rules={{
              required: true,
              minLength: 5
            }}
            onChange={handleChange}
          />
          {errors.email && (
            <p className={classes.error}>
              {" "}
              Your email is less than 5 characters{" "}
            </p>
          )}
        </div>
        <div className={classes.formItem}>
          <RHFInput
            register={register}
            as={
              <StyledTextField
                variant="outlined"
                label="Password"
                type="password"
                name="password"
              />
            }
            id="password"
            name="password"
            setValue={setValue}
            value={form.password}
            rules={{ required: true }}
            onChange={handleChange}
          />
          {errors.password && (
            <p className={classes.error}> Your password is required </p>
          )}
        </div>
        <div className={classes.formItem}>
          <RHFInput
            register={register}
            as={
              <StyledTextField
                variant="outlined"
                label="Confirm Password"
                type="password"
                name="conPassword"
              />
            }
            id="conPassword"
            name="conPassword"
            value={form.conPassword}
            onChange={handleChange}
            setValue={setValue}
            rules={{
              required: true,
              validate: value => {
                // console.log(value, form.password);
                return value === form.password;
              }
            }}
          />
          {errors.conPassword && (
            <p className={classes.error}> Please confirm your password! </p>
          )}
        </div>
        <Button
          className={classes.btnFirstPage}
          onClick={() => {
            nextPage();
          }}
          variant="contained"
        >
          Next Page <NavigateNextIcon />
        </Button>
        <SMButtons />
      </div>
    </WrapperForSteps>
  );
};

export default FirstStep;
