const notifyButton = document.getElementById('notifyBtn');
const notifyIcon = document.getElementById('_notification');
const resetButton = document.getElementById('resetBtn');

notifyButton.addEventListener('click', () => {
    const counter = Number(notifyIcon.getAttribute("data-count")) || 0;
    notifyIcon.setAttribute("data-count", counter +1);
    notifyIcon.classList.add('count');
    notifyIcon.classList.add('notify');
});

notifyIcon.addEventListener('animationstart',()=>{
    notifyButton.setAttribute('disabled','');
    notifyButton.innerText = 'Notified'
})

notifyIcon.addEventListener('animationend',()=>{
    notifyIcon.classList.remove('notify');
    notifyButton.removeAttribute('disabled');
    notifyButton.innerText = 'Notify Me'
})

resetButton.addEventListener('click',()=>{
    notifyIcon.classList.remove('count');
    notifyIcon.removeAttribute("data-count");
})