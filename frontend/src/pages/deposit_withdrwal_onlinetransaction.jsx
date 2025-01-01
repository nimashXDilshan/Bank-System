import React from "react";

const AllTransactions = () => {
  const transactions = [
    { date: "2024-12-28", description: "Salary Deposit", amount: "$3,000.00", type: "Deposit" },
    { date: "2024-12-22", description: "Online Purchase - Amazon", amount: "$250.00", type: "Withdrawal" },
    { date: "2024-12-20", description: "ATM Withdrawal", amount: "$500.00", type: "Withdrawal" },
    { date: "2024-12-18", description: "Transfer to John Smith", amount: "$1,000.00", type: "Online Transfer" },
    { date: "2024-12-15", description: "Utility Bill Payment", amount: "$200.00", type: "Withdrawal" },
    { date: "2024-12-10", description: "Interest Credit", amount: "$50.00", type: "Deposit" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-500 via-gray-100 to-gray-300">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-blue-800">All Transactions</h1>
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
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-3">{transaction.date}</td>
                <td className="p-3">{transaction.description}</td>
                <td
                  className={`p-3 font-medium ${
                    transaction.type === "Deposit" || transaction.type === "Online Transfer"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.amount}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-md text-sm ${
                      transaction.type === "Deposit"
                        ? "bg-green-100 text-green-700"
                        : transaction.type === "Withdrawal"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {transaction.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Download Statement
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTransactions;
