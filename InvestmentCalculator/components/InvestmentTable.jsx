import { calculateInvestmentResults, formatter } from "../src/util/investment";

function InvestmentTable({ columns, inputs }) {
  function calculateReturns(values) {
    let result = calculateInvestmentResults({
      initialInvestment: values["Initial Investment"],
      annualInvestment: values["Annual Investment"],
      expectedReturn: values["Expected Return(%)"],
      duration: values["Duration(Yrs)"],
    });
    return result;
  }

  let expectedReturns = calculateReturns(inputs);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {expectedReturns.map((result, key) => (
        <tbody key={key}>
          <tr>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.totalInterest)}</td>
            <td>{formatter.format(result.annualInvestment)}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default InvestmentTable;
