import React from "react";
import HeaderNavBar from "../../components/HeaderNavBar";
import SideBar from "../../components/SideBar";
import "./layout.css";
import SalesChart from "../../components/SalesChart";
import UserGrowthChart from "../../components/UserGrowthChart";
// import KPIContainer from "../../components/KPIContainer";
import KPIBar from "../../components/KPIBar";
function Dashboard() {
  const salesData = [
    { date: "2024-01-01", sales: 100 },
    { date: "2024-01-02", sales: 150 },
    { date: "2024-01-03", sales: 120 },
    { date: "2024-01-04", sales: 180 },
    { date: "2024-01-05", sales: 130 },
  ];

  const userGrowth = [
    { date: "2024-01-01", users: 50 },
    { date: "2024-01-02", users: 80 },
    { date: "2024-01-03", users: 65 },
    { date: "2024-01-04", users: 90 },
    { date: "2024-01-05", users: 75 },
  ];

  const kpis = [
    { label: "Pass Rate", value: "92%", subtext: "Last 7 days" },
    { label: "Total Executed", value: "1,240", subtext: "This sprint" },
    { label: "Automation Coverage", value: "68%", subtext: "Stable" },
  ];
  return (
    <div style={{ minWidth: 0, minHeight: 0 }}>
      <SideBar />
      <div className="content-wrapper">
        <HeaderNavBar />
        <div className="main-content" style={{ minWidth: 0, minHeight: 0 }}>
          <>
            <h2>Dashboard Area</h2>
            <p>
              This is the main content area beneath the top nav and to the right
              of the left sidebar.
            </p>
            <KPIBar items={kpis} />
            {/* <KPIContainer /> */}
            <SalesChart data={salesData} />
            <div className="row" style={{ minWidth: 0, minHeight: 0 }}>
              <div className="col-md-6" style={{ minWidth: 0, minHeight: 0 }}>
                <SalesChart data={salesData} />
              </div>
              <div className="col-md-6" style={{ minWidth: 0, minHeight: 0 }}>
                <UserGrowthChart data={userGrowth} />
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Dashboard;
