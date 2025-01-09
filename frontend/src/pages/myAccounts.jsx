import React, { useState } from "react";
import api from '../api/apiClient';
import { useNavigate } from 'react-router-dom';

const ViewMyAccounts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const accounts = [
    { accountNumber: "1234567890", type: "Savings", balance: "$5,000.00" },
    { accountNumber: "0987654321", type: "Checking", balance: "$2,300.00" },
    { accountNumber: "5678901234", type: "Fixed", balance: "$10,000.00" },
  ];

  const filteredAccounts = accounts.filter((account) =>
    account.accountNumber.includes(searchTerm) ||
    account.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/userlogin');
    } catch (error) {
      console.error('Logout failed:', error.response?.data?.message || error.message);
    }
  };

  const handleViewDetails = (type) => {
    if (type === "Savings") {
      navigate("/savingdetails");
    } else if (type === "Checking") {
      navigate("/checkingdetails");
    } else if (type === "Fixed") {
      navigate("/fixeddetails");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-r from-blue-500 via-gray-100 to-blue-300">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl font-bold text-blue-900">My Accounts</h1>
          <button
            className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Search by account number or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-3 font-semibold text-left text-blue-900">Account Number</th>
              <th className="p-3 font-semibold text-left text-blue-900">Type</th>
              <th className="p-3 font-semibold text-left text-blue-900">Balance</th>
              <th className="p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {filteredAccounts.length > 0 ? (
              filteredAccounts.map((account) => (
                <tr key={account.accountNumber} className="border-b border-gray-200">
                  <td className="p-3">{account.accountNumber}</td>
                  <td className="p-3">{account.type}</td>
                  <td className="p-3">{account.balance}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleViewDetails(account.type)}
                      className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center text-gray-500">
                  No accounts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewMyAccounts;
