const End = (() => {
    const state = {
        chosenWord: null,
        winOrLose: null
    }
    const hangmanEl = document.querySelector('.hangman');

    const setState = (obj) => {
        state.chosenWord = obj.chosenWord;
        state.winOrLose = obj.winOrLose;
        render();
    }   

    const render = () => {
        let markup = `
            <h1 class="hangman__title">Game Over</h1>
            <p class="result">You ${state.winOrLose.toUpperCase()} <br>
            The word is: ${state.chosenWord.toUpperCase()}</p>
            <button class="button hangman__menu">Main Menu</button>
        `
        hangmanEl.innerHTML = markup;
    }
        return {
            setState
        }

})();

export default End;