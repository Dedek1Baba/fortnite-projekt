const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const battleBus = new Image();
battleBus.src = "./res/img/boss/battle_bus.png";

let bossPaths = [
    "./res/img/boss/battle_bus.png",
    "./res/img/boss/BOSS.png",
    "./res/img/boss/fnkid.png",
    "./res/img/boss/kevin.png",
    "./res/img/boss/mecha.png"
];

canvas.width = 1280;
canvas.height = 720;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 1280, 720);

ctx.fillStyle = "orange";
ctx.fillRect(100, 200, 100, 200);

ctx.strokeStyle = "black";
ctx.strokeRect(400, 200, 100, 200);
ctx.strokeRect(100, 200, 100, 200);

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 100);
ctx.lineTo(100, 100);
ctx.lineTo(150, 100);
ctx.lineTo(200, 100);
ctx.lineTo(50, 50);
ctx.fill();


ctx.beginPath();
ctx.arc(620, 250, 100, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(650, 210, 15, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(590, 210, 15, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(620, 280, 35, 0, 2 * Math.PI);
ctx.stroke();


let bus = {
    x: 200,
    y: 200,
    xVelocity: 1,
    yVelocity: 1,
}



window.onload = () => {
    setInterval(() => {
        if (canvas.width <= bus.x + 200){
            bus.xVelocity *= -1;
            battleBus.src = bossPaths[1];
        }
        if (bus.x <= 0){
            bus.xVelocity *=-1;
            battleBus.src = bossPaths[3];
        }
        if (canvas.height <= bus.y + 200){
            bus.yVelocity *= -1;
            battleBus.src = bossPaths[2];
        }
        if (bus.y <= 0){
            bus.yVelocity *= -1;
            battleBus.src = bossPaths[4];

        }

        bus.x += bus.xVelocity;
        bus.y+= bus.yVelocity;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 1280, 720)
        ctx.drawImage(battleBus, bus.x, bus.y, 200, 200);
    }, 10);
}