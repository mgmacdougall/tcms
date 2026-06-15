import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/DashboardPage";
// import loginPage from "./pages/Login/loginPage";
// import TestCaseDetailsPage from "./src/pages/TestCases/TestcaseDetailsPage";
// import TestcasePage from "./src/pages/TestCases/testcasePage";
import TestCaseListPage from "./pages/TestCases/List/TestCaseListPage";
import TestSuitePage from "./pages/Suites/TestSuitePage";
// import UserPage from "./src/pages/Users/UserPage";
import AdminPage from "./pages/Admin/AdminPage";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list" element={<TestCaseListPage />} />
          <Route path="/suites" element={<TestSuitePage />} />
          <Route path="/admin" element={<AdminPage />} />

          {/* <Route path="/test-case" element={<TestCaseDetailsPage />} /> */}
          {/* <Route path="/test-cases" element={<TestcasePage />} /> */}
          {/* <Route path="/users" element={<UserPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
