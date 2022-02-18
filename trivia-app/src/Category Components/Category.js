import React from 'react'
import { useNavigate } from "react-router-dom"

function Category() {

  let navigate = useNavigate();

  console.log("test")
  return (
    <div>
        <h1 className='choose'>Choose your knowledge of expertise</h1>
        <button className='categoryButton' onClick={() => {navigate("/Difficulty")}}>General Knowledge</button>
    </div>
  )
}

export default Category