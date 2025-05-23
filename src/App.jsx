import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const handleChange = (inputId, newValue) => {
    setUserInput((prevInput) => ({ ...prevInput, [inputId]: newValue }));
  };

  const allFilled = Object.values(userInput).every((v) => v !== "");

  const parsedInput = {
    initialInvestment: +userInput.initialInvestment,
    annualInvestment: +userInput.annualInvestment,
    expectedReturn: +userInput.expectedReturn,
    duration: +userInput.duration,
  };

  const results = allFilled ? calculateInvestmentResults(parsedInput) : [];

  return (
    <>
      <div>
        <Header />
      </div>
      <section id="user-input">
        <div className="input-group">
          <UserInput
            label="INITIAL INVESTMENT"
            id="initialInvestment"
            value={userInput.initialInvestment}
            onChange={handleChange}
          />
          <UserInput
            label="ANNUAL INVESTMENT"
            id="annualInvestment"
            value={userInput.annualInvestment}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <UserInput
            label="EXPECTED RETURN"
            id="expectedReturn"
            value={userInput.expectedReturn}
            onChange={handleChange}
          />
          <UserInput
            label="DURATION"
            id="duration"
            value={userInput.duration}
            onChange={handleChange}
          />
        </div>
      </section>
      {results.length > 0 && <Results results={results} />}
    </>
  );
}

export default App;
