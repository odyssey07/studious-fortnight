import * as neonButton from './js/neon-button.js'

import * as movingGradient from './js/moving-gradient.js'

import * as serpentStyle from './js/serpent-style.js'

const animations = [neonButton, movingGradient, serpentStyle];

const main = document.querySelector('main');

animations.forEach(animation => {
    animation.tab.addEventListener('click', function(e) {
        e.preventDefault();
        onlyOne(animation);
        document.title = animation.title;
        main.classList.add(animation.className);
        main.innerHTML = animation.button;
    })
})

function onlyOne(animation) {
    animations.forEach(animation => {
        animation.tab.classList.remove('selected-tab');
        main.classList.remove(animation.className)
    })
    
    animation.tab.classList.add('selected-tab');
}
