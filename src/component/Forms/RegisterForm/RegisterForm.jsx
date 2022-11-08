import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { authorization } from "../../../api/firebase-api";
import { Formik } from "formik";

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

const RegisterForm = () => {
  const [serverError, setServerError] = useState(null);

  const validation = (values) => {
    const errors = {};
    if (!values.nickname) {
      errors.nickname = "Required";
    }
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

  const handleSubmit = (name, email, password) => {
    authorization.registration(name, email, password, setServerError);
  };

  return (
    <FormWrapper>
      <FormTitle>Please register to continue.</FormTitle>
      <Formik
        initialValues={{
          nickname: "",
          email: "",
          password: "",
        }}
        validateOnBlur
        validate={(values) => validation(values)}
        onSubmit={({ nickname, email, password }) =>
          handleSubmit(nickname, email, password)
        }
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
                value={values.nickname}
                size="small"
                color="secondary"
                label="nickname"
                variant="outlined"
                name="nickname"
                onBlur={handleBlur}
              />
              {errors.nickname && touched.nickname && (
                <Error>{errors.nickname}*</Error>
              )}
            </TextFieldContainer>
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
              sign up
            </Button>
            {serverError !== null && <Error>{serverError}*</Error>}
          </FormContainer>
        )}
      </Formik>
      <Text>
        <span>If you already have an account, you can </span>
        <NavLink style={{ textDecoration: "underline" }} to="/login">
          sign in
        </NavLink>
      </Text>
    </FormWrapper>
  );
};

export default RegisterForm;
