// import words array
import words from './words.js'

// #text-container
const textContainer = document.getElementById("text-container");
const timerElement = document.getElementById("timer");
const tryAgainButton = document.getElementById("try-again");
const finalScoreElement = document.getElementById("final-score");


// Shuffle the words array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledArray = shuffleArray(words);
// console.log(shuffledArray);

// Combined shuffled words into one long string with spaces
function generateLongText() {
    const shuffledWords = shuffleArray([...words]); //spread operator to make another version of words array, so our original  words array is not changed.
    return shuffledWords.join(' ');

}

const longText = generateLongText();

console.log(longText);


// pass to the #text-container element in the HTML
textContainer.textContent = longText


// Now, we will listen to our key strokes, by adding Event Listener to the Document.
/*
- varaiables for traking
- listening key strokes - backspace or any word button pressed
- split our long text into single words, and use varaiables for index tracing
*/