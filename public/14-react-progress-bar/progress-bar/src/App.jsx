import React, { useState } from 'react'
import './App.css'

const Progress = ({ done }) => {

  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }
    setStyle(newStyle)
  }, 1000)



  return (
    <div class="progress">
      <div class="progress-done" style={style}>
        {done}%
      </div>
    </div>
  )
}

function App() {


  return (
    <>
      <h1>React Progress Bar</h1>
      <Progress done="70" />
    </>
  )
}

export default App
