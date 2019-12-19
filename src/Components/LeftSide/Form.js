import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import useForm from "react-hook-form";

import { makeStyles } from "@material-ui/core";
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
    height: "100%",
    width: 322,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 20,
    position: "relative"
  }
}));

const Form = () => {
  const classes = useStyles();
  const { handleSubmit, errors, register, setValue } = useForm({
    mode: "onSubmit",
  });

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
    from: { opacity: 0, transform: "translate3d(50%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-25%,0,0)" }
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
                {item === 1 && (
                  <FirstStep
                    nextPage={nextPage}
                    form={form}
                    handleChange={handleChange}
                    register={register}
                    setValue={setValue}
                    errors={errors}
                  />
                )}
                {item === 2 && (
                  <SecondStep
                    nextPage={nextPage}
                    prevPage={prevPage}
                    handleChange={handleChange}
                    form={form}
                    register={register}
                    setValue={setValue}
                    errors={errors}
                  />
                )}
                {item === 3 && <ThirdStep prevPage={prevPage} form={form} errors={errors}/>}
                {item === 4 && <ThanksNote name={form.name} />}
              </animated.div>
            );
          })}
        </form>
    </section>
  );
};

export default Form;
