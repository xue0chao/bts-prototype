import './App.css';
import GameScreen from './GameScreen';
import gameData from './gameData.json';

function App() {
  return (
    <div className="App">
      <GameScreen data={gameData}/>
    </div>
  );
}

export default App;
