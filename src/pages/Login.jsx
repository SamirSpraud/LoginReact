import LoginForm from "../components/Auth/LoginForm";
import { useState } from "react";
import AuthHandler from "../utils/authHandler";
import Dashboard from "./Dashboard";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginAttempt, setLoginAttempt] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {
    const isLogin = AuthHandler.Login(email, pass);
    setIsLoggedIn(isLogin.success);

    setLoginAttempt(true);

    setError(AuthHandler.Login(email, pass).error);
    console.log("Prueba:" + error);
  };

  const setLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* <MensajeHandler
          email={email}
          pass={pass}
          mensaje={error}
          AuthHandler={AuthHandler}
          Att={loginAttempt}
        /> */}

      {isLoggedIn ? (
        <Dashboard setLogin={setLogout} />
      ) : (
        <LoginForm
          email={email}
          setEmail={setEmail}
          pass={pass}
          setPass={setPass}
          handleLogin={handleLogin}
          mensaje={error}
        />
      )}
    </>
  );
};

export default Login;
