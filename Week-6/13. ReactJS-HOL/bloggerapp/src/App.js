import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./index.css";
function App() {
  const showBook = true;
  const showBlog = true;
  const showCourse = true;
  return (
    <div className="container">
      <h1>Blogger Application</h1>
      {/* Conditional Rendering using && */}
      {showBook && <BookDetails />}
      {/* Conditional Rendering using Ternary Operator */}
      {showBlog ? <BlogDetails /> : <h2>No Blogs Available</h2>}
      {/* Conditional Rendering using Element Variable */}
      {showCourse ? <CourseDetails /> : null}
    </div>
  );
}

export default App;
