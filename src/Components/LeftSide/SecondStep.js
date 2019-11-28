import React from "react";
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
  selects: {
    display: "flex",
    width: "328px"
  },
  btnFirstPage: {
    alignSelf: "flex-end",
    marginTop: 30,
    color: `rgba(${COLOR_TEXT},0.8)`,
    background: `rgba(${COLOR_SECONDARY},1)`,
    "&:hover": {
      background: `rgba(${COLOR_SECONDARY},0.8)`
    }
  },
  btnNextPage: {
    color: `rgba(${COLOR_TEXT},0.8)`,
    background: `rgba(${COLOR_SECONDARY},1)`,
    "&:hover": {
      background: `rgba(${COLOR_SECONDARY},0.8)`
    }
  },
  btnSecondPage: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30
  }
}));


const SecondStep = ({
  form,
  register,
  setValue,
  nextPage,
  prevPage,
  pullValues,
  errors
}) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.inputs}>
        <div className={classes.formItem}>
          <RHFInput
            register={register}
            as={
              <StyledTextField
                variant="outlined"
                label="Name on card"
                type="text"
              />
            }
            id="cardName"
            name="cardName"
            value={form.cardName}
            setValue={setValue}
            rules={{ required: true }}
          />
        </div>
        <div className={classes.formItem}>
          <RHFInput
            register={register}
            as={
              <StyledTextField
                variant="outlined"
                label="Card number"
                type="number"
              />
            }
            id="cardNumber"
            name="cardNumber"
            value={form.cardNumber}
            setValue={setValue}
            rules={{
              required: true,
              pattern: /[0-9]{13,16}/
            }}
          />
        </div>
        <div className={classes.formItem}>
          <div className={classes.selects}>
            <RHFInput
              style={{ marginRight: "20px" }}
              register={register}
              as={
                <StyledTextField
                  variant="outlined"
                  label="Exp month"
                  type="number"
                />
              }
              variant="outlined"
              id="cardMonth"
              name="cardMonth"
              setValue={setValue}
              value={form.cardMonth}
              rules={{ required: true, min: 1, max: 12 }}
            />
            <RHFInput
              register={register}
              as={
                <StyledTextField
                  variant="outlined"
                  label="Exp year"
                  type="number"
                />
              }
              variant="outlined"
              id="cardYear"
              name="cardYear"
              setValue={setValue}
              value={form.cardYear}
              rules={{
                required: true,
                min: 2019,
                max: 2025,
                minLength: 4,
                maxLength: 4
              }}
            />
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
              />
            }
            id="cardCode"
            name="cardCode"
            setValue={setValue}
            value={form.cardCode}
            rules={{ required: true, maxLength: 3, minLength: 3 }}
          />
          {errors.cardCode && <div> Only 3 digits! </div>}
        </div>
      </div>
      <div className={classes.btnSecondPage}>
        <Button onClick={prevPage} variant="outlined">
          Previous Page
        </Button>
        <Button
          onClick={() => {
            nextPage();
            pullValues();
          }}
          variant="contained"
          className={classes.btnNextPage}
        >
          Next Page
        </Button>{" "}
      </div>
    </div>
  );
};

export default SecondStep;
