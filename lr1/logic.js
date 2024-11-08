let fridge = null;  // Переменная для хранения объекта холодильника
let fridgeOpen = false;  // Статус холодильника (открыт/закрыт)

// Функция для создания объекта холодильника
function createFridge() {
    fridge = {
        color: "Черно-серый",
        brand: "VARD",
        model: "VRS177NI",
        price: "137.350 рублей"
    };

    // Показываем контейнер с изображением холодильника и кнопки управления
    document.getElementById("fridgeContainer").style.display = "block";
    document.getElementById("toggleDetails").style.display = "inline-block";
    document.getElementById("deleteFridge").style.display = "inline-block";

    // Скрываем кнопку "Создать холодильник"
    document.getElementById("createFridge").style.display = "none";
    alert('Объект "Холодильник" создан!');
}

// Функция для показа или скрытия характеристик холодильника
function toggleFridgeDetails() {
    const fridgeImage = document.getElementById("fridgeImage");
    const fridgeDetails = document.getElementById("fridgeDetails");

    // Переключаем состояние холодильника (открыт/закрыт)
    fridgeOpen = !fridgeOpen;

    if (fridgeOpen) {
        // Меняем изображение на "открытое"
        fridgeImage.src = "open_fridge.png";
        fridgeImage.alt = "Открытый холодильник";

        // Отображаем характеристики холодильника
        fridgeDetails.innerHTML = `
            <p><strong>Цвет:</strong> ${fridge.color}</p>
            <p><strong>Марка:</strong> ${fridge.brand}</p>
            <p><strong>Модель:</strong> ${fridge.model}</p>
            <p><strong>Цена:</strong> ${fridge.price}</p>
        `;
        fridgeDetails.style.display = "block";
        document.getElementById("toggleDetails").textContent = "Скрыть характеристики";
    } else {
        // Меняем изображение на "закрытое"
        fridgeImage.src = "closed_fridge.png";
        fridgeImage.alt = "Закрытый холодильник";

        // Скрываем характеристики
        fridgeDetails.style.display = "none";
        document.getElementById("toggleDetails").textContent = "Показать характеристики";
    }
}

// Функция для удаления холодильника
function deleteFridge() {
    fridge = null;  // Удаляем объект холодильника
    fridgeOpen = false;  // Сбрасываем состояние холодильника

    // Скрываем контейнер холодильника и кнопки управления
    document.getElementById("fridgeContainer").style.display = "none";
    document.getElementById("toggleDetails").style.display = "none";
    document.getElementById("deleteFridge").style.display = "none";

    // Показать кнопку "Создать холодильник"
    document.getElementById("createFridge").style.display = "inline-block";
    alert('Объект "Холодильник" удален!');
}

// Назначаем функции на кнопки
document.getElementById("createFridge").addEventListener("click", createFridge);
document.getElementById("toggleDetails").addEventListener("click", toggleFridgeDetails);
document.getElementById("deleteFridge").addEventListener("click", deleteFridge);
