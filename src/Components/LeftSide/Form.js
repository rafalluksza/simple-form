import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import useForm from "react-hook-form";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import ThanksNote from "./ThanksNote";
import WrapperForSteps from "./WrapperForSteps";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  form: {
    // border: "1px solid black",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 20,
    position: "relative"
  }
}));

const Form = () => {
  const classes = useStyles();
  const { handleSubmit, errors, register, setValue } = useForm();

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

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  const nextPage = () => {
    setIndex(index + 1);
  };

  const prevPage = () => {
    setIndex(index - 1);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    // alert(JSON.stringify(data));
    console.log(data);
    if (errors) {
      console.log("send");
      nextPage();
    } else {
      alert("Check your data", errors);
    }

    // alert(JSON.stringify(data));
  };

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container maxWidth={"sm"}>
      <section className={classes.container}>
        <Header index={index} />
        <form
          id="signForm"
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
        >
          {transitions.map(({ item, props, key }) => {
            return (
              <animated.div key={key} style={props}>
                {index === 1 && (
                  <WrapperForSteps>
                    <FirstStep
                      nextPage={nextPage}
                      form={form}
                      handleChange={handleChange}
                      register={register}
                      setValue={setValue}
                      errors={errors}
                    />
                  </WrapperForSteps>
                )}
                {index === 2 && (
                  <WrapperForSteps>
                    <SecondStep
                      nextPage={nextPage}
                      prevPage={prevPage}
                      handleChange={handleChange}
                      form={form}
                      register={register}
                      setValue={setValue}
                      errors={errors}
                    />
                  </WrapperForSteps>
                )}
                {index === 3 && <ThirdStep prevPage={prevPage} form={form} />}
                {index === 4 && <ThanksNote name={form.name} />}
              </animated.div>
            );
          })}
        </form>
      </section>
    </Container>
  );
};

export default Form;
