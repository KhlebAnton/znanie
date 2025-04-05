const swiperFeedback = new Swiper('.swiper__section_feedback', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: false,
    
    
    // Стрелки навигации
    navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
    },
    
   
});