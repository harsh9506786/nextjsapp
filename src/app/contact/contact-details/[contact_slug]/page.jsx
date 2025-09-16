import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>This is Contact page</h1>
      <h2>Contact detail of {params.contact_slug}</h2>
    </div>
  );
};

export default page;