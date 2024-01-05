const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gameLoop = () => {
    clear();

    update();

    render();

    fps();

    window.requestAnimationFrame(gameLoop);
}

const clear = () => {}
const update = () => {}
const render = () => {}
const fps = () => {}

window.onLoad = () => {
    window.requestAnimationFrame(gameLoop);
}