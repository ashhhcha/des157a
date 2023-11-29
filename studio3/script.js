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

        //the form to let the users name their characters/rats
        if (rat1 == ''){
            myText = 'Please provide a name for rat 1!';
            document.querySelector('#rat1').focus();
        } else if (rat2 == ''){
            myText = 'Please provide a name for rat 2!';
            document.querySelector('#rat2').focus();
        } else {
            document.querySelector('#intro').className = 'hidden';
            document.querySelector('#play').className = 'showing';
            //display the rules of the game
            explain.innerHTML = `<p>In the big city of New York, <strong>${rat1}</strong> and <strong>${rat2}</strong> are rats scrambling to reach the largest slice of pizza on the subway floor.</p> <p>The goal of the game? Be the first rat to get to the pizza by advancing your steps based on the total number each rat rolls.</p> 
            <p>However, beware of the cat lurking around! If a one comes up on either pizza, the turn is ended. If both pizza are ones, you've been caught by the cat, and your score returns to zero.</p>`;

            startPlay.addEventListener('click', function(){
                playTap();
                document.querySelector('#rules').className = 'hidden';
                document.querySelector('#start').className = 'showing';
                //begin with the game
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

    const startGame = document.querySelector('#startPlay');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    startGame.addEventListener('click', function(){
        //randomly select player to start
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        setUpTurn();            
    });

    function setUpTurn(){
        //the game where the player gets to toss the dice
        game.innerHTML = `<p>Roll the pizza for ${ gameData.players[gameData.index] }</p>`;
        actionArea.innerHTML = '<button id="roll">roll the pizza</button>';
        document.querySelector('#score').className = 'hidden';
        document.querySelector('#brat').innerHTML = `<h2>${rat1}</h2> <img src="images/brat.png" alt= "brown rat">`;
        document.querySelector('#grat').innerHTML = `<h2>${rat2}</h2> <img src="images/grat.png" alt= "gray rat">`;

        //when clicking the roll button, a sound is played and the dice is tossed  
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
            playRun();
            document.querySelector('#score').className = 'showing';
        });
    };

    function throwDice(){
        //tossing the dice, shows players scores and the numbers on the dice/pizza
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6)+1;
        gameData.roll2 = Math.floor(Math.random()*6)+1;
        game.innerHTML=`<p>Roll the pizza for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<article id="pizzaDice"><img src = "${gameData.dice[gameData.roll1-1]}">  <img src = "${gameData.dice[gameData.roll2-1]}"></article>`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if (gameData.rollSum === 2){
            game.innerHTML += '<p>You have been caught by the cat!</p>';
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
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
        }
        checkWinningCondition();
    };   

    //seeing if either player meets the conditions to win the game
    function checkWinningCondition(){
        if (gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points</h2>`;

            actionArea.innerHTML='';
            document.getElementById('quit').innerHTML += '<button id="quit">start a new game</button>';
            document.getElementById('quit').addEventListener('click', function(){
                location.reload();
            });
        } else{
            score.innerHTML = `<p>the score for ${gameData.players[0]} is <strong> ${gameData.score[0]} </strong> and the score for ${gameData.players[1]} is <strong> ${gameData.score[1]} </strong> </p>`;
            showCurrentScore();
        }
    }

    //showing current score at the bottom of the page for both players
    function showCurrentScore(){
        score.innerHTML = `<p>the score for ${gameData.players[0]} is <strong> ${gameData.score[0]} </strong> and the score for ${gameData.players[1]} is <strong> ${gameData.score[1]} </strong> </p>`;
    }

    //a tap sound when clicking a button
    function playTap() {
        const audio = new Audio('sounds/tap.m4a'); 
        audio.play();
    }
    //dice roll sound when clicking to roll the dice/pizza
    function playRun() {
        const audio = new Audio('sounds/run.m4a'); 
        audio.play();
    }
    
    document.getElementById('readRules').addEventListener('click', function() {
        playTap();
    });


})(); 