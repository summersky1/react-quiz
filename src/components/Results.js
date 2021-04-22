import PropTypes from 'prop-types'

const Results = ({ numberOfQuestions, numberCorrect, handlePlayAgain }) => {
  const getResultsMessage = () => {
    const percent = numberCorrect / numberOfQuestions * 100
    if (percent < 40) {
      return "It's ok, you're just having a bad day."
    } else if (percent < 70) {
      return "Not bad, you just need to brush up a bit."
    } else if (percent < 100) {
      return "Well done! You've accumulated quite a bit of knowledge."
    } else {
      return "Perfect! Perhaps try another category and aim for glory."
    }
  }

  return (
    <div className="text-center border rounded-lg my-4">
      <h4 className="my-3">Thanks for playing!</h4>
      <h4>Final score:</h4>
      <h1>{numberCorrect}/{numberOfQuestions}</h1>
      <h4>{getResultsMessage()}</h4>
      <div className="bg-white rounded-pill mx-5 my-4">
        <button
          type="button"
          className="btn btn-block btn-outline-primary rounded-pill"
          onClick={handlePlayAgain}
        >
          Play again!
        </button>
      </div>
    </div>
  )
}

Results.propTypes = {
  numberOfQuestions: PropTypes.number,
  numberCorrect: PropTypes.number,
  handlePlayAgain: PropTypes.func,
}

export default Results
