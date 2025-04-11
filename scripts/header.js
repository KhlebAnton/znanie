const btnMenuNav = document.querySelector('.btn_menu-nav');
const headerNav = document.querySelector('.header-nav');

btnMenuNav.addEventListener('click', ()=> {
    headerNav.classList.add('open');
    if(!isHeaderWhite) {
        header.classList.remove('header_white');
        header.classList.remove('bg_white');
        
    } else {
        header.classList.remove('bg_white');
    }
    visContent.classList.add('hidden');
    pageVersionBtn.classList.remove('open')
    setTimeout(()=> {
        headerNav.classList.remove('open');
    },2000)
});

const mobileMenuBtn = document.querySelector('.mobile_menu-btn');
const mobileMenu = document.querySelector('.mobile_menu');

mobileMenuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('hidden');
    setTimeout(()=> {
        mobileMenuBtn.classList.toggle('close_btn');
        document.body.classList.toggle('no-scroll');
        document.documentElement.classList.toggle('no-scroll');
    },300)
  
    mobileMenuBtn.classList.add('anim');
    setTimeout(()=>  mobileMenuBtn.classList.remove('anim'),600)
});


const footerNavLink = document.querySelectorAll('.footer__nav-list__title');

footerNavLink.forEach(elem => {
    elem.addEventListener('click', ()=> {
        elem.classList.toggle('open')
    })
});


const header = document.querySelector('.header')
const pageVersionBtn = document.querySelector('.page_version');
const visContent = document.querySelector('.visually__content');

let isHeaderWhite = Boolean(header.classList.contains('header_white'));
pageVersionBtn.addEventListener('click', ()=> {
    if(!isHeaderWhite) {
        header.classList.toggle('header_white');
        
        
    }
    header.classList.toggle('bg_white');
    visContent.classList.toggle('hidden');
    pageVersionBtn.classList.toggle('open')
});


const visuallyBtnFontMin = document.querySelector('.visually-btn__font-minus');
const visuallyBtnFontPlus = document.querySelector('.visually-btn__font-plus');
let fontSize = 18;
visuallyBtnFontMin.addEventListener('click', ()=> {
    fontSize--
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
});
visuallyBtnFontPlus.addEventListener('click', ()=> {
    fontSize++
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
});

const visuallyBtnColors = document.querySelectorAll('.visually-btn-color');

visuallyBtnColors.forEach(btn =>{
    btn.addEventListener('click', ()=> {
        let background = btn.style.backgroundColor;
        let color = btn.style.color;
        document.documentElement.style.setProperty('--color-text-white', `${color}`);
        document.documentElement.style.setProperty('--color-text', `${color}`);
        document.documentElement.style.setProperty('--color-dark', `${color}`);
        document.documentElement.style.setProperty('--primary-color', `${color}`);
        document.documentElement.style.setProperty('--color-text-light', `${color}`);


        
        document.documentElement.style.setProperty('--color-bg-primary', `${background}`);
        document.documentElement.style.setProperty('--color-bg', `${background}`);
        document.documentElement.style.setProperty('--primary-color-bg', `${background}`);
       
        
    })
   
});

const visuallyRemoveBtn = document.querySelector('.visually-btn__remove');

visuallyRemoveBtn.addEventListener('click', ()=> {
    document.documentElement.style = ''
})
