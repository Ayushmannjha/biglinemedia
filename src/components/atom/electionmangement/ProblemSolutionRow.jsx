import React from "react";

const ProblemSolutionRow = ({ problem, solution }) => (
  <tr className="border-t">
    <td className="p-3">{problem}</td>
    <td className="p-3">{solution}</td>
  </tr>
);

export default ProblemSolutionRow;
