import { useState } from 'react'

// list of categories here: https://opentdb.com/api_category.php
const categories = {
  "General Knowledge": 9,
  "Film": 11,
  "Television": 14,
  "Video Games": 15,
  "Computers": 18,
  "Geography": 22,
  "Comics": 29,
  "Anime and Manga": 31,
}

const difficulties = [
  "Easy",
  "Medium",
  "Hard"
]

const Menu = ({ handleStart }) => {
  // initialise to category/difficulty to first value
  const [category, setCategory] = useState(Object.keys(categories)[0])
  const [difficulty, setDifficulty] = useState(difficulties[0])

  return (
    <div>
      <h6>Choose category...</h6>
      <select
        className="custom-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        {Object.entries(categories).map(([name, id]) => (
          <option key={id}>{name}</option>
        ))}
      </select>

      <h6 className="mt-3">Choose difficulty...</h6>
      <select
        className="custom-select"
        onChange={(event) => setDifficulty(event.target.value)}
      >
        {difficulties.map((diff, index) => (
          <option key={index}>{diff}</option>
        ))}
      </select>

      <div className="bg-white rounded-pill mt-4">
        <button
          type="button"
          className="btn btn-block btn-outline-primary rounded-pill"
          onClick={() => handleStart(categories[category], difficulty)}
        >
          Start quiz
        </button>
      </div>
    </div>
  )
}

export default Menu
