import End from './modules/endScreen';

const randomize = () => words[Math.floor(Math.random() * words.length)];
const spaceFill = () => Array(randomWord.length).fill('_');

const HangmanElement = document.querySelector('.hangman');

const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const words = ['javascript','hola', 'banana'];

let randomWord,
    guessingWord;

let lives = 7;
let guessedLetters = [];

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

const createLetters = () => {
    let markup = ``;
    letters.forEach(letter => {
        const isActive = isLetterTaken(letter) ? 'hangman__letter--active' : '';
        markup += `
            <li class="hangman__letter ${isActive}">${letter}</li>
        `
    })
    return markup
}

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
            ${createLetters()}
        </ul>
        <button class="button hangman__trigger">Main Menu</button>
    `
    HangmanElement.innerHTML = markup;
}

HangmanElement.addEventListener('click', event => {
    if(event.target.matches('.hangman__letter')) {
        check(event.target.innerHTML)
    }
    
    if (event.target.matches('.hangman__trigger')) {
        HangmanElement.innerHTML = markup
    }
});

const isLetterTaken = letter => guessedLetters.includes(letter);

const check = guess => {
    if(isLetterTaken(guess)) return;

    guessedLetters.push(guess);
    if(randomWord.includes(guess)) {
        updateGuessingWord(guess)
    } else {
        lives--
    }

    render();
   
    isGameOver();
}

const hasWon = () => guessingWord.join('') === randomWord
const hasLost = () => lives <= 0

const isGameOver = () => {
    if(hasWon()) {
        End.setState({
            randomWord,
            result: 'win'
        })
    }
    if(hasLost()) {
        End.setState({
            randomWord,
            result: 'lose'
        })
    }
}

const render = () => {
    document.querySelector('.hangman__lives').innerHTML = lives;
    document.querySelector('.hangman__word').innerHTML = guessingWord.join('');
    document.querySelector('.hangman__letters').innerHTML = createLetters();
}

const updateGuessingWord = letter => {
    randomWord.split("").map((elem, index) => {
        if(elem === letter) {
            guessingWord[index] = elem;
        }
        
    })
}


document.querySelector('.start').addEventListener('click', () => {
    initPage();
});

document.querySelector('.instructions').addEventListener('click', () => {
});
