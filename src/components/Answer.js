const Answer = ({ answer }) => {
  return (
    <div className="bg-white rounded my-3">
      <button
        type="button"
        className="btn btn-outline-primary btn-block"
        // dangerouslySetInnerHTML is used in case of html entities returned from the API
        // e.g. 'Rubik&rsquo;s Cube'
        dangerouslySetInnerHTML={{ __html: `${answer}` }}
      >
      </button>
    </div>
  )
}

export default Answer
