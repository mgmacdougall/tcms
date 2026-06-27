import { useState } from "react";
import BasicDetailsSection from "./BasicDetailsSection.jsx";
import StepsSection from "./StepsSection.jsx";

function TestCaseForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    preconditions: "",
    priority: "Medium",
    status: "Draft",
    version: 1,
    steps: [],
    tags: [],
    createdBy: "userId",
    updatedBy: "userId",
    project: "projectId",
  });

  const handleFormSubmit = async () => {
    console.log("here");
  };
  return (
    <>
      <h2>Test Case Details</h2>
      <form onSubmit={handleFormSubmit}>
        <BasicDetailsSection form={form} setForm={setForm} />
        <StepsSection form={form} setForm={setForm} />

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default TestCaseForm;
