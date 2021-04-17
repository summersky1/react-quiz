import { useState } from 'react'
import Menu from "./components/Menu"

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

  return (
    <div className="container py-3">
      {!inGame && <Menu categories={quizCategories} />}
    </div>
  );
}

export default App;
