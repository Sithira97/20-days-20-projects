const scrollIndicator = document.getElementById('scrollIndicator');

const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

function updateScrollInidcator() {
    const scrollPresentage = (window.scrollY / totalScrollHeight) * 100;
    scrollIndicator.style.width = scrollPresentage + "%";
}

window.addEventListener('scroll',updateScrollInidcator);