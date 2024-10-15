import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateHook from './Components/StateHook'
import State from './Components/State'
import Effect from './Components/Effect'
import VideoState from './Components/VideoState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-center mb-4'>Hooks de React</h1>
        {/* <StateHook /> */}
        {/* <State /> */}
        {/* <Effect /> */}
        <VideoState />
      </div>
    </>
  )
}

export default App
