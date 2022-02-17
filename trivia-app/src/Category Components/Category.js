import React from 'react'
import { useNavigate } from "react-router-dom"

function Category() {

  let navigate = useNavigate();

  console.log("test")
  return (
    <div>
        <h1>This is the Category Section</h1>
        <button onClick={() => {navigate("/Difficulty")}}>General Knowledge</button>
    </div>
  )
}

export default Category