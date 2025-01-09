import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct import
import UserLogin from "./pages/userLogin"; // Removed .jsx extension and corrected to PascalCase
import GetStarted from "./pages/getStarted"; // Removed .jsx extension and corrected to PascalCase
import Error from "./pages/404Errorfound";
import Myaccounts from "./pages/myAccounts"; 
import Myloans from "./pages/myLoans"; 
import SavingAccountDetails from "./pages/savingAccountDetails"; 
import CheckingaccountDetails from "./pages/checkingAccountDetails"; 
import FixedDepositDetails from "./pages/fixedAccountDetails"; 
import LoanAccountDetails from "./pages/loanAccountDetails"; 
import CustomerBankProfile from "./pages/customerBankProfile"; 
import DepositWithdrwalOnlineTransaction from "./pages/deposit_withdrwal_onlinetransaction";
import CreateLoanRequest from "./pages/createLoanRequest";
import CreateOnlineTransfer from "./pages/createOnlineTransfer";
import BankServices from "./pages/bankServices";
import ManagerBankProfile from "./pages/managerBankProfile"; 
import EmployeeBankProfile from "./pages/employeeBankProfile";
import WhoAreYou from "./pages/whoAreyou";  
import MyAllDetails from "./pages/myalldetails";

import { AuthProvider, useAuth } from './contexts/authContext';

// import AppLayout from "./components/AppLayout"; // Uncomment if you have a layout component
// import Error from "./components/Error"; // Uncomment if you have an Error component

const App = () => {
  return (
    
    <AuthProvider>
    <Router>
      {/* If you want to use a layout, uncomment the following line and wrap the routes inside AppLayout */}
      {/* <AppLayout> */}
        <Routes>
          {/* Routes for role 1 */}
          {/* Example of private routes if required */}
          {/* 
            <Route element={<PrivateRoute allowedRoles={['1']} />}>
              <Route path="/AllEmployees" element={<AllEmployees />} />
              <Route path="/ReportingModule" element={<ReportingModule />} />
            </Route>
          */}

          {/* Routes accessible by all users */}
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/" element={<GetStarted />} />
          <Route path="/myaccounts" element={<Myaccounts />} />
          <Route path="/myloans" element={<Myloans />} />
          <Route path="/savingdetails" element={<SavingAccountDetails />} />
          <Route path="/checkingdetails" element={<CheckingaccountDetails />} />
          <Route path="/fixeddetails" element={<FixedDepositDetails />} />
          <Route path="/loandetails" element={<LoanAccountDetails />} />
          <Route path="/customerbankprofile" element={<CustomerBankProfile />} />
          <Route path="/managerbankprofile" element={<ManagerBankProfile />} />
          <Route path="/employeebankprofile" element={<EmployeeBankProfile />} />
          <Route path="/depositwithdrawalonlinetransaction" element={<DepositWithdrwalOnlineTransaction />} />
          <Route path="/createloanrequest" element={<CreateLoanRequest />} />
          <Route path="/createonlinetransfer" element={<CreateOnlineTransfer />} />
          <Route path="/bankservices" element={<BankServices />} />
          <Route path="/whoareyou" element={<WhoAreYou />} />
          <Route path="/myalldetails" element={<MyAllDetails />} />
          {/* Catch-all for unknown routes */}
          {/* Uncomment and define your Error component */}
          <Route path="*" element={<Error />} />
        </Routes>
      {/* </AppLayout> */}
    </Router>
    </AuthProvider>
  );
};

export default App;
