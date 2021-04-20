import { useState } from 'react'
import Question from './Question'
import Results from './Results'

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

const QuestionList = ({ questions, handlePlayAgain }) => {
  const [currentQuestion, setCurrentQuestion] = useState({ ...questions[0], number: 0 })
  const [numberCorrect, setNumberCorrect] = useState(0)
  const [questionsComplete, setQuestionsComplete] = useState(false)

  const generateKey = () => {
    return Math.floor(Math.random() * 1000000)
  }

  const getShuffledAnswers = () => {
    let answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    // shuffle answers
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    answers = answers.map(a => ({ text: a, key: generateKey() }))
    return answers
  }

  const getNextQuestion = (previousCorrect) => {
    if (previousCorrect) {
      setNumberCorrect(numberCorrect + 1)
    }
    let nextQuestionIndex = currentQuestion.number + 1
    if (questions.length === nextQuestionIndex) {
      setQuestionsComplete(true)
    } else {
      setCurrentQuestion({ ...questions[nextQuestionIndex], number: nextQuestionIndex })
    }
  }

  return (
    <div>
      { !questionsComplete && (
        <Question
          questionDetails={{ ...currentQuestion, shuffledAnswers: getShuffledAnswers() }}
          getNextQuestion={getNextQuestion}
        />
      )}
      { questionsComplete && (
        <Results
          numberOfQuestions={questions.length}
          numberCorrect={numberCorrect}
          handlePlayAgain={handlePlayAgain}
        />
      )}
    </div>
  )
}

export default QuestionList
