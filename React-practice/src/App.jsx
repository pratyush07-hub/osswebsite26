
import React, { useState,useEffect } from 'react'

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

useEffect(function(){
  setInterval(function(){
    setCount(function(count){
      return count+1;
    })
  },1000)
  console.log("mounted");
  
},[]);
function increaseCount(){
  setCount(count+1);
}

  return <div>
    <h1 id='text'>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    
  </div>
  
}

export default App
