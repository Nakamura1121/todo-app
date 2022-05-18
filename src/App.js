import React, { useState } from 'react'


function App() {
  const [color, setColor] = useState("red")
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={()=> setColor("blue")}
        >Blue</button>
    </> 
  )
}

export default App



