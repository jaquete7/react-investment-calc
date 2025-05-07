import { formatter } from "../util/investment";

export default function Results({ results }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear.toFixed(2))}</td>
            <td>{formatter.format(yearData.interest.toFixed(2))}</td>
            <td>{formatter.format(yearData.annualInvestment.toFixed(2))}</td>
            <td>{formatter.format(yearData.investedCapital.toFixed(2))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
