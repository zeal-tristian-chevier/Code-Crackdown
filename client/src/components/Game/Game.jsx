import {createCode, translateCode, calculateScore} from '../../game'
import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import GuessGrid from "./GuessGrid"
import { updateUserById } from '../../services/internalApiService'
import MenuButtonSVG from '../SVGs/MenuButtonSVG'


const Game = () => {
    const location = useLocation()
    const [currentUser, setCurrentUser] = useState(location.state.currentUser)
    const [time, setTime] = useState(0)
    let colors = "bwgryo"
    const [code, setCode] = useState("")
    const [numGuesses, setNumGuesses] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)
    const [previousGuess, setPreviousGuess] = useState([])
    const navigate = useNavigate()
    useEffect(() => {

        //create the code to be guessed
        const newCode = createCode(colors)
        console.log(newCode)
        setCode(translateCode(newCode))
        const interval = setInterval(() => {
            setTime((prevTime) => {
                if (gameOver === true) {
                    const score = calculateScore(prevTime, numGuesses)
                    clearInterval(interval);
                    //if a user is logged in, add score to their total
                    if(currentUser.username){
                        updateScore(currentUser, score)
                        setScore(score)
                    }
                    return prevTime
                  }
              return prevTime + 1
            });
           
          }, 1000);
          return () => clearInterval(interval);
    
    }, [gameOver])

    const updateScore = (currentUser, score) => {
            updateUserById(currentUser.id, {
                score: currentUser.score += score
            })
            .catch(err => {
                console.log(err)
            })
    }

    const reset = () => {
        // reset all states in game.jsx
        setTime(0)
        setNumGuesses(0)
        setGameOver(false)
        setScore(0)
        setPreviousGuess([])
    }
    return (
        <>
        <div className="d-flex align-items-center justify-content-center flex-column ">
                <button id="help" className="menu-btn" onClick={() => navigate('/')}>
                        <span>Back</span> 
                        <MenuButtonSVG />
                    </button>
            <div className="d-flex gap-5">
                <h2 id="timer" className="info">TIMER: {time} </h2>
                <h2 className="info">GUESSES: {numGuesses}</h2>
            </div>
            </div>
            {
                score !== 0 && (
                    <h2 className="info">SCORE: {score}</h2>
                )
            }
            <div id='main-container'>
                {
                    //code = send code to guessgrid, previousGuess = send the previous guess styles to fill the containers with so the player can see what they guessed previously, handleGameOver = when player guesses correctly we need to setGameOver to true in the game.jsx so the timer can stop and we can calculate the score, gameOver = determines whether guessgrid displays the restart button and shows the unlock button or not, numGuesses = pass the num of guesses up to game.jsx to display at top of screen, reset = reset game.jsx state and guessgrid.jsx state, currentUser = pass the user through props so it doesn't get lost in running the game
                } 
                <GuessGrid code={code} previousGuess={previousGuess} handleGameOver={() => setGameOver(true)} gameOver={gameOver} numGuesses={() => setNumGuesses(numGuesses + 1)} reset={reset} currentUser={currentUser}></GuessGrid>
            </div>
        </>
    )
}
export default Game