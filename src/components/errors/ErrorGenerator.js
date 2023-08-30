/* eslint-disable */
import React, { useState } from "react";

const ErrorGenerator = () => {
  const [num, setNum] = useState(0);
  const handleGenerateError = () => {
    setNum(num + 1);
  };

  if (num === 1) {
    throw new Error("Este es un error generado por el usuario.");
  }

  return (
    <div>
      <button
        className="rounded-3xl bg-blue-secondary text-white text-center"
        onClick={handleGenerateError}
      >
        Generar error
      </button>
    </div>
  );
};

export default ErrorGenerator;
