import { useState, useMemo } from 'react';
import './EMICalculator.css';

interface EMICalculatorProps {
  defaultLoan?: number;
}

const EMICalculator = ({ defaultLoan = 5000000 }: EMICalculatorProps) => {
  const [loanAmount, setLoanAmount] = useState(defaultLoan);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const emi = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    if (monthlyRate === 0) return Math.round(principal / months);

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    return Math.round(emiValue);
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (value: number): string => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)} Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)} L`;
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <div className="emi-calc">
      <h3>💰 EMI Calculator</h3>

      <div className="emi-form">
        <div className="emi-input">
          <label htmlFor="loan-amount">Loan Amount</label>
          <input
            id="loan-amount"
            type="range"
            min={500000}
            max={50000000}
            step={100000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
          <span className="emi-value">{formatCurrency(loanAmount)}</span>
        </div>

        <div className="emi-input">
          <label htmlFor="interest-rate">Interest Rate (% p.a.)</label>
          <input
            id="interest-rate"
            type="range"
            min={5}
            max={15}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
          <span className="emi-value">{interestRate}%</span>
        </div>

        <div className="emi-input">
          <label htmlFor="tenure">Loan Tenure (Years)</label>
          <input
            id="tenure"
            type="range"
            min={1}
            max={30}
            step={1}
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
          />
          <span className="emi-value">{tenure} years</span>
        </div>
      </div>

      <div className="emi-result">
        <p className="emi-result-label">Your Monthly EMI</p>
        <p className="emi-amount">
          ₹{emi.toLocaleString('en-IN')} <span>/ month</span>
        </p>
      </div>
    </div>
  );
};

export default EMICalculator;
