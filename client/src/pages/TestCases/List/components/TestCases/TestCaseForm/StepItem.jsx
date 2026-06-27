import React from "react";

function StepItem({ steps }) {
  console.log(steps);
  return (
    <tr>
      <td scope="row">{steps.stepNumber}</td>
      <td>{steps.action}</td>
      <td>{steps.expectedResult}</td>
    </tr>
  );
}

export default StepItem;
