import { useEffect, useState } from "react";
import { words } from "./words";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSolution(randomWord.word);
    console.log(randomWord);
  }, []);

  return (
    <div className="App">
      <h1>Wordle</h1>
      <p>Solution: {solution}</p>
    </div>
  );
}

export default App;
