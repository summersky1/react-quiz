import { useState } from 'react'
import Answer from './Answer'

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

const Questions = ({ questions }) => {
  console.log(questions)
  const questionList = questions
  const [currentQuestion, setCurrentQuestion] = useState({ ...questionList[0], number: 0 })

  const getAnswerList = (question) => {
    let answers = [...question.incorrect_answers, question.correct_answer]
    // shuffle answers
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    answers = answers.map(a => ({ text: a, correct: question.correct_answer === a }))
    return answers
  }

  const handleSelectAnswer = (isCorrect) => {
    console.log(isCorrect)
  }

  return (
    <div>
      <h6>{`Question ${currentQuestion.number + 1}:`}</h6>
      <p
        className="bg-primary rounded py-2 px-3"
        // dangerouslySetInnerHTML is used in case of html entities returned from the API
        // e.g. 'Rubik&rsquo;s Cube'
        dangerouslySetInnerHTML={{ __html: `${currentQuestion.question}` }}
      >
      </p>
      {getAnswerList(currentQuestion).map((answer, index) => (
        <Answer
          key={index}
          text={answer.text}
          correct={answer.correct}
          handleSelectAnswer={handleSelectAnswer} />
      ))}
      <p>Category: {currentQuestion.category}, Difficulty: {currentQuestion.difficulty}</p>
    </div>
  )
}

export default Questions
