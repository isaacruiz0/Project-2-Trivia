import React from 'react'
import { useEffect, useState } from "react"


function EasyQuestions() {
  let url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean";
  // this is the api's question
  const [question, setQuestion] = useState();
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
  // this will make the start button disappear
  const [startClass, setStartClass] = useState("defaultStart")
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
    setStartClass("disappear")
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
        <h2 className='question'>{question}</h2>
        <button className={startClass} onClick={handleStart} >START</button>
        <h3 className='judgement'>{judgment}</h3>
        <div>
          <button className='options' onClick={()=>setUserAnswer("True")}>True</button>
          <button className='options' onClick={()=>setUserAnswer("False")}>False</button>
        </div>
        <div className='nextDiv'>
          <button className='nextButton' onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default EasyQuestions