import { useState } from 'react'
import axios from 'axios';
import Menu from "./components/Menu"

const endpoint = "https://opentdb.com/api.php"

// list of categories here: https://opentdb.com/api_category.php
const quizCategories = {
  "General Knowledge": 9,
  "Film": 11,
  "Television": 14,
  "Video Games": 15,
  "Computers": 18,
  "Geography": 22,
  "Comics": 29,
  "Anime and Manga": 31,
}

function App() {
  const [inGame, setInGame] = useState(false)

  const handleStart = async (selectedCategory) => {
    console.log(selectedCategory)
    const response = await axios.get(endpoint, {
      params: {
        amount: 10,
        category: quizCategories[selectedCategory]
      }
    })
    console.log(response.data.results)
  }

  return (
    <div className="container py-3">
      {!inGame && <Menu categories={quizCategories} handleStart={handleStart} />}
    </div>
  );
}

export default App;
