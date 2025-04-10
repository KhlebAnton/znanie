const btnMoreText = document.querySelector('.btn_more-text');
const hiddenText = document.querySelector('.typography__wrapper.hidden_text');

btnMoreText.addEventListener('click',()=> {
    hiddenText.classList.remove('hidden_text');
    btnMoreText.style.display='none';
})