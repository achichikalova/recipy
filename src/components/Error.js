import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  );
};

export default Error;
