import React, { useContext } from "react";
import { Apicontext } from "../App";

const Error = () => {
  const { setError, inputRef } = useContext(Apicontext);
  return (
    <>
      <div className="erromsg d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center fw-bold ">
          Please enter the valid city name.
        </h1>
        <button
          className="btn btn-primary "
          onClick={() => {
            setError(0);
            inputRef.current.value = "";
          }}
        >
          Try Again
        </button>
      </div>
    </>
  );
};

export default Error;
