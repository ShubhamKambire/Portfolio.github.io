const navmen = document.getElementById('nav-menu');
const navclos = document.getElementById('nav-close');
const navtog = document.getElementById('nav-toggle');



if(navtog){
    navtog.addEventListener('click',()=>{
        navmen.classList.add('show-menu')
    })
}

if(navclos){
    navclos.addEventListener('click',()=>{
        navmen.classList.remove('show-menu')
    })
}


const navlink = document.querySelectorAll('.nav__link');


function actionlink(){
    const navmen = document.getElementById('nav-menu');
    navmen.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click',actionlink))



/*=================================Acordian Skills===================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsheader = document.querySelectorAll('.skills__header');

console.log(skillsContent);

function toggleskills(){
    let itemclass = this.parentNode.className;
    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
        
    }

    if(itemclass == 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}


skillsheader.forEach((el)=>{
    el.addEventListener('click', toggleskills);
})


/*=============================Services Modal ============================================*/


const Modalviews = document.querySelectorAll('.services__modal'),
    Modalbtns = document.querySelectorAll('.services__button')
    Modalclose = document.querySelectorAll('.services__modal-close');



function modal(modalclick){
    Modalviews[modalclick].classList.add('active-modal');
}


Modalbtns.forEach((Modalbtn,i)=>{
    Modalbtn.addEventListener('click',()=>{
        modal(i)
    })
})

Modalclose.forEach((modalclose)=>{
    modalclose.addEventListener('click',()=>{
        Modalviews.forEach((modalview)=>{
            modalview.classList.remove('active-modal')
        })
    })
})


/*===============================================================portfolio============================*/





let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    
});



/*===================================================scroll-active-link============================================*/


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    
    if(this.scrollY >= 560) scrollup.classList.add('show__scroll'); else scrollup.classList.remove('show__scroll')
}

window.addEventListener('scroll',scrollUp)

const themechange = document.getElementById('change-theme');
console.log(themechange);
const darktheme = 'dark-theme';
const icontheme = 'uil-cloud-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const currenttheme = () => document.body.classList.contains('dark-theme')? 'dark' : 'light'

const currenticon = ()  => themechange.classList.contains(icontheme)? 'uil-cloud-moon' : 'uil-cloud-sun'


if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)
    themechange.classList[selectedIcon === 'uil-cloud-moon' ? 'add' : 'remove'](icontheme)
}

themechange.addEventListener('click',()=>{
    document.body.classList.toggle(darktheme)
    themechange.classList.toggle(icontheme)
    localStorage.setItem('selected-theme', currenttheme())
    localStorage.setItem('selected-icon', currenticon())
    
})