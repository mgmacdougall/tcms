import { React, useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../../components/SideBar";
import HeaderNavBar from "../../components/HeaderNavBar";
function TestCaseListPage() {
  const [testCases, setTestCases] = useState([]);

  useEffect(() => {
    // Simulate fetching test cases from an API
    const fetchTestCases = async () => {
      // Replace this with your actual API call
      // console.log(testCases);
      const result = await axios.get("http://localhost:5000/api/testcase");
      console.log("Fetched test cases:", result.data);
      const { testcases } = result.data;
      console.log(testcases);
      setTestCases(testcases);
      console.log("Updated test cases state:", testCases);
    };

    fetchTestCases();
  }, []);

  return (
    <>
      <div style={{ minWidth: 0, minHeight: 0 }}>
        <SideBar />
        <div className="content-wrapper">
          <HeaderNavBar />
          <div className="main-content">
            <h2>Test Case List</h2>
            {testCases.length === 0 && <p>No test cases found.</p>}

            {testCases.length > 0 && (
              <ul>
                {testCases.map((tc) => (
                  // <li key={tc.id}>{tc.name}</li>
                  <div key={tc.id} className="card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src="..."
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{tc.name}</h5>
                      <p className="card-text">{tc.desc}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TestCaseListPage;
