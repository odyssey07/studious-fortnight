const works = [() => console.log(0)];

function app(number) {
    return works[number]();
}

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

works.push(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /* window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })*/
    
    const mouse = {
        x: null,
        y: null
    }

    function drawCircle() {
        ctx.fillStyle = 'aqua';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
        ctx.fill();
    }

    canvas.addEventListener('click', e => {        
        mouse.x = e.x;
        mouse.y = e.y;
        console.log(mouse);

        drawCircle()
    })
})

works.push(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /* window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }) */

    const mouse = {
        x: null,
        y: null
    }

    function drawCircle() {
        ctx.fillStyle = 'aqua';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }

    let mouseDown = false;
    canvas.addEventListener('mousedown', () => { mouseDown = true });
    canvas.addEventListener('mouseup', () => { mouseDown = false });

    canvas.addEventListener('mousemove', e => {
        if (mouseDown) {
            mouse.x = e.x;
            mouse.y = e.y;
            console.log(mouse);

            drawCircle()
        }
    })
})

app(2);

// ctx.moveTo(x, y)
// ctx.lineTo(x, y)
