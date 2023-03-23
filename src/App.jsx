import React, { useState } from 'react'


 export default function App() {
  const questions =[
    {
      questionText: "What is Mistura's favorite food?",
      answerOptions: [
        {answerText: 'Jollof Rice', isCorrect: false},
        {answerText: 'Spaghetti', isCorrect: true},
        {answerText: 'Yam and egg', isCorrect: false},
        {answerText: 'Chips and turkey', isCorrect: false},
  
      ],

  },

  {
    questionText: "What is Mistura's favorite color?",
    answerOptions: [
      {answerText: 'Black', isCorrect: false},
      {answerText: 'Blue', isCorrect: false},
      {answerText: 'Grey', isCorrect: false},
      {answerText: 'Purple', isCorrect: true},

    ],

},  

{
  questionText: "What is Mistura's favorite number?",
  answerOptions: [
    {answerText: 'Four', isCorrect: false},
    {answerText: 'Five', isCorrect: false},
    {answerText: 'Six', isCorrect: false},
    {answerText: 'Seven', isCorrect: true},

  ],

},

{
  questionText: "What is Mistura's favorite anime?",
  answerOptions: [
    {answerText: 'Kaguya Sama: Love is War', isCorrect: false},
    {answerText: 'Hunter X Hunter', isCorrect: true},
    {answerText: 'Fruits Basket', isCorrect: true},
    {answerText: 'Bleach', isCorrect: false},

  ]

}
]

const [currentQuestion, setCurrentQuestion] = useState(0);

const whenButtonClicks = (isCorrect) => {
  if (isCorrect === true){
  setScore(score + 1)
 }
  const nextQuestion = currentQuestion + 1
  if (nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion);
  }
  else{
    setShowScore(true);
  }
}

const [showScore, setShowScore] = useState(false)

const [score, setScore] = useState(0)



const tryAgain = () =>{
  setShowScore(false)
  setCurrentQuestion(0)
  setScore(0)

  
}



return (
  <div className=' bg-slate-500 w-screen  justify-center flex h-screen'>
     <div className='bg-pink flex w-1/2 max-h-fit py-5 justify-center self-center shadow-sm shadow-beige rounded-xl object-contain text-center'>
    {showScore? (
      
      <div className="self-center ">You scored {score} out of {questions.length}
      <div className="my-9">
      
      
      <button onClick={tryAgain} className='hover:text-cyan-700'>RESET</button></div>
      </div> 
      
    ): (



   <div className='flex flex-col flex-wrap object-contain'>
        <div className='flex text-4xl text-chocholatecosmos '>Question {currentQuestion + 1}/{questions.length}</div>
        <div className=' text-lg text-white'  >{questions[currentQuestion].questionText}</div>
    <div className='flex  text-lg flex-col '>
    {questions[currentQuestion].answerOptions.map((answerOptions) => <button  onClick={ () => whenButtonClicks(answerOptions.isCorrect)} className='transition ease-in-out delay-75 hover:bg-slate-600 hover:scale-90 bg-mine rounded-lg border-4  w-40  border-black'>{answerOptions.answerText}</button>)}

    </div>
    </div>


    )}
</div>
</div>
)
}




