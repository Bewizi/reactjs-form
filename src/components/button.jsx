// import React from "react";

export const ActionButton = () => {
  return (
    <div>
      <button type="submit" className="border mt-5 px-5 py-1 rounded">
        Submit
      </button>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const Button = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};
