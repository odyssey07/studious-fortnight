// .#replica

const icons = document.querySelectorAll('.controls > img');
const blueBarJ = document.querySelector('.blue-bar-container');

icons.forEach((div, index) => {
    div.addEventListener('click', function() {
        blueBarJ.style.transform = `translate(${index*100}%)`;

        icons.forEach(img => img.classList.remove('selected'));

        icons[index].classList.add('selected');

        document.querySelectorAll('.panel')
            .forEach(panel => panel.classList.remove('show'));

        document.querySelector(`.panel-${index}`).classList.add('show')
    })
})

const buttons = document.querySelectorAll('.manager > button');

classNames = ['test-version', 'real-version-1', 'real-version-2', 'real-version-3'];

buttons.forEach((button, i) => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const container = document.querySelector('.container')
        for (let i=0; i<buttons.length; i++) container.classList.remove(classNames[i])
        container.classList.add(classNames[i])
    })
})