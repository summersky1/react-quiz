const Results = ({ numberOfQuestions, numberCorrect, handlePlayAgain }) => {
  return (
    <div className="text-center border rounded-lg my-4">
      <h4 className="my-3">Thanks for playing!</h4>
      <h4>Final score:</h4>
      <h1>{numberCorrect}/{numberOfQuestions}</h1>
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

export default Results
