const display = document.getElementById('_status');
const body = document.body;
const submit = document.getElementById('_submit');
const refresh = document.getElementById('_refresh');
const input = document.getElementById("client-text");

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let captcha = "";
const captchalength = 6;

function refreshCAPCHA() {
    let newcaptcha = ""
    for (let i = 0; i < captchalength; i++) {
        const randomChar = char[Math.floor(Math.random() * char.length)];
        newcaptcha += randomChar;
    }
    captcha = newcaptcha
    document.getElementById('_generator').value = captcha;
    display.innerText = 'CAPTHA Generator'
    input.value = "";
}

body.onload = refreshCAPCHA;
refresh.onclick = refreshCAPCHA;

submit.onclick = function checkInput() {
    inputValue = input.value
    if (!inputValue) {
        display.innerHTML = "Please Enter a CAPTCHA";
        display.style.color = 'red'
        setTimeout(() => { display.innerHTML = 'CAPTHA Generator'; display.style.color = '#356897'}, 5000);
    }
    else if (inputValue !== captcha) {
        refreshCAPCHA();
        display.innerHTML = "Wrong! Please Try Again.";
        display.style.color = 'red'
        setTimeout(() => { display.innerHTML = 'CAPTHA Generator'; display.style.color = '#356897'}, 1000);
        input.value = "";
    } else {
        display.innerHTML = "Correct! CAPTCHA";
        display.style.color = 'green'
        setTimeout(() => { display.innerHTML = 'CAPTHA Generator'; display.style.color = '#356897' }, 5000);
    };
}


