import { useState } from 'react';
import './App.css';

function App() {

  const [gameStarted, setGameStarted] = useState<boolean>(false)

  const playGame = () => {
    setGameStarted(true);
  }


  return (
    <div className="App">
      <div className="Game">
        {/* <button onClick={playGame}>

        </button> */}
      </div>
    </div>
  );
}

export default App;
