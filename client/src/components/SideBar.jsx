import React from "react";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <nav className="sidebar d-flex flex-column p-3 text-dark bg-light">
      <h4 className="mb-4">TCMS</h4>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item mb-2">
          <Link to="/" className="nav-link text-dark">
            Dashboard
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/list" className="nav-link text-dark">
            Test cases
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/suites" className="nav-link text-dark">
            Test Suites
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin" className="nav-link text-dark">
            Administration
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
