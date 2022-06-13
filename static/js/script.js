//Challenge :1 Your age in days
function AgeInDays(){
    var birthYear=prompt("what Is Your Birthyear");
    var AgeInDayss=(2022-birthYear)*365;
    var h1 = document.createElement('h1');
    var TexAnswer=document.createTextNode("you are "+ AgeInDayss +" days");
    h1.setAttribute('id','AgeInDays');
    h1.appendChild(TexAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('AgeInDays').remove();
}

//Challenge 2: Cat Ganerator
function generatCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="https://media.giphy.com/media/MKwNmAdWqHBSg/giphy.gif";
    div.appendChild(image);
}
//challenge 3:rock paper sessior

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice ,botChoice ;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);

    results = decideWinner (humanChoice,botChoice); //[0,1] human lost| bot won
    console.log(results);

    message = finalMessage(results); //{'message':'you won', 'color': 'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };



    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore,computerScore]) {
    if(yourScore === 0) {
        return {'message':'you lost!', 'color':'red'};
    } else if(yourScore === 0.5)  {
        return{'message':'you tied!', 'color':'yellow'};
    } else {
        return {'message':'you won!', 'color':'green'};

    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src

    }


    // let's remove all images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10x 50px rgba(37, 50,233,1);'>"
    messageDiv.innerHTML = "<h1 style='color:"+ finalMessage['color'] + "; font-size: 60px; padding:30px; '>" + finalMessage['message']+ "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10x 50px rgba(243, 38,24,1);'> "

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);



}
