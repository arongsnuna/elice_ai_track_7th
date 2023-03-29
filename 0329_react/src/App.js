import { useState } from "react";
import './App.css'
import counterstyle from './Counter.module.css';

function Counter({title, initValue}){
  const [count, setCount] =  useState(initValue);
  function up(){
    setCount(count+1);
  }
  return(
    <div>
      <h1 className="title">{title}</h1>
      <button onClick={up} className={counterstyle.rightSpace}>+</button> 👉🏻 {count}
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter title="뿡 카운터💨" initValue={0}></Counter>
    </div>
  );
}

export default App;
