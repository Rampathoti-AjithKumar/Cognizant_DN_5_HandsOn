import React from "react";

function UserPage() {
  return (
    <div className="card">
      <h2>Welcome User</h2>

      <h3>Flight Details</h3>

      <table>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>₹5500</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

          <tr>
            <td>6E-105</td>
            <td>Chennai</td>
            <td>Mumbai</td>
            <td>₹4200</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

          <tr>
            <td>SG-301</td>
            <td>Bangalore</td>
            <td>Kolkata</td>
            <td>₹6000</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;
