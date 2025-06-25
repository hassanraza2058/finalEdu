let hamberger = document.querySelector('.hamburger');
let close_btn = document.querySelector('.close-menu');

hamberger.addEventListener('click', function () {
    document.querySelector('.sidebar').style.left = '0%';
});

close_btn.addEventListener('click', function () {
    document.querySelector('.sidebar').style.left = '-20%';
});