import Boton from "../components/general/boton";

const Dashboard = ({setLogin}) => {
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <p>Esta es la informacion oculta tras el inicio de sesion.</p>
      </div>
      <div>
        <Boton text={"Cerrar Sesion"} name={"botonSalir"} eOnClick={setLogin}/>
      </div>
    </>
  );
};

export default Dashboard;
