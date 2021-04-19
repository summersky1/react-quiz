import { useState } from 'react'

const Menu = ({ categories, handleStart }) => {
  // initialise selected category to first key in object
  const [category, setCategory] = useState(Object.keys(categories)[0])

  return (
    <div>
      <h5>Choose category...</h5>
      <select
        className="custom-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        {Object.entries(categories).map(([name, id]) => (
          <option key={id}>{name}</option>
        ))}
      </select>

      <div className="bg-white rounded mt-3">
        <button
          type="button"
          className="btn btn-outline-primary btn-block"
          onClick={() => handleStart(category)}
        >
          Start quiz
        </button>
      </div>
    </div>
  )
}

export default Menu