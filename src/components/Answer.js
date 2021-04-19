const Answer = ({ answer }) => {
  return (
    <div className="bg-white rounded my-3">
      <button
        type="button"
        className="btn btn-outline-primary btn-block"
        dangerouslySetInnerHTML={{ __html: `${answer}` }}
      >
      </button>
    </div>
  )
}

export default Answer
