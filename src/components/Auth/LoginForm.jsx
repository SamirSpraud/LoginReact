import Box from "../general/box";
import "../../css/loginForm.css";
import InputEmail from "../general/inputEmail";
import InputPass from "../general/inputPass";
import Boton from "../general/boton";

const LoginForm = ({
  email,
  setEmail,
  pass,
  setPass,
  handleLogin,
  mensaje,
}) => {
  return (
    <>
      <div className="content">
        <div className="bg"></div>
        <Box>
          <div className="headerBox">
            <h2>Login to your account</h2>
            <hr />
          </div>
          <div className="bodyBox">
            <InputEmail
              value={email}
              eOnChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputPass
              value={pass}
              eOnChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <div className="footerBox">
            <Boton text={"LOGIN"} eOnClick={handleLogin} name={"boton"} />
            <h3>{mensaje}</h3>
          </div>
        </Box>
      </div>
    </>
  );
};

export default LoginForm;
