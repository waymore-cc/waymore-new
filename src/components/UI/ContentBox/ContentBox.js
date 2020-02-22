import React from "react"
import "./contentBox.css"

const ContentBox = props => {
  var chosenWidth = "full"

  if (props.centered) {
    chosenWidth = "centered"
  }

  return (
    <>
      <div className={chosenWidth}>{props.children}</div>
    </>
  )
}

export default ContentBox
