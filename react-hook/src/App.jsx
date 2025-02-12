import React, { Component } from 'react'
import Counter from './components/Counter'
import Clock from './components/Clock'
import './App.css'
import SetStateChange from './components/SetStateChange'

function App() {
  return (
    <div>
      <Counter />
      <Clock />
      <SetStateChange />
    </div>
  )
}

export default App
