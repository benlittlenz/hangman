const Board = (() => {
    let livesLeft = null;
    let canvas;
    let ctx;

    const init = () => {
        canvas = document.querySelector('.hangman__board');
        ctx = canvas.getctx("2d");
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'white';

        hangmanBase();
    }

    const draw = (startX, startY, endX, endY) => {
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    const hangmanBase = () => {
        baseLine();
        verticalLine();
        topLine();
    }

    //Base
    const baseLine = () => draw(0, 150, 150, 150);
    const verticalLine = () => draw(10, 0, 10, 300);
    const topLine = () => draw(0, 5, 80, 5);

    const rope = () => draw(60, 5, 60, 15);
    const head = () => {
        ctx.beginPath();
        ctx.arc(60, 25, 10, 0, Math.PI * 2);
        ctx.stroke();
    }
    const torso = () => draw(60, 36, 60, 70);
    const rightArm = () => draw(60, 46, 100, 50);
    const leftArm = () => draw(60, 46, 20, 50);
    const rightLeg = () => draw(60, 70, 100, 100);
    const leftLeg = () => draw(60, 70, 20, 100);

    const parts = [leftLeg, rightLeg, leftArm, rightArm, torso, head, rope]

    const render = () => {
        parts[livesLeft]();
    }

    const setLives = lives => {
        livesLeft = lives
        render();
    }

    return {
        init,
        setLives
    }
})()

export default Board;