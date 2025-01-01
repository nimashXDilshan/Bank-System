import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-white to-gray-300">
      <div className="max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-blue-700">404</h1>
        <p className="mt-4 text-lg font-medium text-gray-700">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          It looks like you've hit a wrong link or the page has been moved.
        </p>
        <div className="mt-6">
          <button
            onClick={handleBackToHome}
            className="px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Back to Home
          </button>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            If you think this is a mistake, please{" "}
            <a
              href="/contact-support"
              className="text-blue-600 hover:underline"
            >
              contact our support team
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
