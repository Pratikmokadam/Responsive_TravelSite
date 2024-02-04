const navbar = document.getElementById('navbar');
window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
}

const scrollrevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 800,
}

ScrollReveal().reveal('.home h1',scrollrevealOption)
ScrollReveal().reveal('.home h4',{
    ...scrollrevealOption,
    delay:800,
})


const iconBtn = document.querySelector('.icon-bars');
const navigation = document.querySelector('.navigation');
const link = document.querySelector('link');

iconBtn.addEventListener('click',()=>{
    navigation.classList.toggle('navi');
})

window.onscroll = () => {
    navigation.classList.remove('navi');
    formDiv.classList.remove('hide');
    home.style.filter = 'none';
    content.style.filter = 'none'; 

}

const loginBtn = document.querySelector('.logbtn');
const formDiv = document.querySelector('.formDiv');
const cancel = document.querySelector('#cancel');
const home  = document.querySelector('.home');
const content  = document.querySelector('.content');



loginBtn.addEventListener('click',()=>{
    formDiv.classList.toggle('hide');
    home.style.filter = 'blur(5px)'; 
    content.style.filter = 'blur(5px)'; 

});

cancel.addEventListener('click',()=>{
    formDiv.classList.toggle('hide');
    home.style.filter = 'none'; 
    content.style.filter = 'none'; 

});



