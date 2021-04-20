import { useState } from 'react'
import Question from './Question'

// Example question object
// {
//     "category": "Geography",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "Which country inside the United Kingdom does NOT appear on its flag, the Union Jack?",
//     "correct_answer": "Wales",
//     "incorrect_answers": [
//         "Scotland",
//         "Ireland",
//         "Isle of Wight"
//     ]
// }

const QuestionList = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState({ ...questions[0], number: 0 })
  const [numberCorrect, setNumberCorrect] = useState(0)

  const getShuffledAnswers = () => {
    let answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    // shuffle answers
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers
  }

  const handleCorrectAnswer = () => {
    setNumberCorrect(numberCorrect + 1)
  }

  return (
    <div>
      <Question
        questionDetails={{ ...currentQuestion, shuffledAnswers: getShuffledAnswers() }}
        handleCorrectAnswer={handleCorrectAnswer}
      />
    </div>
  )
}

export default QuestionList
