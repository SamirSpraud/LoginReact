import "../../css/box.css"

const Mensaje = ({mensaje}) => {
    return (<>
    <div className="boxMessage">
        <h4>{mensaje}</h4>
    </div>
    </>);
}
 
export default Mensaje;