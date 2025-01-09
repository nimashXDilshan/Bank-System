import React from "react";
import { useNavigate } from "react-router-dom";

const BankingDashboard = () => {
  const navigate = useNavigate();

  // Button configuration for dynamic rendering
  const buttons = [
    { label: "My All Accounts", route: "/myaccounts", color: "blue" },
    { label: "My Saving Accounts", route: "/myaccounts", color: "blue" },
    { label: "My Fixed Accounts", route: "/myaccounts", color: "green" },
    { label: "My Checking Accounts", route: "/myaccounts", color: "red" },
    { label: "My Loan Accounts", route: "/myloans", color: "yellow" },
    
    { label: "My Profile", route: "/mybankprofile", color: "purple" },
    { label: "Create Online Loan Request", route: "/createonlineloanrequest", color: "indigo" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Banking Dashboard
        </h1>
        <div className="flex flex-col gap-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => navigate(button.route)}
              className={`px-4 py-2 text-white bg-${button.color}-500 rounded hover:bg-${button.color}-600 focus:outline-none focus:ring-2 focus:ring-${button.color}-400 transition-all`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankingDashboard;
