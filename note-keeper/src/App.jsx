import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Note from './components/Note'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header />
      <Note
        title="Hello Brothers"
        description="I don't know what to say or what to do. But nothing matters."
      />
      <Note
        title="Go"
        description="It's name of a computer language. Ha Ha"
      />
      <Note
        title="React"
        description="A JavaScript library for building user interfaces."
      />
      <Note
        title="JavaScript"
        description="The language of the web, also known as ECMAScript."
      />
      <Note
        title="Python"
        description="A high-level programming language, easy to learn and powerful."
      />
      <Note
        title="C++"
        description="A powerful language used in system programming and game development."
      />
      <Note
        title="Rust"
        description="A modern system programming language focused on safety and speed."
      />
      <Note
        title="Kotlin"
        description="A cross-platform, statically typed language for modern app development."
      />
      <Note
        title="Swift"
        description="A powerful language for iOS and macOS development."
      />
      <Note
        title="Dart"
        description="A client-optimized language for fast apps on any platform."
      />

      <Footer />
    </div>
  )
}

export default App
