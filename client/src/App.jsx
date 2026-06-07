import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/DashboardPage";
// import loginPage from "./pages/Login/loginPage";
import TestCaseDetailsPage from "./pages/TestCaseDetails/testCaseDetailsPage";
import TestcasePage from "./pages/TestCases/testcasePage";
import TestCaseListPage from "./pages/TestCaseList/TestCaseListPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list" element={<TestCaseListPage />} />
          <Route path="/test-cases" element={<TestcasePage />} />
          <Route path="/test-cases/:id" element={<TestCaseDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
