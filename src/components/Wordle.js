import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    // cleanup function: detatch event listener
    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  return (
    <div>
      <div>current guess: {currentGuess}</div>
      <div>solution: {solution}</div>
    </div>
  );
}
