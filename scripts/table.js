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

const container = document.querySelector('.section_table');
let isDragging = false;
let startX, startY;
let scrollLeft, scrollTop;

// Обычный курсор при наведении
container.style.cursor = 'default'; 

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  
  // Определяем направление скролла (горизонтальное/вертикальное)
  const isHorizontalScroll = container.scrollWidth > container.clientWidth;
  const isVerticalScroll = container.scrollHeight > container.clientHeight;
  
  // Меняем курсор в зависимости от возможного направления скролла
  if (isHorizontalScroll && isVerticalScroll) {
    container.style.cursor = 'move'; // если скролл в обе стороны
  } else if (isHorizontalScroll) {
    container.style.cursor = 'ew-resize'; // ↔ стрелки влево-вправо
  } else if (isVerticalScroll) {
    container.style.cursor = 'ns-resize'; // ↕ стрелки вверх-вниз
  }
  
  startX = e.pageX - container.offsetLeft;
  startY = e.pageY - container.offsetTop;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop;
  
  e.preventDefault();
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'default'; // Возвращаем обычный курсор
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const y = e.pageY - container.offsetTop;
  const walkX = (x - startX) * 2;
  const walkY = (y - startY) * 2;
  container.scrollLeft = scrollLeft - walkX;
  container.scrollTop = scrollTop - walkY;
});