const popupTable = document.querySelector('.popup_table');
const popupTableClose = popupTable.querySelector('.close_popup');

popupTableClose.addEventListener('click', hidePopupTable)

function showPopupTable() {
    popupTable.classList.remove('hidden')
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
}
function hidePopupTable() {
    popupTable.classList.add('hidden')
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
}

const tableLinks = document.querySelectorAll('.table_info__link');

tableLinks.forEach(link => {
    link.addEventListener('click', showPopupTable)
})