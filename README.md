# Project-2-Trivia
A Trivia game that fetches data from an API
# Project Overview

## Project Description

This app will allow you to test your knowledge on certain categories via true or false questions.

## API

Trivia API:
https://opentdb.com/api_config.php

```
{
"response_code": 0,
"results": [
{
"category": "History",
"type": "boolean",
"difficulty": "easy",
"question": "The Spitfire originated from a racing plane.",
"correct_answer": "True",
"incorrect_answers": [
"False"
]
},
```

## Wireframes

- [Mobile Wireframe](https://i.imgur.com/2gdPh3N.jpg)
- [Desktop Wireframe](https://i.imgur.com/W3CMn5g.jpg)
- [React Flow-Chart](https://i.imgur.com/kRMEk1Y.jpg)


#### MVP

- A competent mobile interface
- Categories a user can choose from
- Difficulties a user can choose from
- A list of questions that the user can answer

#### PostMVP

- Add a timer per question
- Add a points system
- Question of the day
- Beautiful animations

## Components

##### Component Descriptions

| Component      |                           Description                            |
| -------------- | :-------------------------------------------------------------:  |
| Category	 |This will connect the user's choice with the api's category data  |
| Difficulty   	 |   Access the api's questions based on difficulty                 |
| Questions      |The answers for these questions will be compared to the api's answers|

##### MVP Time Frame

| Component    | Priority | Estimated Time | Actual Time |
| ------------ | :------: | :------------: | :---------: |
| Category     | H  	  | 6 hours	   | :---------: |
| Difficulty   | H	  | 5 hours  	   | :---------: |
| Questions    | H 	  | 10 hours 	   | :---------: |


##### PostMVP Time Frame

| Additionals          | Priority | Estimated Time | Actual Time |
| -------------------- | :------: | :------------: | :---------: |
| Timer per question   | M  	  | 4 hours	   | :---------: |
| Add a points system  | M	  | 2 hours  	   | :---------: |
| Question of the day  | L 	  | 1 hour	   | :---------: |
| Beautiful animations | H 	  | 8 hours	   | :---------: |
