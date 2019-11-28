import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { RHFInput } from "react-hook-form-input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { COLOR_SECONDARY, COLOR_TEXT } from "../../Constants/colors";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

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
  btnFirstPage: {
    alignSelf: "flex-end",
    marginTop: 30,
    color: `rgba(${COLOR_TEXT},0.8)`,
    background: `rgba(${COLOR_SECONDARY},1)`,
    "&:hover": {
      background: `rgba(${COLOR_SECONDARY},0.8)`
    }
  }
}));

const FirstStep = ({ form, nextPage, handleChange, setValue, register }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputs}>
      <FormControl>
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
          />
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
              validate: value => value === form.password
            }}
          />
        </div>
      </FormControl>
      <Button
        className={classes.btnFirstPage}
        onClick={() => {
          nextPage();
        }}
        variant="contained"
      >
        Next Page
      </Button>
    </div>
  );
};

export default FirstStep;
