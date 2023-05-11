import { useState } from 'react'
import './App.css'

// eslint-disable-next-line react/prop-types
function ClickableButton({ owner }) {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount((prevCount) => prevCount + 1)

  return (
    <div>
      <p>This button owner is {owner}</p>
      <button onClick={handleClick}>
        count is {count}
      </button>
    </div>
  )
}

function App() {
  const names = ['John', 'Jane', 'Joe', 'Alfred'];

  return (
    <div>
      {names.map((name) => (
        <div className="card" key={name}>
          <ClickableButton owner={name}/>
        </div>
      ))}
    </div>
  )
}

export default App
