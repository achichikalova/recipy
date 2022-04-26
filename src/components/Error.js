import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      {error && (
        <h1>
          "Sorry, it looks like you've reached the request limit. Please, could
          you return tomorrow?"
        </h1>
      )}
    </div>
  );
};

export default Error;
