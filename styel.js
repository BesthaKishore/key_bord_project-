const Buttons = document.querySelectorAll('.btn');
const textarea = document.querySelector('textarea');

const space_btn = document.querySelector('.space');
const shift_btn = document.querySelector('.shift');
const delet_btn = document.querySelector(".Delete");

let char = [];

Buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText;
        char = textarea.value.split('');
    })
}) 

delet_btn.addEventListener('click', () => {
    char.pop();
    textarea.value = char.join('');
})

shift_btn.addEventListener('click', () => {
    Buttons.forEach(btn => {
        btn.classList.toggle('upper');
    })
})

space_btn.addEventListener('click', () => {
    char.push(' ');
    textarea.value = char.join('');
})