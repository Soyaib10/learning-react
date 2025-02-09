import { useState } from 'react'
import reactLogo from './assets/react-logo.png';
import './App.css'

function App() {
  const currentDate = new Date(2019, 1, 1, 19)
  const currentHour = currentDate.getHours();

  const customStyle = {
    color : "black"
  }

  let message = ""
  if (currentHour > 0 && currentHour <= 12) {
    message = "Good Morning"
    customStyle.color = "black"
  } else if (currentHour > 12 && currentHour <= 18) {
    message = "Good Afternoon"
    customStyle.color = "yellow"
  } else {
    message = "Good Evening"
    customStyle.color = "red"
  }

  return (
    <div>
      <h1 className='greeting' style={customStyle}>Assalamualaikum, {message}</h1>
    </div>
  );
} 

export default App;
