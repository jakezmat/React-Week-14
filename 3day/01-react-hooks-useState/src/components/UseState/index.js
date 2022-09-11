import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme,setTheme] = useState("light");
  const [count, setCount] = useState(0)

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <h2>Current Theme: {theme}</h2>
      <button className={theme==='light'?'dark':'light'} onClick={() => setTheme('light')}>Light</button>
      <button className={theme==='light'?'dark':'light'}onClick={() => setTheme('dark')}>Dark</button>
      <button className={theme==='light'?'dark':'light'}onClick={() => theme === 'dark' ? setTheme('light'):setTheme('dark')}>Theme Switcher</button>
      <h2 >Count: {count}</h2>
      <button className={theme==='light'?'dark':'light'}onClick={() => setCount((prevCount)=> prevCount+1)}>Inckermont</button>
      <button className={theme==='light'?'dark':'light'}onClick={() => setCount((prevCount)=> prevCount-1)}>Deckermont</button>

    </div>
  );
};

export default UseState;
