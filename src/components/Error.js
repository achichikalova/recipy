import React from "react";
import "./Error.scss";

const Error = ({ error }) => {
  return (
    <div className="error">
      {error && (
        <h1>
          "Sorry, it looks like you've reached the free request limit. <br></br>{" "}
          Could you return tomorrow, please?"
        </h1>
      )}
    </div>
  );
};

export default Error;
