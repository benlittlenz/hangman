const randomize = () => {
    return words[Math.floor(Math.random() * words.length)];
}

const spaceFill = () => {
    return Array(randomWord.length).fill('_');
}

const HangmanElement = document.querySelector('.hangman');

const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const words = ['javascript','hola', 'banana'];

let randomWord,
    guessingWord;

let lives = 7;
let remainingGuesses = [];

randomWord = randomize();
guessingWord = spaceFill();

let markup = ``;

const home = () => {
    return markup += `
        <div class="hangman__title">Hangman</div>
        <button class="button start">New Game</button>
        <button class="button instructions">Instructions</button>
    `;
}


HangmanElement.innerHTML = home();

const initPage = () => {
    let markup = `
        <p class="hangman__stats">Lives:
            <span class="hangman__lives">${lives}</span>
        </p>
        <h1 class="hangman__title">Hangman></h1>
        <canvas class="hangman__board height="155px"></canvas>
        <div class="hangman__word">${guessingWord.join("")}</div>
        <p class="hangman__instructions">Pick a letter below to guess the whole word</p>
        <ul class="hangman__letters">
            ${letters.map(letter => (
                `<li class="hangman__letter">${letter}</li>`
            ))}
        </ul>
        <button class="button hangman__trigger">Main Menu</button>
    `
    HangmanElement.innerHTML = markup;
}

HangmanElement.addEventListener('click', event => {
    
    if (event.target.matches('.hangman__trigger')) {
        HangmanElement.innerHTML = markup
    }
})



document.querySelector('.start').addEventListener('click', () => {
    console.log(randomWord)
    console.log(guessingWord)
    initPage();
});

document.querySelector('.instructions').addEventListener('click', () => {
    console.log('Instructions')
});
