import React, { useEffect, useState } from "react";
import { keypad } from "../keypad";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(keypad);

  // useEffect(() => {
  //   setLetters(keypad);
  // }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key];
          return (
            <div key={letter.key} className={color}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
}
