import { useState } from 'react'
import Cards from './components/Cards';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Lexikon</h1>
      < Cards />
    </>
  )
}

export default App
