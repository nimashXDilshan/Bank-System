import React from "react";

const SavingsAccountDetails = () => {
  const accountDetails = {
    accountNumber: "SA1234567890",
    accountHolder: "John Doe",
    balance: "$15,000.00",
    interestRate: "3.5% per annum",
    transactions: [
      { date: "2024-12-28", description: "Salary Credit", amount: "$3,000.00", type: "Credit" },
      { date: "2024-12-22", description: "Grocery Shopping", amount: "$200.00", type: "Debit" },
      { date: "2024-12-18", description: "Utility Bill Payment", amount: "$150.00", type: "Debit" },
      { date: "2024-12-15", description: "Interest Credit", amount: "$50.00", type: "Credit" },
    ],
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-500 via-gray-100 to-gray-300">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-blue-800">Savings Account Details</h1>
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Account Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-700">Account Number:</p>
              <p className="text-gray-900">{accountDetails.accountNumber}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Account Holder:</p>
              <p className="text-gray-900">{accountDetails.accountHolder}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Balance:</p>
              <p className="font-bold text-green-600">{accountDetails.balance}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Interest Rate:</p>
              <p className="text-gray-900">{accountDetails.interestRate}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Transaction History</h2>
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
              {accountDetails.transactions.map((transaction, index) => (
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

export default SavingsAccountDetails;
