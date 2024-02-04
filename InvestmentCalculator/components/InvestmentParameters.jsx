import { useState } from "react";



function InvestmentParameters({ handleChange, parameterHeaders }) {

  const [inputs, setInputs] = useState(
        Object.fromEntries(parameterHeaders.map((header) => [header, 0])),
      ); 

  const handleInputChange = (event, header) => { 
        setInputs(values => ({
            ...values,
            [header]: event.target.value 

        })) 
        handleChange(inputs)
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> {parameterHeaders[0]}</label>
          <input type="number"  onChange={(event)=> handleInputChange(event, parameterHeaders[0])} ></input>
        </p>
        <p>
          <label> {parameterHeaders[1]}</label>
          <input type="number" onChange={(event)=> handleInputChange(event, parameterHeaders[1])}></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label> {parameterHeaders[2]}</label>
          <input type="number" onChange={(event)=> handleInputChange(event, parameterHeaders[2])}></input>
        </p>
        <p>
          <label> {parameterHeaders[3]}</label>
          <input type="number" onChange={(event)=> handleInputChange(event, parameterHeaders[3])}></input>
        </p>
      </div>
    </section>
  );
}

export default InvestmentParameters;
