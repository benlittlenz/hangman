const app = () => {
    const HangmanElement = document.querySelector('.hangman');
    let markup = ``;

    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const words = ['javascript','hola', 'banana'];

    let randomWord,
        guessingWord,
        lives,
        remainingGuesses;
    
    const randomize = () => {
        return words[Math.floor(Math.random() * words.length)];
    }

    randomWord = randomize();
    guessingWord = Array(randomWord.length).fill('_');

    markup += `
        <div class="hangman__title">Hangman</div>
        <button class="button start">New Game</button>
        <button class="button instructions">Instructions</button>
    `;
    
    HangmanElement.innerHTML = markup;

    document.querySelector('.start').addEventListener('click', () => {
        console.log(randomWord)
        console.log(guessingWord)
    });

    document.querySelector('.instructions').addEventListener('click', () => {
        console.log('Instructions')
    });
};

app();