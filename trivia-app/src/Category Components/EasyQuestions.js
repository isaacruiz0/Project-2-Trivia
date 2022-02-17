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
  // This will fetch the question from the api and I will use useStates to make it dyanmic
  useEffect(
    () => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        let question = data.results[0].question
        setQuestion(question)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }, [])

  // This will fetch the question from the api and I will use useStates to make it dyanmic
  useEffect(
    () => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        let answer = data.results[0].correct_answer
        setAnswer(answer)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }, [])
  // This will compare the user's choice with the correct answer
  useEffect(
    () => { 
        console.log('rendered')

      if (userAnswer === answer){
        setJudgement("Correct")
      }
      // else {
      //   setJudgement(`The correct answer is ${answer}`)
      // }
    }
 ,[userAnswer]
  )
  

  return (
    <div>
        <h1>Questions are here baaaby</h1>
        {question}
        <button onClick={()=>setUserAnswer("True")}>True</button>
        <button onClick={()=>setUserAnswer("False")}>False</button>
        {judgment}
    </div>
  )
}

export default EasyQuestions