import React from "react";
import SideBar from "../../components/SideBar";
import HeaderNavBar from "../../components/HeaderNavBar";
function AdminPage() {
  return (
    <div style={{ minWidth: 0, minHeight: 0 }}>
      <SideBar />
      <div className="content-wrapper">
        <HeaderNavBar />
        <div className="main-content" style={{ minWidth: 0, minHeight: 0 }}>
          <h2>Admin Page</h2>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
