import { useState } from "react";
import Header from "../components/Header";
import ObjectLogger from "./util/ObjectLogger";
import InvestmentParameters from "../components/InvestmentParameters";
import InvestmentTable from "../components/InvestmentTable";

const PARAMETER_HEADERS = [
  "Initial Investment",
  "Annual Investment",
  "Expected Return(%)",
  "Duration(Yrs)",
];

function App() {
  const tableValues = Object.fromEntries(
    PARAMETER_HEADERS.map((header) => [header, 0]),
  );
  const [investmentParameters, setInvestmentParameters] = useState(tableValues);

  const getNewParameters = (newValue, header) => {
    setInvestmentParameters((prevValues) => ({
      ...prevValues,
      [header]: Number(newValue),
    }));
  };

  return (
    <main>
      <Header title="React Investment Calculator"></Header>
      <InvestmentParameters
        inputs={investmentParameters}
        parameterHeaders={PARAMETER_HEADERS}
        handleChange={getNewParameters}
      ></InvestmentParameters>
      <InvestmentTable
        inputs={investmentParameters}
        columns={PARAMETER_HEADERS}
      ></InvestmentTable>
    </main>
  );
}

export default App;
