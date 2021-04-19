import { useState } from 'react'
import axios from 'axios';
import "./App.css"
import Menu from "./components/Menu"
import Questions from './components/Questions';

const endpoint = "https://opentdb.com/api.php"

function App() {
  const [inGame, setInGame] = useState(false)
  const [questions, setQuestions] = useState([])

  const handleStart = async (categoryId, selectedDifficulty) => {
    const response = await axios.get(endpoint, {
      params: {
        amount: 10,
        category: categoryId,
        difficulty: selectedDifficulty.toLowerCase()
      }
    })
    setQuestions(response.data.results)
    setInGame(true)
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">React Quiz</h2>
      {!inGame && <Menu handleStart={handleStart} />}
      {inGame && <Questions questions={questions} />}
    </div>
  );
}

export default App;
