import React from 'react'
import { useNavigate } from "react-router-dom"

function GenKnoDiff() {
    let navigate = useNavigate()

  return (
    <div>
      <h1>
        Difficulty Options for General Knowledge
      </h1>
      <button onClick={() => {navigate("/Questions")}} >Easy</button>
    </div>
  )
}

export default GenKnoDiff