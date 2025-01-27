import 'react'
import Background from './components/background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className=' relative w-full h-screen bg-pink-500'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App
