const InputPass = ({value,eOnChange}) => {
    return (
      <>
        <input type="password" value={value} onChange={eOnChange} placeholder="Password"/>
      </>
    );
  };
  
  export default InputPass;
  