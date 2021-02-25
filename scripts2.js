function rpsGame(yourChoice) {
    
    var humanChoice, botChoice;
    
    humanChoice = yourChoice.id;
    console.log('Your choice: ',humanChoice);
    
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice: ',botChoice);
    
    results = decideWinner(humanChoice, botChoice); // [0,1] human loss | bot won
    console.log('Result: ',results);
    
    message =finalMessage(results);    //{'message': 'you won', 'color':'green'} 
    console.log(message);
    
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0 },
        'paper': {'rock':1,'paper':0.5,'scissors':0 },
        'scissors': {'paper':1,'scissors':0.5,'rock':0 }
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice]; //rock paper =0
    var computerScore = rpsDatabase[computerChoice][yourChoice]; //peper rock =1

    return[yourScore,computerScore]; // 0 , 1
}

function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
        return {'message':'You loss!', 'color':'red'};
    }
    else if (yourScore === 0.5){
        return {'message':'You tied!', 'color':'yellow'};
    }
    else {
        return {'message':'You won!', 'color':'green'}
    }
}