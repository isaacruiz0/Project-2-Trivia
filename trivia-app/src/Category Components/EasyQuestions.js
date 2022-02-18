import React from 'react'
import { useEffect, useState } from "react"


function EasyQuestions() {
  let url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean";
  // this is the api's question
  const [question, setQuestion] = useState('');
  // this is the api's answer
  const [answer, setAnswer] = useState('')
  // this is the user's answer
  const [userAnswer, setUserAnswer] = useState('yuh')
  // this will let the user know if their answer was correct or false
  const [judgment, setJudgement] = useState('')
  // This will allow the user to go to the next question
  const [quesCount, setQuesCount] = useState(0)
  // this will define the question array that we are working with
  const [currentArray, setCurrentArray] = useState([])
  // this will begin the question and answers
  const [start, setStart] = useState(false)

  // This will fetch the question from the api and I will use useStates to make it dyanmic
  useEffect(
    () => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        let questionArray = data.results.map(item => item)
        setCurrentArray(questionArray)
       })
      .catch((error) => {
        console.error('Error:', error);
      });
    }, [])

  // this will set the question and the answer according the array's data  
  const handleStart = () => {
    setQuestion(currentArray[quesCount].question)
    setAnswer(currentArray[quesCount].correct_answer)
    console.log(currentArray)
  }





  // This will compare the user's choice with the correct answer
  useEffect(
    () => { 
        console.log(answer)

      if (userAnswer === answer){
        setJudgement("Correct")
      }
      else if (userAnswer === "True") {
        setJudgement(`The correct answer is ${answer}`)
      }
      else if (userAnswer === "False") {
        setJudgement(`The correct answer is ${answer}`)
      }
    }
 ,[userAnswer]
  )
  // this will go to the next question and reset the judgement
  const handleNext = () => {
    setQuestion(currentArray[quesCount].question)
    setAnswer(currentArray[quesCount].correct_answer)
    setQuesCount(quesCount + 1)
    setJudgement('')
  }
  


  return (
    <div>
        <h1>Questions are here {quesCount+1}</h1>
        {question}
        <button onClick={style.display = 'none'} >START</button>
        <button onClick={()=>setUserAnswer("True")}>True</button>
        <button onClick={()=>setUserAnswer("False")}>False</button>
        {judgment}
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default EasyQuestions