function InvestmentParameters({ handleChange, parameterHeaders, inputs }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> {parameterHeaders[0]}</label>
          <input
            type="number"
            value={inputs[parameterHeaders[0]].toString()}
            onChange={(event) =>
              handleChange(event.target.value, parameterHeaders[0])
            }
            min="0"
          ></input>
        </p>
        <p>
          <label> {parameterHeaders[1]}</label>
          <input
            type="number"
            value={inputs[parameterHeaders[1]].toString()}
            onChange={(event) =>
              handleChange(event.target.value, parameterHeaders[1])
            }
            min="0"
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label> {parameterHeaders[2]}</label>
          <input
            type="number"
            value={inputs[parameterHeaders[2]].toString()}
            onChange={(event) =>
              handleChange(event.target.value, parameterHeaders[2])
            }
            min="0"
          ></input>
        </p>
        <p>
          <label> {parameterHeaders[3]}</label>
          <input
            type="number"
            value={inputs[parameterHeaders[3]].toString()}
            onChange={(event) =>
              handleChange(event.target.value, parameterHeaders[3])
            }
            min="0"
          ></input>
        </p>
      </div>
    </section>
  );
}

export default InvestmentParameters;
