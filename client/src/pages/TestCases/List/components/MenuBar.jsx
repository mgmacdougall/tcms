import React from "react";

function MenuBar({ toggleForm }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <button
        className="btn btn-primary"
        type="button"
        value="Create"
        onClick={toggleForm}
      >
        Create
      </button>
      <button className="btn btn-primary" type="button" value="Delete">
        Delete
      </button>
      <button className="btn btn-primary" type="button" value="Edit">
        Edit
      </button>
    </div>
  );
}

export default MenuBar;
