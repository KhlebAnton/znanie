const btnMenuNav = document.querySelector('.btn_menu-nav');
const headerNav = document.querySelector('.header-nav');

btnMenuNav.addEventListener('click', ()=> {
    headerNav.classList.add('open');
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
})