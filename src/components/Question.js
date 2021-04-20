import Answer from './Answer'

const Question = ({ questionDetails }) => {
  const handleSelectAnswer = (isCorrect) => {
    console.log(isCorrect)
  }

  return (
    <div>
      <h6>{`Question ${questionDetails.number + 1}:`}</h6>
      <p
        className="bg-primary rounded py-2 px-3"
        // dangerouslySetInnerHTML is used in case of html entities returned from the API
        // e.g. 'Rubik&rsquo;s Cube'
        dangerouslySetInnerHTML={{ __html: `${questionDetails.question}` }}
      >
      </p>
      {questionDetails.shuffledAnswers.map((answer, index) => (
        <Answer
          key={index}
          text={answer}
          correct={answer === questionDetails.correct_answer}
          handleSelectAnswer={handleSelectAnswer}
        />
      ))}
      <p>Category: {questionDetails.category}, Difficulty: {questionDetails.difficulty}</p>
    </div>
  )
}

export default Question
