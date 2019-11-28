import React, { useState } from "react";
import useForm from "react-hook-form";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import ThanksNote from "./ThanksNote";

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
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: 20
  }
}));

const Form = () => {
  const classes = useStyles();
  const { register, handleSubmit, setValue, getValues, errors, } = useForm();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    conPassword: "",
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCode: ""
  });
  const [index, setIndex] = useState(1);

  const nextPage = () => {
    setIndex(index + 1);
  };

  const prevPage = () => {
    setIndex(index - 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log()
    if (errors) {
      console.log("send");
      nextPage();
    } else {
      alert("Check your data", errors)
    }

    // alert(JSON.stringify(data));

  };

  const pullValues = () => {
    const values = getValues();
    setForm(values);
  };

  return (
    <Container maxWidth={"sm"}>
      <section className={classes.container}>
        <Header index={index} />
        <form id="signForm" onSubmit={onSubmit} className={classes.form}>
          {index === 1 && (
            <FirstStep
              nextPage={nextPage}
              setValue={setValue}
              register={register}
              form={form}
            />
          )}
          {index === 2 && (
            <SecondStep
              nextPage={nextPage}
              prevPage={prevPage}
              pullValues={pullValues}
              errors={errors}
              setValue={setValue}
              register={register}
              form={form}
            />
          )}
          {index === 3 && (
            <ThirdStep
              prevPage={prevPage}
              form={form}
            />
          )}
          { index ===4 && (
              <ThanksNote name={form.name}/>
          )}
        </form>
      </section>
    </Container>
  );
};

export default Form;
