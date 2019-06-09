const Board = (() => {
    let livesLeft = null;
    let canvas;
    let context;

    const init = () => {
        canvas = document.querySelector('.hangman__board');
        context = canvas.getContext("2d");
        context.lineWidth = 2;
        context.strokeStyle = 'white';

        baseLine();
        verticalLine();
        topLine();
    }

    const draw = (startX, startY, endX, endY) => {
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
    }
    //Base
    const baseLine = () => draw(0, 150, 150, 150);
    const verticalLine = () => draw(10, 0, 10, 300);
    const topLine = () => draw(0, 5, 80, 5);

    const rope = () => draw(60, 5, 60, 15);
    const head = () => {
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.Pi * 2);
        context.stroke();
    }
    const torso = () => draw(60, 36, 60, 70);
    const rightArm = () => draw(60, 46, 100, 50);
    const leftArm = () => draw(60, 46, 20, 50);
    const rightLeg = () => draw(60, 70, 100, 100);
    const leftLeg = () => draw(60, 70, 20, 100);

    

    const setLives = lives => {
        livesLeft = lives
        baseLine();
        verticalLine();
        topLine();
    }

    return {
        init,
        setLives
    }
})()

export default Board;