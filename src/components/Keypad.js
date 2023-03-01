import React, { useEffect, useState } from "react";
import { keypad } from "../keypad";

export default function Keypad() {
  const [letters, setLetters] = useState(keypad);

  // useEffect(() => {
  //   setLetters(keypad);
  // }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          return <div key={letter.key}>{letter.key}</div>;
        })}
    </div>
  );
}
