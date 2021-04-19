import { useState } from 'react'
import axios from 'axios';
import "./App.css"
import Menu from "./components/Menu"

const endpoint = "https://opentdb.com/api.php"

function App() {
  const [inGame, setInGame] = useState(false)

  const handleStart = async (categoryId, selectedDifficulty) => {
    const response = await axios.get(endpoint, {
      params: {
        amount: 10,
        category: categoryId,
        difficulty: selectedDifficulty.toLowerCase()
      }
    })
    console.log(response.data.results)
  }

  return (
    <div className="container my-3">
      <h2 className="text-center">React Quiz</h2>
      {!inGame && <Menu handleStart={handleStart} />}
    </div>
  );
}

export default App;
