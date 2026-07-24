import React from "react";

function GuestPage() {
  return (
    <div className="card">
      <h2>Guest User</h2>

      <h3>Flight Details</h3>

      <table>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>₹5500</td>
          </tr>

          <tr>
            <td>6E-105</td>
            <td>Chennai</td>
            <td>Mumbai</td>
            <td>₹4200</td>
          </tr>

          <tr>
            <td>SG-301</td>
            <td>Bangalore</td>
            <td>Kolkata</td>
            <td>₹6000</td>
          </tr>
        </tbody>
      </table>

      <p className="note">
        Login to book tickets.
      </p>
    </div>
  );
}

export default GuestPage;
