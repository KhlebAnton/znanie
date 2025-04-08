const swiperNavigation = new Swiper('.swiper__section_navigation', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: false,
    
    // Стрелки навигации
    navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
    },
});

 // Получаем все изображения с классом zoomable-image
 const images = document.querySelectorAll('.zoomable-image');
 const modal = document.getElementById('imageModal');
 const modalImg = document.getElementById('fullsizeImage');
 const closeBtn = document.querySelector('.close_img');
 
 // Добавляем обработчик клика для каждого изображения
 images.forEach(img => {
     img.addEventListener('click', function() {
         modal.style.display = "block";
         modalImg.src = this.querySelector('img').src;
         modalImg.alt = this.querySelector('img').alt;
         document.body.classList.add('no-scroll');
         document.documentElement.classList.add('no-scroll');
     });
 });
 
 // Закрытие модального окна при клике на крестик
 closeBtn.addEventListener('click', function() {
     modal.style.display = "none";
     document.body.classList.remove('no-scroll');
     document.documentElement.classList.remove('no-scroll');
 });
 
 // Закрытие модального окна при клике вне изображения
 modal.addEventListener('click', function(e) {
     if (e.target === modal) {
         modal.style.display = "none";
         document.body.classList.remove('no-scroll');
         document.documentElement.classList.remove('no-scroll');
     }
 });