import { React, useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../../../components/SideBar";
import HeaderNavBar from "../../../components/HeaderNavBar";
import MenuBar from "./components/MenuBar";
import TestcaseForm from "./components/TestcaseForm";
function TestCaseListPage() {
  const [testCases, setTestCases] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const [displayForm, setDisplayForm] = useState(false);

  useEffect(() => {
    const fetchTestCases = async () => {
      const result = await axios.get("http://localhost:5050/api/testcase");
      const { testcases } = result.data;
      setTestCases(testcases);
    };

    fetchTestCases();
  }, [refresh]);

  const handleFormToggle = () => {
    console.log("Toggling form display. Current state:", displayForm);
    setDisplayForm((prev) => !prev);
  };

  const handleCreateTestCase = async (testCaseData) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/testcase",
        testCaseData,
      );
      console.log("Created test case:", response.data);
      setRefresh((prev) => prev + 1);
    } catch (error) {
      console.error("Error creating test case:", error);
    }
  };

  return (
    <>
      <button onClick={() => setRefresh((prev) => prev + 1)}>Refresh</button>
      <div style={{ minWidth: 0, minHeight: 0 }}>
        <SideBar />
        <div className="content-wrapper">
          <HeaderNavBar />
          <div className="main-content">
            <h2>Test Case List</h2>
            <MenuBar toggleForm={handleFormToggle} />
            {testCases.length === 0 && <p>No test cases found.</p>}
            {displayForm && (
              <TestcaseForm
                setUIDisplayForm={setDisplayForm}
                formState={displayForm}
              />
            )}
            {testCases.length > 0 && (
              <div className="test-case-list">
                {testCases.map((tc) => (
                  // <li key={tc.id}>{tc.name}</li>
                  <div key={tc.id} className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{tc.name}</h5>
                      <p className="card-text">{tc.desc}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TestCaseListPage;
