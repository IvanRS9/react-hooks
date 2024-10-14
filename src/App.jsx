import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateHook from './Components/StateHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-center mb-4'>Hooks de React</h1>
        <StateHook />
      </div>
    </>
  )
}

export default App
