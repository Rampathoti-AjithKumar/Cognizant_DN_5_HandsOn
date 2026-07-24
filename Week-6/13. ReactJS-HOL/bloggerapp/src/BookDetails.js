import React from "react";

function BookDetails() {

  const books = [
    {
      id: 1,
      name: "Java Programming",
      author: "Herbert Schildt",
      price: 650
    },
    {
      id: 2,
      name: "Python Basics",
      author: "Guido",
      price: 500
    },
    {
      id: 3,
      name: "ReactJS",
      author: "Jordan Walke",
      price: 700
    }
  ];

  return (
    <div className="card">
      <h2>Book Details</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>₹{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default BookDetails;
