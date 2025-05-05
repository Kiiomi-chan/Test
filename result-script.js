// Получаем результат и общее количество вопросов из localStorage
const score = localStorage.getItem('testScore');
const totalQuestions = localStorage.getItem('totalQuestions');
const username = localStorage.getItem('username'); // Получаем имя пользователя

// Отображаем результат
const resultElement = document.getElementById('result');
resultElement.textContent = `Ваш результат: ${score} из ${totalQuestions}`;

// Проверка наличия данных перед отправкой
if (username && score !== null) {
    // Отправка результата на сервер
    fetch('http://localhost:3000/save_result', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, score })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Результат успешно сохранен:', data);
    })
    .catch((error) => {
        console.error('Ошибка при сохранении результата:', error);
    });
} else {
    console.error('Ошибка: недостающие данные для отправки на сервер.');
}

// Обработчик для кнопки "Пройти тест снова"
document.getElementById('restart-button').onclick = () => {
    localStorage.removeItem('testScore'); // Удаляем результат из localStorage
    localStorage.removeItem('totalQuestions'); // Удаляем общее количество вопросов
    localStorage.removeItem('username'); // Удаляем имя пользователя
    window.location.href = 'index.html'; // Перенаправляем на страницу с тестом
};

console.log(localStorage);
