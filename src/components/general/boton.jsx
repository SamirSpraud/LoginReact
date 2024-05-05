import "../../css/boton.css";

const Boton = ({text,eOnClick,name}) => {
  return (
    <>
     <button type="submit" className={name}onClick={eOnClick}>{text}</button>
    </>
  );
};

export default Boton;
