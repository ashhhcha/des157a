(function(){
    'use strict';

    const myForm = document.querySelector('#myForm');
    const alert = document.querySelector('#alert');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        const verbing = document.querySelector('#verbing').value;
        const verb1 = document.querySelector('#verb1').value;
        const emotion = document.querySelector('#emotion').value;
        const animal = document.querySelector('#animal').value;
        const food = document.querySelector('#food').value;
        const bodyPart = document.querySelector('#bodyPart').value;
        const verb2 = document.querySelector('#verb2').value;

        let myText = '';
        let finish = '';
        if (verbing == ''){
            myText = 'please provide a verb ending in -ing!';
            document.querySelector('#verbing').focus();
        } else if (verb1 == ''){
            myText = 'please provide a verb!';
            document.querySelector('#verb1').focus();
        } else if (emotion == ''){
            myText = 'please provide an emotion!';
            document.querySelector('#emotion').focus();
        } else if (animal == ''){
            myText = 'please provide an animal!';
            document.querySelector('#animal').focus();
        }  else if (food == ''){
            myText = 'please provide a food!';
            document.querySelector('#food').focus();
        } else if (bodyPart == ''){
            myText = 'please provide a body part!';
            document.querySelector('#bodyPart').focus();
        } else if (verb2 == ''){
            myText = 'please provide another verb!';
            document.querySelector('#verb2').focus();
        } else {
            document.querySelector('#overlay').className = 'showing';
            finish = `<p>As a food reporter, you are <u>${verbing}</u> to find a good restaurant. There's a new restaurant in town, and you <u>${verb1}</u> past the restaurant's kitchen door to get their secret recipe. However, you are <u>${emotion}</u> to see and find out that <u>${animal}</u> are all in charge of cooking. The only humans are outside serving <u>${food}</u> to people. The <u>${animal}</u> makes eye contact with you, and you feel a chill down your <u>${bodyPart}</u>. You <u>${verb2}</u> out of the restaurant to write about it.</p>`;
            document.querySelector('#verbing').value = '';
            document.querySelector('#verb1').value = '';
            document.querySelector('#emotion').value = '';
            document.querySelector('#animal').value = '';
            document.querySelector('#food').value = '';
            document.querySelector('#bodyPart').value = '';
            document.querySelector('#verb2').value = '';

            document.querySelector('button').addEventListener('click', function(){
                document.querySelector('#overlay').className = 'hidden';
            })
        }

        alert.innerHTML = myText;
        madlib.innerHTML = finish;

    });




})();