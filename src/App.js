import { useState } from 'react'
import axios from 'axios';
import "./App.css"
import Menu from "./components/Menu"
import QuestionList from './components/QuestionList';

const endpoint = "https://opentdb.com/api.php"

function App() {
  const [inGame, setInGame] = useState(false)
  const [questionList, setQuestionList] = useState([])

  const handleStart = async (categoryId, selectedDifficulty) => {
    const response = await axios.get(endpoint, {
      params: {
        amount: 10,
        category: categoryId,
        difficulty: selectedDifficulty.toLowerCase()
      }
    })
    setQuestionList(response.data.results)
    setInGame(true)
  }

  const handlePlayAgain = () => {
    setInGame(false)
    setQuestionList([])
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">React Quiz</h2>
      {!inGame && <Menu handleStart={handleStart} />}
      {inGame && <QuestionList questions={questionList} handlePlayAgain={handlePlayAgain} />}
    </div>
  );
}

export default App;
