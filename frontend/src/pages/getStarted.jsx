import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const features = [
    { title: "Secure Transactions", description: "Your money is safe with our top-notch security." },
    { title: "Easy Transfers", description: "Send and receive money with a few clicks." },
    { title: "24/7 Support", description: "Our support team is available around the clock." },
  ];

  return (
    <div className="text-gray-800 bg-gray-100">
      {/* Navbar */}
      <nav className="p-4 text-white bg-blue-700">
  <div className="container flex items-center justify-between mx-auto">
    <div className="flex items-center">
      <h1 className="text-xl font-bold">Bank A</h1>
      <span className="mx-2 text-xl font-bold">-</span>
      {/* Seychelles Flag */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg" 
        alt="Seychelles Flag" 
        className="w-8 h-8 mr-2"
      />
      <h1 className="text-xl font-bold">Seychelles</h1>
    </div>
  </div>
</nav>



      {/* Hero Section */}
      <section id="home" className="py-20 text-center bg-blue-100">
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-blue-700">Welcome to BankApp</h1>
    <p className="mt-4 text-gray-700">Manage your finances effortlessly and securely.</p>
    <Link to="/userlogin">
      <button className="px-6 py-3 mt-6 text-white bg-blue-700 rounded-lg hover:bg-blue-800">
        LOGIN TO THE SYSTEM
      </button>
    </Link>
  </div>
</section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700">Why Choose BankApp?</h2>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-700">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-white bg-blue-700">
        <p>&copy; 2024 BankApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GetStarted;
