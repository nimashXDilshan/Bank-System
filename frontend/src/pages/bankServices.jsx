import React from 'react';

const CustomerService = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-blue-500">
      <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-semibold text-center text-blue-800">Customer Service & Help</h2>
        
        <section className="mb-6">
          <h3 className="mb-4 text-2xl font-semibold text-blue-700">Frequently Asked Questions (FAQs)</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-medium text-gray-700">How can I reset my password?</h4>
              <p className="text-gray-600">
                You can reset your password by clicking the "Forgot Password" link on the login page. Follow the instructions to receive a password reset email.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-700">How do I transfer money between accounts?</h4>
              <p className="text-gray-600">
                Log in to your account, navigate to the "Transfers" section, and choose the accounts you want to transfer money between. Enter the amount and submit your transfer request.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-700">What should I do if I suspect fraud on my account?</h4>
              <p className="text-gray-600">
                Immediately contact our customer support team via the contact details below. We will assist you in securing your account.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="mb-4 text-2xl font-semibold text-blue-700">Contact Support</h3>
          <p className="mb-2 text-gray-700">If you need assistance, please reach out to our customer support team:</p>
          
          <div className="space-y-2">
            <p className="text-gray-600">Phone: <span className="text-blue-600">1-800-123-4567</span></p>
            <p className="text-gray-600">Email: <span className="text-blue-600">support@bank.com</span></p>
            <p className="text-gray-600">Live Chat: Available on our website</p>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-2xl font-semibold text-blue-700">Additional Resources</h3>
          <ul className="pl-6 space-y-2 list-disc">
            <li className="text-gray-600"><a href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</a></li>
            <li className="text-gray-600"><a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a></li>
            <li className="text-gray-600"><a href="/faq" className="text-blue-600 hover:underline">Additional FAQs</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CustomerService;
