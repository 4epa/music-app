import LoginForm from "../component/Forms/LoginForm/LoginForm";
import styled from "@emotion/styled";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "../component/Forms/RegisterForm/RegisterForm";

const AuthorizationWrapper = styled.div`
  min-height: 100vh;
  background-color: #fff;
`;

const AuthorizationHeader = styled.header`
  background-color: #000;
  padding: 30px;
  border-bottom: 1px solid #888;
  box-shadow: 1px 1px 15px #222;
`;

const AppName = styled.h1`
  color: #fff;
  font-size: 25px;
  font-weight: 300;
  cursor: pointer;

  & strong {
    font-weight: 700;
    color: #c62136;
  }
`;

const AuthorizationPage = () => {
  return (
    <AuthorizationWrapper>
      <AuthorizationHeader>
        <AppName>
          <strong>MP3</strong>.Storage
        </AppName>
      </AuthorizationHeader>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/playlist/:id" element={<Navigate to="/login" />} />
        <Route path="/artist/:id" element={<Navigate to="/login" />} />
      </Routes>
    </AuthorizationWrapper>
  );
};

export default AuthorizationPage;
