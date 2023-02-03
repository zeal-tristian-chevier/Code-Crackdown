import React, {useState} from "react";
import '../styles/GuessGrid.css'
import { changeColor, checkGameStatus } from "../../game";
const GuessGrid = (props) => {
        const [style, setStyle] = useState({
            guessPos1: '',
            guessPos2: '',
            guessPos3: '',
            guessPos4: '',
        })
        const [isGuessed, setIsGuessed] = useState(false)
        const [previousGuess, setPreviousGuess] = useState(props.previousGuess)
        const [whitesAndBlacks, setWhitesAndBlacks] = useState([])
        const [gameOver, setGameOver] = useState(props.gameOver)
        const [isValid, setIsValid] = useState(true)
        
        const handleStyle = (e) => {
            //after each block change we have to reset the validation to true
            setIsValid(true)
            if(isGuessed === false){
                //if guess is false, the user can click on a guess block to change the color
                setStyle({
                    ...style,
                    [e]: changeColor(style[e])})
            }
        }
        const handleGuess = (guess) => {
            let status = checkGameStatus(guess, props.code)
            if(status === true){
                setGameOver(true)
                props.handleGameOver();
            }
            else {
                setWhitesAndBlacks(status)
            }
            
        }
        const handleSubmit = (e) => {
            e.preventDefault()
            let guess = [style.guessPos1, style.guessPos2, style.guessPos3, style.guessPos4]
            let validate = []
            for(let i = 0; i < guess.length; i++){
                if(!validate.includes(guess[i])){
                    validate.push(guess[i])
                }
            }
            if(validate.length === guess.length){
                setPreviousGuess(guess)
                handleGuess(guess)
                setIsGuessed(true)
                props.numGuesses()
            }else{
                setPreviousGuess([])
                setIsValid(false)
            }
        }
        const handleReset = () => {
            // select all the old guesses and remove them
            const prevGuesses = Array.from(document.querySelectorAll(".container"))
            // we don't want to remove the new .container that will be added when we "reset" so we prevent it from getting removed
            prevGuesses.pop()
            //remove old guesses
            prevGuesses.map(node => node.parentNode.removeChild(node)) 
            //reset all states in guessgrid.jsx
            setIsGuessed(false)
            setGameOver(false)
            setStyle({})
            setPreviousGuess([])
            //make sure the game.jsx resets as well
            props.reset()
        }
    return (
        <>
        {
            //if the user guesses, we display the previous guess so the user can try guessing again
            isGuessed && (            
                <>
                <div className='container'>
                    <div className='guess'>
                    <div className={'container-item ' + previousGuess[0]} ></div>
                    <div className={'container-item ' + previousGuess[1]} ></div>
                    <div className={'container-item ' + previousGuess[2]} ></div>
                    <div className={'container-item ' + previousGuess[3]} ></div>
                    </div>
                    {
                        gameOver ? 
                        
                        <button id="unlock-btn" type="submit" className="fa-solid fa-lock-open btn btn-lg fs-2 game-btn"></button>
                        :
                        <button type="submit" className="fa-solid fa-lock btn btn-lg fs-1 game-btn" disabled></button>
                    }
                    <div className='response'>
                    {
                        whitesAndBlacks.map((worb, i) => {
                            
                            if(worb === "w"){
                                return <div className={'container-item white'} key={i}></div>
                            }
                            else if(worb === "b"){
                                return <div className={'container-item black'} key={i}></div>
                            }
                            else{
                                return <div className={'container-item'} key={i}></div>
                            }
                        })
                    }
                    
                    </div>
                </div>
                </>
            )
        }
        {
        //If player guesses the code, we need to add a restart button
        gameOver ? 
        <button className="restart-btn" onClick={handleReset}>RESTART</button>
        :
        //if the user hasn't guessed yet, we set the blocks to be clickable and able to set the guess
        isGuessed === false ?
            <div className='container'>
            <div className='guess'>
            <div className={'container-item ' + style.guessPos1} onClick={(e) => handleStyle(e.target.id)} id={'guessPos1'}></div>
            <div className={'container-item ' + style.guessPos2} onClick={(e) => handleStyle(e.target.id)} id={'guessPos2'}></div>
            <div className={'container-item ' + style.guessPos3} onClick={(e) => handleStyle(e.target.id)} id={'guessPos3'}></div>
            <div className={'container-item ' + style.guessPos4} onClick={(e) => handleStyle(e.target.id)} id={'guessPos4'}></div>
            </div>
            {
                style.guessPos1 && style.guessPos2 && style.guessPos3 && style.guessPos4 && isGuessed === false ? (
                    <>
                    <form className="guessForm" onSubmit={handleSubmit}>
                        <button id="key-btn" type="submit" className={isValid ? 'fa btn btn-lg fs-1 fa-key game-btn' : 'fa btn btn-lg fs-1 fa-key invalid game-btn'}></button>
                    </form>
                    </>
                )
                :
                <button type="submit" className="fa fa-lock btn btn-lg fs-1 game-btn"></button>
            }
            
            <div className='response'>
            <div className='container-item'></div>
            <div className='container-item'></div>
            <div className='container-item'></div>
            <div className='container-item'></div>
            </div>
            
            </div>
        :
        //once a guess is submitted we have to re-render the guess grid so the user can guess again
        <GuessGrid code={props.code} previousGuess={previousGuess} handleGameOver={props.handleGameOver} numGuesses={props.numGuesses} reset={props.reset} currentUser={props.currentUser}/>
        }
    
        </>
    )
}
export default GuessGrid;