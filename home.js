const Home = () => {
    const HangmanElement = document.querySelector('.hangman');

    let markup = ``;
    markup += `
        <div class="hangman__title">Hangman</div>
        <button class="button start">New Game</button>
        <button class="button instructions">Instructions</button>
    `;
    HangmanElement.innerHTML = markup;

    document.querySelector('.start').addEventListener('click', () => {
        console.log('start')
    });

    document.querySelector('.instructions').addEventListener('click', () => {
        console.log('Instructions')
    });
};

export default Home;