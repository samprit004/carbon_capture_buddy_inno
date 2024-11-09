import { useState } from 'react'
import Nav from './components/nav'
import EcoFriendlyPage from './EcoFriendlyPage'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <EcoFriendlyPage/>
    </>
  )
}

export default App
