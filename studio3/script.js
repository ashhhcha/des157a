(function(){
    'use strict'

    console.log('reading JS');

    let rat1, rat2;

    const myForm = document.querySelector('#myForm');
    const alert = document.querySelector('#alert');
    const play = document.querySelector('#play');
    const explain = document.querySelector('#explain');
    const startPlay = document.querySelector('#startPlay');

    myForm.addEventListener('submit', function(e){
        e.preventDefault();

        rat1 = document.querySelector('#rat1').value;
        rat2 = document.querySelector('#rat2').value;

        let myText = '';

        if (rat1 == ''){
            myText = 'Please provide a name for rat 1!';
            document.querySelector('#rat1').focus();
        } else if (rat2 == ''){
            myText = 'Please provide a name for rat 2!';
            document.querySelector('#rat2').focus();
        } else {
            document.querySelector('#intro').className = 'hidden';
            document.querySelector('#play').className = 'showing';
            explain.innerHTML = `<p>In the big city of New York, <strong>${rat1}</strong> and <strong>${rat2}</strong> are rats scrambling to reach the largest slice of pizza on the subway floor. The goal of the game is to get to the pizza first by advancing your steps based on the total number each rat rolls. However, beware! The turn is ended if a one comes up on either dice. If both dice are ones, you have cat eyes, and your score returns to zero.</p>`;

            startPlay.addEventListener('click', function(){
                document.querySelector('#rules').className = 'hidden';
                document.querySelector('#start').className = 'showing';
                setUpTurn();            
            });

            gameData.players = [rat1, rat2];
        }
        alert.innerHTML = myText;
    });

    const gameData = {
        dice: ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png','images/6.png'],
        players: [rat1, rat2],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');


    //This gets the current player: 
    // gameData.players[gameData.index]

    // //This gets the first die and the second die: 
    // gameData.dice[gameData.roll1-1]
    // gameData.dice[gameData.roll2-1]

    // //This gets the score of the current player: 
    // gameData.score[gameData.index]

    // //This gets the index, or turn
    // gameData.index

    // //This gets the individual dice values and the added dice value
    // gameData.roll1
    // gameData.roll2
    // gameData.rollSum

    // //This gets the winning threshold
    // gameData.rollSum


    startGame.addEventListener('click', function(){
        //random set of game index
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>the game has started</h2>';

        // gameControl.innerHTML += '<button id="quit">wanna quit?</button>';
        // document.getElementById('quit').addEventListener('click', function(){
        //     location.reload();
        // });
        setUpTurn();            

    });



    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${ gameData.players[gameData.index] }</p>`;
        actionArea.innerHTML = '<button id="roll">roll the dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        });
    };

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6)+1;
        gameData.roll2 = Math.floor(Math.random()*6)+1;
        game.innerHTML=`<p>roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src = "${gameData.dice[gameData.roll1-1]}">  <img src = "${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        //console.log(gameData.rollSum);

        if (gameData.rollSum === 2){
            game.innerHTML += '<p>oh snap, cat eyes</p>';
            gameData.score [gameData.index] = 0;
            gameData.index ? (gameData.index =0) : (gameData.index =1);
            setTimeout(setUpTurn, 2000);
            showCurrentScore();

        } else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>sorry, one of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);

        } else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">roll again</button> or <button id="pass">pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
        }
        checkWinningCondition();
    };   

    // function checkWinningCondition(){
    //     if (gameData.score[gameData.index] > gameData.gameEnd){
    //         score.innerHTML = `<h2>${gameData.players[gameData.index]} wins the ${gameData.score[gameData.index]} points</h2>`;

    //         actionArea.innerHTML='';
    //         document.getElementById('quit').innerHTML = "Start a new game?";
    //     } else{
    //         score.innerHTML = `<p>the score for ${gameData.players[0]} is <strong> ${gameData.score[0]} </strong> and the score for ${gameData.players[1]} is <strong> ${gameData.score[1]} </strong> </p>`;
    //         showCurrentScore();
    //     }
    // }

    // function showCurrentScore(){
    //     score.innerHTML = `<p>the score for ${gameData.players[0]} is <strong> ${gameData.score[0]} </strong> and the score for ${gameData.players[1]} is <strong> ${gameData.score[1]} </strong> </p>`;
    // }
})(); 