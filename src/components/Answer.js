import { useState } from 'react'
import PropTypes from 'prop-types'

const Answer = ({ text, correct, handleSelectAnswer, showResult }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    if (!showResult) {
      handleSelectAnswer(correct)
      setClicked(true)
    }
  }

  const determineButtonClass = () => {
    let basic = "btn-outline-primary"
    if (showResult) {
      if (correct) {
        return 'btn-success'
      } else {
        if (clicked) {
          return 'btn-danger'
        }
      }
    }
    return basic
  }

  return (
    <div className="bg-white rounded-pill my-3">
      <button
        type="button"
        className={`btn btn-block rounded-pill ${determineButtonClass()}`}
        dangerouslySetInnerHTML={{ __html: `${text}` }}
        onClick={handleClick}
        disabled={showResult && !clicked}
      >
      </button>
    </div>
  )
}

Answer.propTypes = {
  text: PropTypes.string,
  correct: PropTypes.bool,
  handleSelectAnswer: PropTypes.func,
  showResult: PropTypes.bool,
}

export default Answer
