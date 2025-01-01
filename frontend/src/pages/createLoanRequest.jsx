import React, { useState } from "react";

const OnlineLoanApplication = () => {
  const [loanDetails, setLoanDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    loanAmount: "",
    loanType: "Personal Loan",
    tenure: "12",
    annualIncome: "",
    reason: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (
      !loanDetails.fullName ||
      !loanDetails.email ||
      !loanDetails.phoneNumber ||
      !loanDetails.loanAmount ||
      !loanDetails.annualIncome ||
      !loanDetails.reason
    ) {
      setError("Please fill out all fields.");
      return;
    }

    if (loanDetails.loanAmount <= 0 || loanDetails.annualIncome <= 0) {
      setError("Loan amount and income must be positive values.");
      return;
    }

    setError("");
    // Submit logic (e.g., API call)
    console.log("Loan Application Submitted:", loanDetails);
    alert("Loan application submitted successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-blue-500">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-blue-800">Apply for a Loan</h1>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
                value={loanDetails.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                value={loanDetails.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone number"
                value={loanDetails.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Loan Amount</label>
              <input
                type="number"
                name="loanAmount"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter loan amount"
                value={loanDetails.loanAmount}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Loan Type</label>
              <select
                name="loanType"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={loanDetails.loanType}
                onChange={handleInputChange}
              >
                <option>Personal Loan</option>
                <option>Home Loan</option>
                <option>Car Loan</option>
                <option>Education Loan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tenure (Months)</label>
              <select
                name="tenure"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={loanDetails.tenure}
                onChange={handleInputChange}
              >
                <option>12</option>
                <option>24</option>
                <option>36</option>
                <option>48</option>
                <option>60</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Annual Income</label>
              <input
                type="number"
                name="annualIncome"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your annual income"
                value={loanDetails.annualIncome}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Reason for Loan</label>
              <textarea
                name="reason"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Briefly explain why you need this loan"
                value={loanDetails.reason}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnlineLoanApplication;
