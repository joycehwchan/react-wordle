import { useEffect, useState } from "react";
import { words } from "./words";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSolution(randomWord.word);
    console.log(randomWord);
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
