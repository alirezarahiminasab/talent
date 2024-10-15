import React from "react";

const Card = ({ onClick, children }) => (
  <div
    className="border bg-white rounded-lg p-4 mb-4 cursor-pointer shadow-lg shadow-slate-200"
    onClick={onClick}
  >
    {children}
  </div>
);

export default Card;
