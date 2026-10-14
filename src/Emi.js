import React, { useState } from "react";
import "./Emi.css";

function Emi() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [months, setMonths] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = Number(amount);
    const R = Number(rate) / 12 / 100;
    const N = Number(months);

    if (P <= 0 || R < 0 || N <= 0) {
      alert("Please enter valid values");
      return;
    }

    let result;

    if (R === 0) {
      result = P / N;
    } else {
      result =
        (P * R * Math.pow(1 + R, N)) /
        (Math.pow(1 + R, N) - 1);
    }

    setEmi(result);
  };

  return (
    <div className="container">
      <h1>EMI Calculator</h1>
      <p>Calculate your monthly loan payment</p>

      <div className="calculator">
        <label>Loan Amount (₹)</label><br /><br />
        <input
          type="number"
          placeholder="Enter loan amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>Annual Interest Rate (%)</label><br /><br />
        <input
          type="number"
          placeholder="Enter interest rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <label>Loan Tenure (Months)</label><br /><br />
        <input
          type="number"
          placeholder="Enter months"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />

        <button onClick={calculateEMI}>Calculate EMI</button>

        {emi !== null && (
          <div className="result">
            <h2>Monthly EMI</h2>
            <h1>
              ₹{emi.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Emi;