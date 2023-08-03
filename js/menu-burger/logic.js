let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let linkAbout = document.querySelector('.link-about-us');
let linkService = document.querySelector('.link-service');
let linkProject = document.querySelector('.link-project');
let linkCompany = document.querySelector('.link-company');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

linkAbout.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

linkService.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

linkProject.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

linkCompany.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});