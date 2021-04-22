import { useState } from 'react'
import PropTypes from 'prop-types'

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
      {/* Category selection */}
      <h6>Choose category...</h6>
      <select
        className="custom-select shadow-sm"
        onChange={(event) => setCategory(event.target.value)}
      >
        {Object.entries(categories).map(([name, id]) => (
          <option key={id}>{name}</option>
        ))}
      </select>

      {/* Difficulty selection */}
      <h6 className="mt-3">Choose difficulty...</h6>
      <select
        className="custom-select shadow-sm"
        onChange={(event) => setDifficulty(event.target.value)}
      >
        {difficulties.map((diff, index) => (
          <option key={index}>{diff}</option>
        ))}
      </select>

      {/* Start button */}
      <div className="bg-white rounded-pill shadow-sm my-4">
        <button
          type="button"
          className="btn btn-block btn-outline-primary rounded-pill"
          onClick={() => handleStart(categories[category], difficulty)}
        >
          Start quiz
        </button>
      </div>

      {/* About info */}
      <p className="text-center bg-white text-dark rounded px-3 py-1">
        Source code is&nbsp;
        <a href="https://github.com/summersky1/react-quiz" target="_blank" rel="noreferrer">here</a>
        , questions from&nbsp;
        <a href="https://opentdb.com/" target="_blank" rel="noreferrer">
          Open Trivia Database
        </a>
      </p>
    </div>
  )
}

Menu.propTypes = {
  handleStart: PropTypes.func,
}

export default Menu
