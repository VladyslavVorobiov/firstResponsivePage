var randomNumber = Math.floor(Math.random()*100)+1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var countDownGuess = document.querySelector('.countDownGuess');
var lowOrHi = document.querySelector('.lowOrHi');

var guessesSubmit = document.querySelector('.guessSubmit');
var guessesField = document.querySelector('.guessField');

var guessesCount = 1;
var resetButton;

guessesField.focus();

function checkGuess(){

	var userGuess = Number(guessesField.value);
		
		if (guessesCount===1){
			guesses.textContent = 'Previous guesses: ';
		}
		
		guesses.textContent += guessesField.value + ' ';
		
		if (userGuess === randomNumber){
			lastResult.textContent = 'Congratulations! You got it right!';
			lastResult.style.backgroundColor = 'yellow';
			lastResult.style.color = 'green';
			lowOrHi.textContent = '';
			setGameOver();
		}
		else if(guessesCount === 10){
			countDownGuess.textContent = 'Number of guess: 0';
			lastResult.textContent = 'GAME OVER!';
			setGameOver();
		}
		else {
			
			if(userGuess===userGuess)   // if() return true , when userGuess is number
			{ 

				if(userGuess < randomNumber){
					lowOrHi.textContent = 'Last guess was too low';
				}
				else if(userGuess > randomNumber){
					lowOrHi.textContent = 'Last guess was too high';
				}
			}
			else if(userGuess!=userGuess) // if() return true ,  when userGuess is NaN
			{ 
				lowOrHi.textContent = 'Last guess was not a number';
				alert('You can enter only a number. For example: 45, 34, 78 ...');
			}
			
			countDownGuess.textContent = 'Number of guess: ' + (10 - guessesCount);
			lastResult.textContent = 'Wrong!';
			lastResult.style.backgroundColor = 'red';
		}

		guessesCount++;
		guessesField.value = '';
		guessesField.focus();

}

guessesSubmit.addEventListener('click',checkGuess);

function setGameOver() {
	guessesField.disabled = true;
	guessesSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = 'Start new game';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
}

function resetGame() {
	guessesCount = 1;

	var resetParas = document.querySelectorAll('.resultParas p');
	for(var i = 0; i < resetParas.length; i++){
		resetParas[i].textContent = '';
	}

	resetButton.parentNode.removeChild(resetButton);

	guessesField.disabled = false;
	guessesSubmit.disabled = false;
	guessesField.value = '';
	guessesField.focus();

	lastResult.style.backgroundColor = 'white';
	lastResult.style.color = 'white';
	randomNumber = Math.floor(Math.random()*100 + 1);
}