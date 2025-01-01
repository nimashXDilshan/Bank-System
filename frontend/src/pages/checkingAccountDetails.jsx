import React from "react";

const CheckingAccountDetails = () => {
  const accountDetails = {
    accountNumber: "CA9876543210",
    accountHolder: "Jane Smith",
    balance: "$8,500.00",
    overdraftLimit: "$1,000.00",
    transactions: [
      { date: "2024-12-30", description: "Online Purchase", amount: "$120.00", type: "Debit" },
      { date: "2024-12-25", description: "Utility Bill Payment", amount: "$90.00", type: "Debit" },
      { date: "2024-12-20", description: "Direct Deposit", amount: "$2,500.00", type: "Credit" },
      { date: "2024-12-15", description: "Overdraft Fee", amount: "$25.00", type: "Debit" },
    ],
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-500 via-gray-100 to-gray-300">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-blue-800">Checking Account Details</h1>
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
              <p className="font-medium text-gray-700">Overdraft Limit:</p>
              <p className="text-gray-900">{accountDetails.overdraftLimit}</p>
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

export default CheckingAccountDetails;
