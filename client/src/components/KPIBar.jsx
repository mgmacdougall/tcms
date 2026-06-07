import React from "react";

function KPIBar({ items }) {
  return (
    <div className="row g-3 mb-4">
      {items.map((kpi, index) => (
        <div className="col-md-4" key={index}>
          <div className="card shadow-sm text-center p-3">
            <h6 className="text-muted mb-1">{kpi.label}</h6>
            <h3 className="fw-bold">{kpi.value}</h3>
            {kpi.subtext && (
              <div className="text-muted small">{kpi.subtext}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KPIBar;
