import React from "react";

const layout = ({ children }) => {
  return (
    <div className="border-2 border-amber-50">
      layout is course layout
      {children}
    </div>
  );
};

export default layout;
