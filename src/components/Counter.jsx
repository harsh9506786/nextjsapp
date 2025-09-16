"use client";

import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // If the count is already 10, don't start the interval
    if (count >= 10) {
      return;
    }

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // This cleanup function will run when the component unmounts
    // OR when the dependencies (count) change
    return () => {
      clearInterval(intervalId);
    };
  }, [count]); // The dependency array now includes 'count'

  return (
    <div>
      <h1>This is the Counter Page</h1>
      <p>Current Count: {count}</p>
    </div>
  );
};

export default Counter;
