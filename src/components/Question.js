import { useState } from 'react'
import Answer from './Answer'
import PropTypes from 'prop-types'

const Question = ({ questionDetails, getNextQuestion }) => {
  const [showResult, setShowResult] = useState(false)
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false)

  const handleSelectAnswer = (isCorrect) => {
    if (isCorrect) {
      setAnsweredCorrectly(true)
    }
    setShowResult(true)
  }

  const handleGetNextQuestion = () => {
    getNextQuestion(answeredCorrectly)
    setShowResult(false)
    setAnsweredCorrectly(false)
  }

  return (
    <div className={!showResult ? "animate__animated animate__fadeIn animate__fast" : ""}>
      <h6>{`Question ${questionDetails.index + 1}:`}</h6>
      <p
        className="bg-primary rounded py-2 px-3"
        // dangerouslySetInnerHTML is used in case of html entities returned from the API
        // e.g. 'Rubik&rsquo;s Cube'
        dangerouslySetInnerHTML={{ __html: `${questionDetails.question}` }}
      >
      </p>
      {questionDetails.shuffledAnswers.map(answer => (
        <Answer
          key={answer.key}
          text={answer.text}
          correct={answer.text === questionDetails.correct_answer}
          handleSelectAnswer={handleSelectAnswer}
          showResult={showResult}
        />
      ))}
      {showResult && (
        <button
          type="button"
          className="btn btn-block btn-primary rounded-pill shadow-sm mb-2"
          onClick={handleGetNextQuestion}
        >
          {(questionDetails.index + 1) === questionDetails.total ? "Show final score..." : "Next question..."}
        </button>
      )}
      <p>{questionDetails.category}, Difficulty: {questionDetails.difficulty}</p>
    </div>
  )
}

Question.propTypes = {
  questionDetails: PropTypes.object,
  getNextQuestion: PropTypes.func,
}

export default Question
