import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/card1'


function App() {
  

  return (
    <div>
      <h1>
        Components
      </h1>
      <Card1 
        title="Course 1"
        description="Learn and build components with React"
        buttonText="Start Course"
      />
      
      <Card1
       title="Course 2"
       description="Now let's start building Websites with React"
       buttonText="Continue Course"
      />
    </div>
  )
}

export default App
