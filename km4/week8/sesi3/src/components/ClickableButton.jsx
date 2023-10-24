import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const ClickableButton = ({ owner }) => {
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

export default ClickableButton