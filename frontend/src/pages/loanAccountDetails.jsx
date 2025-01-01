import React from "react";

const LoanAccountDetails = () => {
  const loanDetails = {
    loanNumber: "LN123456789",
    borrowerName: "John Doe",
    loanAmount: "$25,000.00",
    interestRate: "7.5% per annum",
    tenure: "5 years",
    emi: "$500.00",
    transactions: [
      { date: "2024-12-25", description: "EMI Payment", amount: "$500.00", type: "Credit" },
      { date: "2024-11-25", description: "EMI Payment", amount: "$500.00", type: "Credit" },
      { date: "2024-10-25", description: "EMI Payment", amount: "$500.00", type: "Credit" },
      { date: "2024-09-25", description: "EMI Payment", amount: "$500.00", type: "Credit" },
    ],
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-500 via-gray-100 to-gray-300">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-blue-800">Loan Account Details</h1>
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Loan Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-700">Loan Number:</p>
              <p className="text-gray-900">{loanDetails.loanNumber}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Borrower Name:</p>
              <p className="text-gray-900">{loanDetails.borrowerName}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Loan Amount:</p>
              <p className="font-bold text-green-600">{loanDetails.loanAmount}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Interest Rate:</p>
              <p className="text-gray-900">{loanDetails.interestRate}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Tenure:</p>
              <p className="text-gray-900">{loanDetails.tenure}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">EMI:</p>
              <p className="text-gray-900">{loanDetails.emi}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Repayment History</h2>
          <table className="w-full border border-collapse border-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-3 font-medium text-left text-gray-800">Date</th>
                <th className="p-3 font-medium text-left text-gray-800">Description</th>
                <th className="p-3 font-medium text-left text-gray-800">Amount</th>
                <th className="p-3 font-medium text-left text-gray-800">Type</th>
              </tr>
            </thead>
            <tbody>
              {loanDetails.transactions.map((transaction, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-3">{transaction.date}</td>
                  <td className="p-3">{transaction.description}</td>
                  <td
                    className={`p-3 font-medium ${
                      transaction.type === "Credit" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.amount}
                  </td>
                  <td className="p-3">{transaction.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoanAccountDetails;
