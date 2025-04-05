const swiperLife = new Swiper('.swiper__section_life-school', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: false,
    
    
    // Стрелки навигации
    navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
    },
    
   
});


const videoBtns = document.querySelectorAll('.life-news__video');
const popupVideo = document.querySelector('.popup_video');
const popupVideoElem = popupVideo.querySelector("video");

function showPopupVideo() {
    popupVideo.classList.remove('hidden');

    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
};
function hidePopupVideo() {
    popupVideo.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
}
popupVideo.querySelector('.close_popup').addEventListener('click', ()=> {
    hidePopupVideo();
    popupVideoElem.pause();
    popupVideoElem.currentTime = 0;
})
videoBtns.forEach(btn=> {
    const videoSrc = btn.querySelector('video').src;

    btn.addEventListener('click', ()=> {
        popupVideoElem.src = videoSrc;
        popupVideoElem.play()
        showPopupVideo();
    })
});
