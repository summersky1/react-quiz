import { useState } from 'react'

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
    <div className="bg-white rounded my-3">
      <button
        type="button"
        className={`btn btn-block ${determineButtonClass()}`}
        dangerouslySetInnerHTML={{ __html: `${text}` }}
        onClick={handleClick}
        disabled={showResult && !clicked}
      >
      </button>
    </div>
  )
}

export default Answer
