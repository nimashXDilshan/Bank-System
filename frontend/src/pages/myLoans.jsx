import React from "react";

const MyLoans = () => {
  const loanDetails = [
    { id: 1, type: "Home Loan", balance: "$50,000.00", interestRate: "5.5% per annum", dueDate: "2025-01-15" },
    { id: 2, type: "Car Loan", balance: "$15,000.00", interestRate: "7.2% per annum", dueDate: "2025-01-20" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-500 via-gray-100 to-gray-300">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-blue-800">My Loans</h1>
        <table className="w-full border border-collapse border-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-3 font-medium text-left text-gray-800">Loan Type</th>
              <th className="p-3 font-medium text-left text-gray-800">Outstanding Balance</th>
              <th className="p-3 font-medium text-left text-gray-800">Interest Rate</th>
              <th className="p-3 font-medium text-left text-gray-800">Next Due Date</th>
            </tr>
          </thead>
          <tbody>
            {loanDetails.map((loan) => (
              <tr key={loan.id} className="border-b border-gray-200">
                <td className="p-3">{loan.type}</td>
                <td className="p-3 text-gray-900">{loan.balance}</td>
                <td className="p-3 text-gray-900">{loan.interestRate}</td>
                <td className="p-3 text-gray-900">{loan.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLoans;