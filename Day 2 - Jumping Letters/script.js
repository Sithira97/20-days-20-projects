const lettersC = document.querySelectorAll('.letters.click span')

lettersC.forEach(letter => {
    letter.addEventListener('click', (ev) => {
        ev.target.classList.add('active');
        setTimeout(() => { ev.target.classList.remove('active'); }, 1000)
    });
})

const lettersH = document.querySelectorAll('.letters.hover span')

lettersH.forEach(letter => {
    letter.addEventListener('mouseover', (ev) => {
        ev.target.classList.add('hovered');
        setTimeout(() => { ev.target.classList.remove('hovered'); }, 2000)
    });
})