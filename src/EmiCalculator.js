
import React, { useState } from "react";
import bike from "./home.jpg";
function EmiCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [emi, setEmi] = useState(null);

  function calculateEMI(e) {
    e.preventDefault();

    const principal = Number(amount);
    const monthlyRate = Number(rate) / 12 / 100;
    const months = Number(years) * 12;

    if (principal <= 0 || Number(rate) <= 0 || months <= 0) {
      setEmi(null);
      return;
    }

    const result =
      principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, months) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(result);
  }

  return (
    <div>
      <h2>EMI Calculator</h2>

      <form onSubmit={calculateEMI} className="emi-form">
        <label>Loan Amount (₹)</label>
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <label>Interest Rate (% per year)</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
        />

        <label>Loan Duration (Years)</label>
        <input
          type="number"
          min="1"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          required
        />

        <button type="submit">Calculate EMI</button>
      </form>

      {emi !== null && (
        <h3>Monthly EMI: ₹{emi.toLocaleString("en-IN", {
          maximumFractionDigits: 2
        })}</h3>
      )}
    </div>
  );
}

export default EmiCalculator;
