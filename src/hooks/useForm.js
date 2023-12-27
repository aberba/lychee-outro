import { isEmpty } from "@app/functions";
import { useState, useEffect } from "react";

export default function useForm({
  callback = () => {},
  validate = () => ({}),
  defaultValues = {},
  defaultErrors = {},
}) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors((errors) => ({ ...errors, ...defaultErrors }));
    setValues((values) => ({ ...values, ...defaultValues }));
  }, []);

  function hasError(name) {
    return Object.entries(errors).find(
      ([key, value]) => key === name && !isEmpty(value)
    )
      ? true
      : false;
  }

  const hasErrors =
    Object.keys(errors).length > 0 &&
    Object.entries(errors).some(([key, value]) => value);

  function onChange(event) {
    // e.persist();
    setErrors({ ...errors, [event.target.name]: "" }); // reset error
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  // function onFocus(event) {
  //     console.warn("onFocus is deprecated")
  // }

  function onSubmit(event) {
    if (event) event.preventDefault();

    if (Object.keys(validate(values)).length === 0) {
      callback(values);
      setErrors({});
    } else {
      // NB: this is to make sure validate() evaluates
      // latest value of "values" object cus the async update
      // doesn't reflect in state fast enough
      setValues((vs) => {
        setErrors(validate(vs));
        return vs;
      });
    }
  }

  function resetValues() {
    setValues(defaultValues);
  }

  function resetErrors() {
    setErrors({});
  }

  function setAllValues(v) {
    const emptyErrors = Object.fromEntries(
      Object.keys(v).map((key) => [key, ""])
    );
    setValues((vals) => ({ ...vals, ...v }));
    setErrors({ ...errors, ...emptyErrors });
  }

  function setAllErrors(e) {
    setErrors((errs) => ({ ...errs, ...e }));
  }

  return {
    errors,
    values,
    hasError,
    hasErrors,
    //onFocus,
    onChange,
    onSubmit,
    resetValues,
    resetErrors,
    setValues: setAllValues,
    setErrors: setAllErrors,
  };
}
