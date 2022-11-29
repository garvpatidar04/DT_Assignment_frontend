const three_dot = document.querySelector('.three_dot');
const ul = document.querySelector('.card');
const aside_menu = document.querySelector('.menu_btn');
const demo_ul = document.querySelector('.aside');

three_dot.addEventListener('click',e=>{
    ul.classList.toggle("show");
});

aside_menu.addEventListener('click',e=>{
    demo_ul.classList.toggle("demo_show");
});