import React from "react";

function TwoChartLayout() {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* <!-- Chart Card 1 (Left) --> */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-0">
              <h5 className="card-title mb-0">Sales Analytics</h5>
            </div>
            <div className="card-body">
              {/* <!-- Insert your Chart Library Canvas or SVG here --> */}
              <div
                className="chart-container"
                style={{ position: "relative", height: "300px" }}
              >
                <canvas id="salesChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Chart Card 2 (Right) --> */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-0">
              <h5 className="card-title mb-0">User Growth</h5>
            </div>
            <div className="card-body">
              {/* <!-- Insert your Chart Library Canvas or SVG here --> */}
              <div
                className="chart-container"
                style={{ position: "relative", height: "300px" }}
              >
                <canvas id="growthChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoChartLayout;
