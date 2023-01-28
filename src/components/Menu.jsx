import React, { useState, useEffect, useRef } from "react"
import GuessGrid from "./GuessGrid"
import Help from "./Help"
import {createCode, translateCode, calculateScore} from '../game'
import MenuButtonSVG from "./MenuButtonSVG"
import './styles/Menu.css'


const Menu = () => {
    const [startGame, setStartGame] = useState(false)
    const [startHelp, setStartHelp] = useState(false)
    const [time, setTime] = useState(0)
    let colors = "bwgryo"
    const [code, setCode] = useState("")
    const [numGuesses, setNumGuesses] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)

    useEffect(() => {
        if(!startGame) return;
        //create the code to be guessed
        const newCode = createCode(colors)
        setCode(translateCode(newCode))
        const interval = setInterval(() => {
            setTime((prevTime) => {
                if (gameOver === true) {
                    clearInterval(interval);
                    setScore(calculateScore(prevTime, numGuesses))
                    return prevTime
                  }
              return prevTime + 1
            });
           
          }, 1000);
          return () => clearInterval(interval);

    }, [startGame, gameOver])

    return (
        <>
        {
            console.log(code)
        }
        {
            startHelp ? 
            <Help />
            :
            ''
        }
        
        {
            startGame ?
            <>
            <div className="d-flex align-items-center justify-content-center gap-5">
                <h2 id="timer" className="info">TIMER: {time}</h2>
                <h2 className="info">GUESSES: {numGuesses}</h2>
            </div>
            {
                score !== 0 && (
                    <h2 className="info">SCORE: {score}</h2>
                )
            }
            
            <GuessGrid code={code} previousGuess={[]} handleGameOver={() => setGameOver(true)} gameOver={gameOver} numGuesses={() => setNumGuesses(numGuesses + 1)}></GuessGrid>
            </>
            :
            <>
            <div className="title">
                <img src={require('../codecrackdownlogo.png')} alt="" className="img-fluid banner-img"></img>
                <div className="circle">
                <div className="fa fa-unlock spinningKey"></div>
                </div>
                <button id="start" className="menu-btn" onClick={() => setStartGame(true)}>
                    <span>PLAY</span>
                    <MenuButtonSVG />
                </button>
                <button id="shop" className="menu-btn" onClick={() => setStartGame(true)}>
                    <span>SHOP</span>
                    <MenuButtonSVG />
                </button>
                <button id="help" className="menu-btn" onClick={() => setStartHelp(true)}>
                    <span>HELP</span>
                    <MenuButtonSVG />
                </button>
            </div>
            </>
        }
        </>
    )

}
export default Menu