import React from "react";

function BlogDetails() {

  const blogs = [
    {
      id: 1,
      title: "React Basics",
      author: "Ajith"
    },
    {
      id: 2,
      title: "Java Collections",
      author: "Hari"
    },
    {
      id: 3,
      title: "Python Tips",
      author: "Ramu"
    }
  ];

  return (
    <div className="card">

      <h2>Blog Details</h2>

      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <b>{blog.title}</b> - {blog.author}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default BlogDetails;
