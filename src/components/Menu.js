import { useState, useEffect } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types'

const categoryEndpoint = "https://opentdb.com/api_category.php"

const difficulties = [
  "Easy",
  "Medium",
  "Hard"
]

const Menu = ({ handleStart }) => {
  const [categories, setCategories] = useState({})
  const [genreList, setGenreList] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulties[0])

  useEffect(() => {
    const fetchCategoriesFromApi = async () => {
      const response = await axios.get(categoryEndpoint)
      const categoryListRaw = response.data.trivia_categories
      const categoriesWithGenre = {}
      const genreSet = new Set()
      categoryListRaw.forEach(c => {
        if (!c.name.includes(":")) {
          c.name = "Miscellaneous: " + c.name
        }
        const categoryElements = c.name.split(':')
        const genre = categoryElements[0]
        const name = categoryElements[1].trim()
        categoriesWithGenre[name] = ({ id: c.id, genre: genre })
        genreSet.add(genre)
      });
      setCategories(categoriesWithGenre)
      setGenreList(Array.from(genreSet))
      setSelectedCategory(Object.keys(categoriesWithGenre)[0])
    }
    fetchCategoriesFromApi()
  }, [])

  const getCategoriesInGenre = (genre) => {
    const categoriesForGenre = []
    Object.entries(categories).forEach(([name, info]) => {
      if (info.genre === genre) {
        categoriesForGenre.push({ name, id: info.id })
      }
    })
    return categoriesForGenre
  }

  return (
    <div>
      {/* Category selection */}
      <h6>Choose category...</h6>
      <select
        className="custom-select shadow-sm"
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        {genreList.map(genre => (
          <optgroup key={genre} label={" " + genre}>
            {getCategoriesInGenre(genre).map(c => (
              <option key={c.id}>{c.name}</option>
            ))}
          </optgroup>
        ))}
      </select>

      {/* Difficulty selection */}
      <h6 className="mt-3">Choose difficulty...</h6>
      <select
        className="custom-select shadow-sm"
        onChange={(event) => setSelectedDifficulty(event.target.value)}
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
          onClick={() => handleStart(categories[selectedCategory].id, selectedDifficulty)}
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
