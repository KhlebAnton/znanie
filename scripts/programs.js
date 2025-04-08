const filterBtnsGroup = document.querySelectorAll('.programs__filter-item__btns');
const programItems = document.querySelectorAll('.programs__item');

// Объект для хранения текущих фильтров (теперь используем массивы)
const activeFilters = {
    form: [],
    direction: [],
    base: [],
    spec: []
};

// Функция для обновления отображения программ
function updateProgramsDisplay() {
    programItems.forEach(item => {
        const itemForm = item.getAttribute('data-form');
        const itemDirection = item.getAttribute('data-direction');
        const itemBase = item.getAttribute('data-base');
        const itemSpec = item.getAttribute('data-spec');

        // Проверяем соответствие каждого фильтра
        const matchesForm = activeFilters.form.length === 0 || activeFilters.form.includes(itemForm);
        const matchesDirection = activeFilters.direction.length === 0 || activeFilters.direction.includes(itemDirection);
        const matchesBase = activeFilters.base.length === 0 || activeFilters.base.includes(itemBase);
        const matchesSpec = activeFilters.spec.length === 0 || activeFilters.spec.includes(itemSpec);

        if (matchesForm && matchesDirection && matchesBase && matchesSpec) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Обработчики для кнопок фильтрации
filterBtnsGroup.forEach(group => {
    const btns = group.querySelectorAll('.programs__filter-btn');
    const filterType = group.parentElement.querySelector('.programs__filter-item__title').textContent.trim();

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
           
            // Определяем тип фильтра по заголовку группы
            let filterKey;
            if (filterType === 'Форма обучения') filterKey = 'form';
            else if (filterType === 'Направление') filterKey = 'direction';
            else if (filterType === 'Обучение на базе') filterKey = 'base';
            else if (filterType === 'Специальность') filterKey = 'spec';

            // Получаем значение фильтра из data-атрибута кнопки
            const filterValue = btn.getAttribute(`data-${filterKey}`) || btn.textContent.trim();

            if (btn.classList.contains('active')) {
                // Если кнопка уже активна, удаляем фильтр
                btn.classList.remove('active');
                activeFilters[filterKey] = activeFilters[filterKey].filter(v => v !== filterValue);
            } else {
                // Если не активна, добавляем фильтр
                btn.classList.add('active');
                activeFilters[filterKey].push(filterValue);
            }

            // Обновляем отображение программ
            updateProgramsDisplay();
            updateIconFilter()
        });
    });
});

// Инициализация - показываем все программы
updateProgramsDisplay();

const btnMobileFilter = document.querySelector('.btn_filter_mobile');
const mobileFilter = document.querySelector('.programs__filter_mobile')

btnMobileFilter.addEventListener('click', ()=> {
    mobileFilter.classList.toggle('open');
    updateIconFilter()
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
});

function updateIconFilter() {
    if (Object.values(activeFilters).some(arr => arr.length > 0)) {
        btnMobileFilter.classList.add('full')
    } else {
        btnMobileFilter.classList.remove('full')
        
    }
}
const mobileFilterBtnRemove = document.querySelector('.btn_filter_remove');

mobileFilterBtnRemove.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    removeFilter();
    mobileFilter.classList.toggle('open');
})
function removeFilter() {
    filterBtnsGroup.forEach(group => {
        const btns = group.querySelectorAll('.programs__filter-btn');
        btns.forEach(btn => {
            btn.classList.remove('active');
        })
    });
    activeFilters.form =[];
    activeFilters.direction =[];
    activeFilters.base =[];
    activeFilters.spec =[];
    updateProgramsDisplay();
    updateIconFilter();
    
}