import { useState } from "react";
import StepItem from "./StepItem.jsx";
function StepsSection({ form, setForm }) {
  const [steps, setSteps] = useState([]);

  const handleAddStep = (e) => {
    console.log(e.target);
    let newObject = {
      stepNumber: 1,
      action: "Navigate to /login page",
      expectedResult: "Login page loads successfully",
    };
    setSteps([...steps, newObject]);
  };

  return (
    <div>
      {/* button to active add step form/ */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">#</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((el) => (
            <StepItem steps={el} />
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" onClick={handleAddStep}>
        Add Step
      </button>
    </div>
  );
}

export default StepsSection;
