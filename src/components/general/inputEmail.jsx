import "../../css/input.css";

const InputEmail = ({value,eOnChange}) => {
  return (
    <>
      <input type="email" value={value} onChange={eOnChange} placeholder="Email"/>
    </>
  );
};

export default InputEmail;
