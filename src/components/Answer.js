const Answer = ({ text, correct, handleSelectAnswer }) => {
  return (
    <div className="bg-white rounded my-3">
      <button
        type="button"
        className="btn btn-outline-primary btn-block"
        dangerouslySetInnerHTML={{ __html: `${text}` }}
        onClick={() => handleSelectAnswer(correct)}
      >
      </button>
    </div>
  )
}

export default Answer
