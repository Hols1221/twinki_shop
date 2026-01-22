const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const snowflakes = [];

for (let i = 0; i < 180; i++) {
    snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        s: Math.random() * 1.5 + 0.5
    });
}

function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    ctx.beginPath();
    for (let f of snowflakes) {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        f.y += f.s;

        if (f.y > canvas.height) {
            f.y = -5;
            f.x = Math.random() * canvas.width;
        }
    }
    ctx.fill();

    requestAnimationFrame(drawSnow);
}

drawSnow();
