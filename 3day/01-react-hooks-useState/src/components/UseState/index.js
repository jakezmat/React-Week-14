import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme,setTheme] = useState("light");
  const [count, setCount] = useState(0)
  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Downvote</button>

    </div>
  );
};

export default UseState;
