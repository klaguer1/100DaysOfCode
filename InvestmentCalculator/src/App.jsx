import { useState } from "react";
import Header from "../components/Header"
import ObjectLogger from "./util/ObjectLogger"
import InvestmentParameters from "../components/InvestmentParameters"

const PARAMETER_HEADERS = [
  "Initial Investment",
  "Annual Investment",
  "Expected Return(%)",
  "Duration(Yrs",
];

function App() { 

    const defaultTable = Object.fromEntries(PARAMETER_HEADERS.map((header) => [header, 0]))
    const [investmentParameters, setInvestmentParameters] = useState(defaultTable); 

  const getNewParameters = (parameters) => { 
    setInvestmentParameters(parameters)
};
  const Logger = () => <ObjectLogger value={investmentParameters}/>

  return (  
    
    <main>
      <Logger></Logger>
      <Header title="React Investment Calculator"></Header>
      <InvestmentParameters parameterHeaders={PARAMETER_HEADERS} handleChange={getNewParameters}></InvestmentParameters>


    </main>
  
  )
}

export default App
