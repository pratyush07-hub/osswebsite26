
import React, { useState } from 'react'

const App = () => {
  return (
    <div>
      Hlo 
       <Counter></Counter>
    </div>
   
  )
}
function Counter(){
const [count,setCount] = useState(0)
  function increaseCount(){
    setCount(count + 1);

  }
  function DecreaseCount(){
    setCount(count-1);
  }

  function ResetCount(){
    setCount(0)
  }

  return <div>
    <h1 id='text'>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={DecreaseCount}>Decrease count</button>
    <button onClick={ResetCount}>Reset count</button>
  </div>
  
}

export default App
