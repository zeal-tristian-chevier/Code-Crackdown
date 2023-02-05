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
export const changeColor = (style) => {
    switch(style){
        case 'blue':
            return 'white'
        case 'white':
            return 'green'
        case 'green':
            return 'red'
        case 'red':
            return 'yellow'
        case 'yellow':
            return 'orange'
        case 'orange':
            return 'blue'
        default:
            return 'blue'
        }
}
export const checkGameStatus = (guess, code) => {
    if(JSON.stringify(guess) === JSON.stringify(code)){
        return true
    }
    let w = []
    let b = []

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
        //return the list of whites and blacks
        return wandb

}
export const calculateScore = (time, guesses) => {
    if((Math.round(1 / ((time + guesses)) * 1000) * 1000) === 0){
        return 1000
    }
    return Math.round(1 / ((time + guesses)) * 1000) * 1000
}