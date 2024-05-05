import { useEffect, useState } from "react";
import Mensaje from "../components/general/mensaje";

const MensajeHandler = ({ mensaje, email, pass, AuthHandler,Att }) => {
  const [a, setA] = useState(false);
  useEffect(() => {
    if (AuthHandler.Login(email, pass).key !== 1) {
      setA(true);
    }
  }, [Att]);
  return <>{a ? <Mensaje mensaje={mensaje}></Mensaje> : null}</>;
};

export default MensajeHandler;
