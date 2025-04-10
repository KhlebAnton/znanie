// Конфигурация для intlTelInput
const intlTelInputConfig = {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    preferredCountries: ['ru'],
    separateDialCode: true,
    initialCountry: "ru",
    formatOnDisplay: true,
};

// Находим input для телефона внутри формы
const form = document.getElementById('form');
const phoneInput = form.querySelector('input[type="tel"]');

// Инициализация intlTelInput
const iti = intlTelInput(phoneInput, intlTelInputConfig);
phoneInput.value = `+${iti.getSelectedCountryData().dialCode}`;

// Функция для обработки отправки формы
function handleFormSubmit(form, itiInstance) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const phoneNumber = itiInstance.getNumber();

        if (itiInstance.isValidNumber()) {
            form.querySelector('.phone-error').style.display = "none";
            alert("Телефон: " + phoneNumber);
        } else {
            form.querySelector('.phone-error').style.display = "block";
        }
    });
}

// Привязка обработчика событий к форме
handleFormSubmit(form, iti);