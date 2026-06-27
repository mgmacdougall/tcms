import React from "react";

function BasicDetailsSection({ form, setForm }) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          value={form.title}
          type="text"
          className="form-control"
          id="title"
          aria-describedby="titleHelp"
          placeholder="Enter title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Example textarea</label>
        <textarea
          className="form-control"
          id="description"
          rows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="preconditions">preconditions</label>
        <textarea
          className="form-control"
          id="preconditions"
          rows={3}
          value={form.preconditions}
          onChange={(e) => setForm({ ...form, preconditions: e.target.value })}
        />
      </div>
    </div>
  );
}

export default BasicDetailsSection;
