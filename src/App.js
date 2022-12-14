import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  // Add the code for the minus function
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  // Add the code for the plus function
  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  // Add the code for the divide function
  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }


    
    const resetInput = (e) => {
      e.preventDefault();
      setInput('');
    };
  
  const handleUserInput = (e) => {
    setInput(e.target.value);
  };
  function resetResult(e) {
    // Add the code for the resetResult function
    e.preventDefault();
    setResult('');
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <h3>{result}</h3>
        <p ref={resultRef}>{/* add the value of the current total */}</p>
        <input
          value={input} placeholder='type a number' onChange={handleUserInput} 
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        {/* Add the subtract button */}
        <button onClick={minus}>subtract</button>
        {/* Add the multiply button */}
        <button onClick={times}>multiply</button>
        {/* Add the divide button */}
        <button onClick={divide}>divide</button>
        {/* Add the resetInput button */}
        <button className="reset-input" onClick={resetInput}>
          Reset Input
        </button>
        {/* Add the resetResult button */}
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
