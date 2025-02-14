import React from "react";

const MyBankProfile = () => {
  const profileDetails = {
    customerName: "John Doe",
    customerID: "CUST12345678",
    email: "john.doe@example.com",
    phone: "+1 234-567-890",
    address: "1234 Elm Street, Springfield, USA",
    accountType: "Savings Account",
    branch: "Downtown Branch",
    joinedDate: "2020-05-15",
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-500 via-gray-100 to-gray-300">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-blue-800">My Bank Profile</h1>
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
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBankProfile;
