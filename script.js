// ❄️ Снег
var canvas = document.getElementById("snow");
if (canvas) {
    var ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var snowflakes = [];

    for (var i = 0; i < 150; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 3 + 1,
            s: Math.random() * 1 + 0.5
        });
    }

    function snow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.beginPath();

        for (var j = 0; j < snowflakes.length; j++) {
            var f = snowflakes[j];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
            f.y += f.s;
            if (f.y > canvas.height) {
                f.y = -5;
                f.x = Math.random() * canvas.width;
            }
        }

        ctx.fill();
        requestAnimationFrame(snow);
    }

    snow();

    window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// 🌐 Онлайн счетчик через CountAPI
var countElement = document.getElementById('online-count');

if (countElement) {
    fetch('https://api.countapi.xyz/hit/twinki_shop/online')
        .then(function(res) { return res.json(); })
        .then(function(res) {
            countElement.textContent = res.value;
        })
        .catch(function(err) {
            console.error('Ошибка получения счетчика:', err);
        });
}
