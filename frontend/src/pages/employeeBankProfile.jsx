import React from "react";
import { Link } from "react-router-dom";

const EmployeeProfile = () => {
  const profileDetails = {
    customerName: "Alice Johnson",
    customerID: "EMP98765432",
    email: "alice.johnson@example.com",
    phone: "+1 321-654-9870",
    address: "1234 Pine Avenue, Springfield, USA",
    accountType: "Checking Account",
    branch: "Downtown Branch",
    joinedDate: "2019-06-15",
    position: "Customer Service Representative",
    department: "Customer Support",
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-500 via-gray-100 to-gray-300">
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-6 text-3xl font-bold text-blue-800">Employee Profile</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="font-medium text-gray-700">Customer Name:</p>
              <p className="text-gray-900">{profileDetails.customerName}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Customer ID:</p>
              <p className="text-gray-900">{profileDetails.customerID}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Email:</p>
              <p className="text-gray-900">{profileDetails.email}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Phone:</p>
              <p className="text-gray-900">{profileDetails.phone}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Address:</p>
              <p className="text-gray-900">{profileDetails.address}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Account Type:</p>
              <p className="text-gray-900">{profileDetails.accountType}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Branch:</p>
              <p className="text-gray-900">{profileDetails.branch}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Joined Date:</p>
              <p className="text-gray-900">{profileDetails.joinedDate}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Position:</p>
              <p className="text-gray-900">{profileDetails.position}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Department:</p>
              <p className="text-gray-900">{profileDetails.department}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Apply for Loan Cards in Flex Container */}
      <div className="flex justify-center gap-6 mt-8">
        {/* First Card */}
        <div className="w-full max-w-md p-6 transition duration-300 transform bg-white rounded-lg shadow-xl hover:scale-105">
          <h2 className="mb-4 text-xl font-semibold text-blue-700">Apply for a Loan</h2>
          <p className="mb-4 text-gray-600">
            Need a loan? Apply now by clicking the button below. Fast processing and easy approval!
          </p>
          <Link to="/createLoanRequest">
            <button className="w-full px-6 py-3 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Apply for Loan
            </button>
          </Link>
        </div>

        {/* Second Card */}
        <div className="w-full max-w-md p-6 transition duration-300 transform bg-white rounded-lg shadow-xl hover:scale-105">
  <h2 className="mb-4 text-xl font-semibold text-blue-700">View Created Loan Requests</h2>
  <p className="mb-4 text-gray-600">
    Check the status of your loan requests, review details, and track progress—all in one place.
  </p>
  <Link to="/viewLoanRequests">
    <button
      className="w-full px-6 py-3 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      aria-label="View Created Loan Requests"
    >
      View Loan Requests
    </button>
  </Link>
</div>

      </div>
    </>
  );
};

export default EmployeeProfile;
