import React from "react";
import officeImg from "./office.jpg";
function App() {
  const offices = [
    {
      id: 1,
      name: "Tech Park Office",
      rent: 55000,
      address: "Madhapur, Hyderabad"
    },
    {
      id: 2,
      name: "Business Hub",
      rent: 75000,
      address: "Gachibowli, Hyderabad"
    },
    {
      id: 3,
      name: "Corporate Plaza",
      rent: 45000,
      address: "Bangalore"
    }
  ];
  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space Rental App</h1>

      <img
        src={officeImg}
        alt="Office Space"
        width="500"
        height="300"
      />

      <h2>Available Office Spaces</h2>

      {offices.map((office) => (
        <div
          key={office.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "15px",
            width: "350px"
          }}
        >
          <h3>{office.name}</h3>
          <p>
            <b>Address:</b> {office.address}
          </p>
          <p
            style={{
              color: office.rent < 60000 ? "red" : "green",
              fontWeight: "bold"
            }}
          >
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
