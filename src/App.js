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
    const fetchedQuestions = response.data.results
    if (fetchedQuestions.length > 0) {
      setQuestionList(fetchedQuestions)
      setInGame(true)
    } else {
      alert("There are no questions for this category/difficulty combination, please choose another difficulty and/or category.")
    }
  }

  const handlePlayAgain = () => {
    setInGame(false)
    setQuestionList([])
  }

  return (
    <div className="container py-4">
      <h2 className="text-center">React Quiz</h2>
      {!inGame && <Menu handleStart={handleStart} />}
      {inGame && <QuestionList questions={questionList} handlePlayAgain={handlePlayAgain} />}
    </div>
  );
}

export default App;
