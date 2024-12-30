import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct import
import UserLogin from "./pages/userLogin"; // Removed .jsx extension and corrected to PascalCase
import GetStarted from "./pages/getStarted"; // Removed .jsx extension and corrected to PascalCase
// import AppLayout from "./components/AppLayout"; // Uncomment if you have a layout component
// import Error from "./components/Error"; // Uncomment if you have an Error component

const App = () => {
  return (
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
          <Route path="/getstarted" element={<GetStarted />} />

          {/* Catch-all for unknown routes */}
          {/* Uncomment and define your Error component */}
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      {/* </AppLayout> */}
    </Router>
  );
};

export default App;
