const options = ["rock","paper","scissors","water","snake"];

function getComputerChoice(){
    const random = options[Math.floor(Math.random()*options.length)];
    return random;
}
function playerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = "water";
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}
function playRound(playerSelection,computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "it's a draw!";
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors')) {
        return "You win! Rock beats scissors.";
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper')) {
        return "You lose! Paper beats rock.";
    } else if ((playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')) {
        return "You win! Paper beats rock.";
    } else if ((playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors')) {
        return "You lose! Scissors beats paper.";
    } else if ((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
        return "You win! Scissors beats paper.";
    } else if ((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
        return "You lose! Rock beats scissors.";
    }else if ((playerSelection.toLowerCase() === 'water' && computerSelection === 'rock')) {
        return "You win! Water rusts rock.";
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'water')) {
        return "You lose! Water rusts rock.";
    }else if ((playerSelection.toLowerCase() === 'snake' && computerSelection === 'water')) {
        return "You win! Snake drinks Water.";
    } else if ((playerSelection.toLowerCase() === 'water' && computerSelection === 'snake')) {
        return "You lose! Snake drinks Water.";
    }else if ((playerSelection.toLowerCase() === 'water' && computerSelection === 'scissors')) {
        return "You win! Water rusts scissors.";
    } else if ((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'water')) {
        return "You lose! Water rusts scissors.";
    }else if ((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'snake')) {
        return "You win! Scissors cuts snake.";
    } else if ((playerSelection.toLowerCase() === 'snake' && computerSelection === 'scissors')) {
        return "You lose! Scissors cuts snake.";
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i =0; i<10 ; i++){
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection,computerSelection));
        console.log(`Player ${scorePlayer} VS Computer ${scoreComputer}`);
        if((playRound(playerSelection,computerSelection) === "You win! Rock beats scissors."||"You win! Paper beats rock."||"You win! Scissors beats paper."||"You win! Water rusts rock."||"You win! Snake drinks Water."||"You win! Water rusts scissors."||"You win! Scissors cuts snake.")){
            scorePlayer++;
        }
        else if((playRound(playerSelection,computerSelection) === "You lose! Rock beats scissors."||"You lose! Paper beats rock."||"You lose! Scissors beats paper."||"You lose! Water rusts rock."||"You lose! Snake drinks Water."||"You lose! Water rusts scissors."||"You lose! Scissors cuts snake.")){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Congrats you win!!");
    } else if (scorePlayer < scoreComputer){
        console.log("Better luck next time.");
    } else {
        console.log("it's a tie!");
    }
}
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i =0; i<5 ; i++){
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection,computerSelection));
        console.log(`Player ${scorePlayer} VS Computer ${scoreComputer}`);
        if((playRound(playerSelection,computerSelection) === ("You win! Rock beats scissors."))||(playRound(playerSelection,computerSelection) === ("You win! Paper beats rock."))||(playRound(playerSelection,computerSelection) === ("You win! Scissors beats paper."))){
            scorePlayer++;
        } 
        else if((playRound(playerSelection,computerSelection) === ("You lose! Rock beats scissors."))||(playRound(playerSelection,computerSelection) === ("You lose! Paper beats rock."))||(playRound(playerSelection,computerSelection) === ("You lose! Scissors beats paper."))){
            scoreComputer++;

        }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Congrats you win!!");
    } else if (scorePlayer < scoreComputer){
        console.log("Better luck next time.");
    } else {
        console.log("it's a tie!");
    }
}
game()