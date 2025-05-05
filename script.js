// script.js

document.getElementById('start-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        // Сохраняем имя пользователя в localStorage
        localStorage.setItem('username', username);
        // Переходим на страницу теста
        window.location.href = 'test.html';
    } else {
        alert('Пожалуйста, введите ваше имя!');
    }
});

console.log(localStorage);
