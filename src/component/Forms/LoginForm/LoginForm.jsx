import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { authorization } from "../../../api/firebase-api";
import { Formik } from "formik";
import { useState } from "react";

const FormContainer = styled.div`
  display: grid;
  padding: 20px 20px 40px 20px;
  gap: 35px;
  max-width: 500px;
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  padding: 100px 0px;
`;

const FormTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  padding: 0px 20px 20px 40px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 0.75rem;
`;

const TextFieldContainer = styled.div`
  display: grid;
  gap: 15px;
`;

const Error = styled.p`
  color: red;
  font-size: 0.75rem;
  font-weight: 700;
`;

const LoginForm = () => {
  const [serverError, setServerError] = useState(null);

  const validation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const handleSubmit = (email, password) => {
    authorization.login(email, password, setServerError);
  };

  return (
    <FormWrapper>
      <FormTitle>Sign in to MP3.Storage to continue.</FormTitle>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        validate={(values) => validation(values)}
        onSubmit={({ email, password }) => handleSubmit(email, password)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <FormContainer>
            <TextFieldContainer>
              <TextField
                onChange={handleChange}
                value={values.email}
                size="small"
                color="secondary"
                label="email"
                variant="outlined"
                name="email"
                onBlur={handleBlur}
              />
              {errors.email && touched.email && <Error>{errors.email}*</Error>}
            </TextFieldContainer>
            <TextFieldContainer>
              <TextField
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                label="password"
                type="password"
                name="password"
                autoComplete="current-password"
                sx={{ zIndex: "20" }}
                size="small"
                color="secondary"
                variant="outlined"
              />
              {errors.password && touched.password && (
                <Error>{errors.password}*</Error>
              )}
            </TextFieldContainer>
            <Button
              sx={{
                backgroundColor: "#c62136",
                ":hover": {
                  backgroundColor: "#f9455d",
                },
              }}
              disabled={!isValid && !dirty}
              variant="contained"
              onClick={handleSubmit}
              type="submit"
            >
              sign in
            </Button>
            {serverError !== null && <Error>{serverError}*</Error>}
          </FormContainer>
        )}
      </Formik>
      <Text>
        <span>If you don't have an account, you can </span>
        <NavLink style={{ textDecoration: "underline" }} to="/register">
          sign up
        </NavLink>
      </Text>
    </FormWrapper>
  );
};

export default LoginForm;
