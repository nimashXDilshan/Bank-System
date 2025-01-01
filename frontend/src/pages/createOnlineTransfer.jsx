import React, { useState } from 'react';

const OnlineTransferRequest = () => {
  const [senderAccount, setSenderAccount] = useState('');
  const [receiverAccount, setReceiverAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleTransfer = (e) => {
    e.preventDefault();

    // Validate the form
    if (!senderAccount || !receiverAccount || !amount) {
      setError('All fields are required!');
      setSuccess(false);
      return;
    }

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount.');
      setSuccess(false);
      return;
    }

    // Simulate the transfer
    setTimeout(() => {
      setSuccess(true);
      setError('');
      // Reset the form fields
      setSenderAccount('');
      setReceiverAccount('');
      setAmount('');
      setNote('');
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-blue-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-semibold text-center text-blue-800">Online Transfer Request</h2>
        
        {error && <p className="mb-4 text-sm text-center text-red-500">{error}</p>}
        {success && <p className="mb-4 text-sm text-center text-green-500">Transfer Successful!</p>}

        <form onSubmit={handleTransfer}>
          <div className="mb-4">
            <label htmlFor="senderAccount" className="block text-sm font-medium text-gray-700">Sender Account Number</label>
            <input
              type="text"
              id="senderAccount"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your account number"
              value={senderAccount}
              onChange={(e) => setSenderAccount(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="receiverAccount" className="block text-sm font-medium text-gray-700">Receiver Account Number</label>
            <input
              type="text"
              id="receiverAccount"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter receiver's account number"
              value={receiverAccount}
              onChange={(e) => setReceiverAccount(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              id="amount"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter amount to transfer"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note (Optional)</label>
            <textarea
              id="note"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter any note (Optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit Transfer Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnlineTransferRequest;
