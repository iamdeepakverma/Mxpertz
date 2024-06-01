import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetch1 from './comoponent/Fetch1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fetch1/>
    </>
  )
}

export default App
