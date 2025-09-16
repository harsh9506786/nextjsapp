import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>This is the course detail page </h1>
      <h2>Course detail of {params.course_slug}</h2>
    </div>
  );
};

export default page;
