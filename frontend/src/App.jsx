import React from "react";

const App = () => {
  const features = [
    { title: "Secure Transactions", description: "Your money is safe with our top-notch security." },
    { title: "Easy Transfers", description: "Send and receive money with a few clicks." },
    { title: "24/7 Support", description: "Our support team is available around the clock." },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">BankApp</h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
          <button className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-200">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-blue-100 py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-blue-700">Welcome to BankApp</h1>
          <p className="mt-4 text-gray-700">Manage your finances effortlessly and securely.</p>
          <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700">Why Choose BankApp?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-4 text-center">
        <p>&copy; 2024 BankApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
