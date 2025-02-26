// import words array
import words from './words.js'

// #text-container
const textContainer = document.getElementById("text-container");
const timerElement = document.getElementById("timer");
const tryAgainButton = document.getElementById("try-again");
const finalScoreElement = document.getElementById("final-score");


let totalTyped = '';
let currentCharIndex = 0;
let errors = 0;
const longText = generateLongText();




// Shuffle the words array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Combined shuffled words into one long string with spaces
function generateLongText() {
  const shuffledWords = shuffleArray([...words]); //spread operator to make another version of words array, so our original  words array is not changed.
  return shuffledWords.join(' ');
  
}


// pass to the #text-container element in the HTML
textContainer.textContent = longText;




// Now, we will listen to our key strokes, by adding Event Listener to the Document.
/*
- varaiables for traking
- listening key strokes - backspace or any word button pressed
- split our long text into single words, and use varaiables for index tracing
- track errors
- scroll text, when we need to see remaing text and type it
*/

// Handled typing over the displayed text and scrolling
document.addEventListener('keydown', e => {
  
  
  if (e.key === 'Backspace') {
    if (totalTyped.length > 0) {
      currentCharIndex = Math.max(currentCharIndex - 1, 0);
      totalTyped = totalTyped.slice(0, -1);
    }
  }
  else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
    totalTyped += e.key;
    currentCharIndex++;
  }

  console.log('e.key', e.key, 'totalTyped', totalTyped, 'currentCharIndex', currentCharIndex);

  const textArray = longText.split('');
  textContainer.innerText = '';

  errors = 0;

  for (let i = 0; i < textArray.length; i++) {
    const span = document.createElement('span');

    if (i < totalTyped.length) {
      if (totalTyped[i] === textArray[i]) {
        span.classList.add('correct');
      }
      else {
        span.classList.add('incorrect');
        errors++;
      }
    }
    span.textContent = textArray[i];
    textContainer.appendChild(span);
  }
});