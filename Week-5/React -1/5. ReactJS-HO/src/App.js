import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {
  const cohorts = [
    {
      cohortName: "INTADMDF10 .NET FSD",
      startedOn: "22-Feb-2022",
      status: "ongoing",
      coach: "John",
      trainer: "Ajith",
    },
    {
      cohortName: "ADM21JF014 Java FSD",
      startedOn: "10-Jan-2022",
      status: "completed",
      coach: "Peter",
      trainer: "Kevin",
    },
    {
      cohortName: "INTADMDF11 React",
      startedOn: "15-Mar-2022",
      status: "ongoing",
      coach: "Alex",
      trainer: "Robert",
    },
  ];

  return (
    <div>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
