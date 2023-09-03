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
    <div className="flex">
      <button
        className="rounded-3xl hover:bg-blue-secondary mx-auto px-3 py-1.5 font-roboto text-sm text-white text-center"
        onClick={handleGenerateError}
      >
        Generar error
      </button>
    </div>
  );
};

export default ErrorGenerator;
