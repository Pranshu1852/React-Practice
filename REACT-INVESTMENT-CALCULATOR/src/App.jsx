import { useState } from 'react'
import Navbar from './components/Navbar'
import Userinput from './components/UserInput'
import Results from './components/Results'

function App() {
  const [userInput, setuserInput]=useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputIsValid=userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
      setuserInput((prevUserInput)=>{
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue,
          }
      })
  }

  return (
    <>
      <Navbar/>
      <Userinput userInput={userInput} onChange={handleChange}/>
      {inputIsValid ? <Results input={userInput}/> : <p className='center'>Please enter a duration greater than zero.</p>}
    </>
  )
}

export default App
