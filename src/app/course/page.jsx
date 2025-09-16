import Link from "next/link";
import React from "react";

const Course = () => {
  return (
    <main>
      <h1>Course page</h1>
      <ul>
        <li><Link href="/course/course-details/course-1">Course-1</Link></li>
        <li><Link href="/course/course-details/course-2">Course-2</Link></li>
        <li><Link href="/course/course-details/course-3">Course-3</Link></li>
        <li><Link href="/course/course-details/course-4">Course-4</Link></li>
        <li><Link href="/course/course-details/course-5">Course-5</Link></li>
        <li><Link href="/course/course-details/course-6">Course-6</Link></li>


      </ul>
    </main>
  );
};

export default Course;
