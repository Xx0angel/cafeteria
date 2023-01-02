// 
let menu = document.querySelector('.bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('show');
    menu.classList.toggle('fa-times');
}