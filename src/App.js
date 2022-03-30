import useGameLogic from "./useGameLogic";
import "./App.css";

function App() {
  const { textAreaRef, text, onChange, timerOn, timer, startTimer, wordCount } =
    useGameLogic(30);

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
        ref={textAreaRef}
        type="text"
        value={text}
        onChange={onChange}
        disabled={!timerOn}
      />
      <h4>Time reminaing: {timer}</h4>
      <button onClick={startTimer} disabled={timerOn}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
