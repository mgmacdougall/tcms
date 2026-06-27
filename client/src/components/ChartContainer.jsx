import React from "react";

export default function ChartContainer({ title, children }) {
  return (
    <div
      className="card shadow-sm mb-4"
      style={{ minWidth: 0, minHeight: 0, height: "auto" }}
    >
      <div className="card-header bg-white border-bottom">
        <h5 className="mb-0">{title}</h5>
      </div>

      <div
        className="card-body"
        style={{ minWidth: 0, minHeight: 0, height: "auto" }}
      >
        {children}
      </div>
    </div>
  );
}
