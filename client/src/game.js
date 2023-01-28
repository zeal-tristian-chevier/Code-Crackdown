export const createCode = (colors) => {
    let code = ""
    while(code.length <= 3){
        let rand = Math.floor(Math.random() * colors.length)
        if(!code.includes(colors[rand])){
            code += colors[rand]
        }
    }
    return code
}

export const translateCode = (code) => {
    let translatedCode = []
    for(let i = 0; i < code.length; i++){
        switch(code[i]){
            case "b":
                translatedCode.push("blue")
                break;
            case "w":
                translatedCode.push("white")
                break;
            case "g":
                translatedCode.push("green")
                break;
            case "r":
                translatedCode.push("red")
                break;
            case "y":
                translatedCode.push("yellow")
                break;
            case "o":
                translatedCode.push("orange")
                break;
        }
    }
    return translatedCode
}
// const validate = (guess, code) => {
//     let validateGuess = ""
//         if(guess.length != code.length){
//             console.log("Guess was too long or too short, try again: ")
//             return false
//         }
//         for(let i = 0; i < guess.length; i++){
//             if(!colors.includes(guess[i])){
//                 console.log("Please use proper color codes, try again: ")
//                 return false
//             }
//             if(validateGuess.includes(guess[i])){
//                 console.log("Please do not repeat a color, try again: ")
//                 return false
//             }
//             validateGuess += guess[i]
//         }
//     return true
// }
// const game = (code) => {
//     let tries = 10
//     console.log("Guess the 4 digit code using the first characters from the following colors. (Blue(b), White(w), Green(g), Red(r), Yellow(y), and Orange(o)). ")
//     console.log("Letters cannot be repeated in the guess or in the code. 10 TRIES!")
//     let guess = prompt("Guess: ").trim()
//     if(guess == "exit"){
//         clearTimeout()
//     }
//     while(guess != code){
//         let whites = 0
//         let blacks = 0
        
//         while(validate(guess, code) == false){
//             guess = prompt("Try Again: ")
//         }

//         for(let i = 0; i < code.length; i++){
//             if(guess.includes(code[i])){
//                 whites++
//             }
//             if(guess[i] === code[i]){
//                 blacks++
//             }
//         }
//         //if we have blacks, we dont need to count them as whites as well
//         whites = whites - blacks
//         tries--
//         console.log("Whites: " + whites)
//         console.log("Blacks: " + blacks)
//         if(tries === 0){
//             console.log("Sorry, you didn't guess the code in 10 tries!")
//             console.log("The code was " + code + ", " + translateCode(code))
//             return
//         }
//         console.log("Tries left: " + tries)
//         guess = prompt("Guess: ").trim()
//     }
//     console.log("Congrats you guessed " + translateCode(code))
//     return
// }