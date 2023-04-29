const selector = document.querySelector('.header > img');
const list = document.querySelector('.list');
const listItems = document.querySelectorAll('.list-item');
const selected = document.querySelector('.selected');

let listHeight = getComputedStyle(list).height;
let itemHeight = getComputedStyle(listItems[0]).height.replace('px', '');

let isOpen = false;

selector.addEventListener('click', () => {
    if (!isOpen) {
        isOpen = true;        
        list.style.height = `${(itemHeight*1+16*0.5*2+16*0.5)*6 + 7}px`;
        listItems.forEach(item => {
            item.classList.add('showing');
        })
        selector.classList.toggle('activated');
    } else {
        isOpen = false;
        listItems.forEach(item => {
            item.classList.remove('showing');
        })
        list.style.height = "0px";
        selector.classList.toggle('activated');
    }
})

list.addEventListener('click', (e) => {
    const clicked = e.target.closest('.list-item');
    
    if (clicked) {
        selected.innerHTML = clicked.innerHTML;
    }
})

/* window.addEventListener('resize', () => {
    let listHeight = getComputedStyle(list).height;
    let itemHeight = getComputedStyle(listItems[0]).height.replace('px', '');
}) */

const wrapper = document.querySelector('.wrapper');
const dropdownSelector = document.querySelector('.dropdown-selector');
const buttons = document.querySelectorAll('button');

backgrounds = [
    "#fff",
    "rgb(11, 11, 11)",
    "rgb(9, 9, 9)",
    "rgb(16, 18, 27)"
]

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        wrapper.style.backgroundColor = backgrounds[index];
        dropdownSelector.classList.remove(
            dropdownSelector.classList[2]
        )
        dropdownSelector.classList.add(`variation-${index+1}`)
    })
})

document.body.addEventListener('click', (e) => {
    if(e.target !== selector && !e.target.classList.contains('button')) {
        if (isOpen) {
            isOpen = false;
            listItems.forEach(item => {
                item.classList.remove('showing');
            })
            list.style.height = "0px";
            selector.classList.toggle('activated');
        }
    }
})
