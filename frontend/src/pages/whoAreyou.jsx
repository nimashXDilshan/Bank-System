import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhoAreYou = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    // Pass the selected role as state while navigating to LoginPage
    navigate('/userlogin', { state: { role } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-blue-500">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-semibold text-center text-blue-800">Select Your Role</h2>

        <div className="flex justify-between space-x-4">
          {/* Customer Card */}
          <div
            className="flex flex-col items-center justify-center w-1/3 p-6 bg-blue-100 rounded-lg shadow-lg cursor-pointer hover:bg-blue-200"
            onClick={() => handleRoleSelection('Customer')}
          >
            <h3 className="text-xl font-medium text-blue-800">Customer</h3>
            <p className="text-center text-gray-600">View your account and make transactions.</p>
          </div>

          {/* Bank Employee Card */}
          <div
            className="flex flex-col items-center justify-center w-1/3 p-6 bg-blue-100 rounded-lg shadow-lg cursor-pointer hover:bg-blue-200"
            onClick={() => handleRoleSelection('Employee')}
          >
            <h3 className="text-xl font-medium text-blue-800">Employee</h3>
            <p className="text-center text-gray-600">Manage customer accounts and transactions.</p>
          </div>

          {/* Manager Card */}
          <div
            className="flex flex-col items-center justify-center w-1/3 p-6 bg-blue-100 rounded-lg shadow-lg cursor-pointer hover:bg-blue-200"
            onClick={() => handleRoleSelection('Manager')}
          >
            <h3 className="text-xl font-medium text-blue-800">Manager</h3>
            <p className="text-center text-gray-600">Oversee employee performance and bank operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreYou;
