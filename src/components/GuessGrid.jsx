import React, {useState} from "react";

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
        const [hasWon, setHasWon] = useState(false)
        const [isValid, setIsValid] = useState(true)
        const changeStyle = (e) => {
            //after each block change we have to reset the validation to true
            setIsValid(true)
            if(isGuessed === false){
            switch(style[e]){
                case 'blue':
                    setStyle({
                        ...style,
                        [e]: 'white'})
                    break;
                case 'white':
                    setStyle({
                        ...style,
                        [e]: 'green'})
                    break;
                case 'green':
                    setStyle({
                        ...style,
                        [e]: 'red'})
                    break;
                case 'red':
                    setStyle({
                        ...style,
                        [e]: 'yellow'})
                    break;
                case 'yellow':
                    setStyle({
                        ...style,
                        [e]: 'orange'})
                    break;
                case 'orange':
                    setStyle({
                        ...style,
                        [e]: 'blue'})
                    break;
                default:
                    setStyle({
                        ...style,
                        [e]: 'blue'})
                    break;
                }
            }
        }
        const handleGuess = (guess) => {
            let code = props.code
            let w = []
            let b = []

            if(JSON.stringify(guess) === JSON.stringify(code)){
                setHasWon(true)
                props.handleGameOver();
            }
            for(let i = 0; i < code.length; i++){
                if(code.includes(guess[i])){
                    w.push("w")
                }
                if(guess[i] === code[i]){
                    b.push("b")
                }
            }
            //if we have blacks, we dont need to count them as whites as well
            for(let i = 0; i < b.length; i++){
                w.pop()
            }
            let wandb = b.concat(w)
            //add blank blocks to the response
            while(wandb.length != 4){
                wandb.push("")
            }
            setWhitesAndBlacks(wandb)
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
            }else{
                //shake the key if the validation is false
                setPreviousGuess([])
                setIsValid(false)
            }
        }
    return (
        <>
        {
            //if the user guesses, we display the guess so the user can try guessing again
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
                        hasWon ? 
                        
                        <button  type="submit" className="fa-solid fa-lock-open btn btn-lg fs-2 gamebutton" style={{border: "none", color: "#58D68D"}}></button>
                        :
                        <button type="submit" className="fa-solid fa-lock btn btn-lg fs-1 gamebutton" disabled style={{border: "none"}}></button>
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
        hasWon ? 
        <h1>Score: </h1>
        :
        //if the user hasn't guessed yet, we set the blocks to be clickable and able to set the guess
        isGuessed === false ?
            <div className='container'>
            <div className='guess'>
            <div className={'container-item ' + style.guessPos1} onClick={(e) => changeStyle(e.target.id)} id={'guessPos1'}></div>
            <div className={'container-item ' + style.guessPos2} onClick={(e) => changeStyle(e.target.id)} id={'guessPos2'}></div>
            <div className={'container-item ' + style.guessPos3} onClick={(e) => changeStyle(e.target.id)} id={'guessPos3'}></div>
            <div className={'container-item ' + style.guessPos4} onClick={(e) => changeStyle(e.target.id)} id={'guessPos4'}></div>
            </div>
            {
                style.guessPos1 && style.guessPos2 && style.guessPos3 && style.guessPos4 && isGuessed === false ? (
                    <>
                    <form onSubmit={handleSubmit}>
                        <button type="submit" className={isValid ? 'fa btn btn-lg fs-1 fa-key gamebutton' : 'fa btn btn-lg fs-1 fa-key invalid gamebutton'} style={{border: "none", color: "#27AE60"}}></button>
                    </form>
                    </>
                )
                :
                <button type="submit" className="fa fa-lock btn btn-lg fs-1 gamebutton" style={{border: "none"}}></button>
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
        <GuessGrid code={props.code} previousGuess={previousGuess} handleGameOver={props.handleGameOver}/>
        }
    
        </>
    )
}
export default GuessGrid;