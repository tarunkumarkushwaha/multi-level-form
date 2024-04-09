import { useState } from 'react'
import './App.css'
import DemoComponent from './component/DemoComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DemoComponent />
    </>
  )
}

export default App
