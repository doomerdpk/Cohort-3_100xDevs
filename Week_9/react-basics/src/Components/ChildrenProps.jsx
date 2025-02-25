//Use Case: Suppose you have a use case where you have to render more then one similar cards with separate contents.
//Solution1: Render multiple cards by passing different props to each other.
//Solution2: Use Children props (Cleaner way to write)

import React from "react";

export default function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "20px",
        margin: "10px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
}
