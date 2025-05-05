// test-script.js

const questions = [
    { question: "1. Какой тег используется для создания гиперссылки?", answers: ["<link>", "<a>", "<href>"], correct: 1 },
    { question: "2. Какой атрибут используется для указания адреса ссылки в теге <a>?", answers: ["src", "href", "link"], correct: 1 },
    { question: "3. Какой тег используется для создания заголовка первого уровня?", answers: ["<h1>", "<header>", "<title>"], correct: 0 },
    { question: "4. Какой тег используется для вставки изображения?", answers: ["<img>", "<image>", "<picture>"], correct: 0 },
    { question: "5. Какой тег используется для создания ненумерованного списка?", answers: ["<ul>", "<ol>", "<list>"], correct: 0 },
    { question: "6. Какой атрибут используется для задания альтернативного текста для изображения?", answers: ["title", "src", "alt"], correct: 2 },
    { question: "7. Какой тег используется для создания таблицы?", answers: ["<table>", "<tab>", "<tbody>"], correct: 0 },
    { question: "8. Какой тег используется для создания абзаца?", answers: ["<p>", "<para>", "<text>"], correct: 0 },
    { question: "9. Какой атрибут указывает, что элемент является обязательным для заполнения в форме?", answers: ["mandatory", "required", "need"], correct: 1 },
    { question: "10. Какой тег используется для создания раздела документа?", answers: ["<div>", "<block>", "<section>"], correct: 2 },
    { question: "11. Какой селектор используется для выбора всех элементов с определенным классом?", answers: ["#class", ".class", "class"], correct: 1 },
    { question: "12. Какой свойство CSS используется для изменения цвета текста?", answers: ["color", "text-color", "font-color"], correct: 0 },
    { question: "13. Какое значение используется для задания прозрачности элемента?", answers: ["opacity", "transparency", "alpha"], correct: 0 },
    { question: "14. Какой селектор используется для выбора элемента с определенным идентификатором?", answers: [".id", "#id", "id"], correct: 1 },
    { question: "15. Какое свойство CSS используется для задания отступов внутри элемента?", answers: ["margin", "padding", "space"], correct: 1 },
    { question: "16. Какой единицей измерения в CSS является относительной?", answers: ["px", "%", "pt"], correct: 1 },
    { question: "17. Какое свойство используется для изменения шрифта элемента?", answers: ["font-family", "text-family", "font-type"], correct: 0 },
    { question: "18. Какой селектор используется для выбора элемента по его тегу?", answers: ["celement", "tag", "element"], correct: 2 },
    { question: "19. Какой свойство используется для задания фона элемента?", answers: ["background-color", "color", "fbg-color"], correct: 0 },
    { question: "20. Какой атрибут используется для управления отображением элементов в CSS Flexbox?", answers: ["display", "flex", "align"], correct: 0 },
    { question: "21. Какой метод используется для вывода сообщения в консоль?", answers: ["print()", "log.console()", "console.log()"], correct: 2 },
    { question: "22. Какой оператор используется для сравнения двух значений с учетом типа?", answers: ["==", "===", "!="], correct: 1 },
    { question: "23. Какой из следующих методов является асинхронным?", answers: ["setTimeout()", "forEach()", "map()"], correct: 0 },
    { question: "24. Какой из следующих типов данных не является примитивным в JavaScript?", answers: ["String", "Number", "Object"], correct: 2 },
    { question: "25. Какой символ используется для объявления однострочного комментария в JavaScript?", answers: [" // ", " /* ", " # "], correct: 0 },
    { question: "26. Какой метод используется для выбора элемента по его ID в DOM?", answers: ["document.getElementById()", "document.querySelector()", "document.selectById()"], correct: 0 },
    { question: "27. Какой метод позволяет добавить обработчик события к элементу?", answers: ["addEventListener()", "attachEvent()", "onEvent()"], correct: 0 },
    { question: "28. Какой метод позволяет создать новый элемент в DOM?", answers: ["document.createElement()", "document.newElement()", "document.addElement()"], correct: 0 },
    { question: "29.Какой метод используется для удаления элемента из DOM?", answers: ["removeChild()", "element.remove()", "deleteElement()"], correct: 1 },
    { question: "30. Какой метод позволяет отслеживать изменения в поле ввода?", answers: ["onchange", "oninput", "onupdate"], correct: 1 },
    
];

let currentQuestion = 0;
let score = 0;
let answerSelected = false; // Переменная для отслеживания выбора ответа

// Функция для загрузки текущего вопроса
function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    questionElement.textContent = questions[currentQuestion].question;
    answersElement.innerHTML = '';

    questions[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => {
            if (!answerSelected) { // Проверяем, был ли уже выбран ответ
                checkAnswer(index);
            }
        };
        answersElement.appendChild(button);
    });

    answerSelected = false; // Сбрасываем состояние для нового вопроса
}

// Функция для проверки выбранного ответа
function checkAnswer(selected) {
    const correctIndex = questions[currentQuestion].correct;
    const answersElement = document.getElementById('answers');

    if (selected === correctIndex) {
        score++;
        answersElement.children[selected].classList.add('correct');
    } else {
        answersElement.children[selected].classList.add('incorrect');
        answersElement.children[correctIndex].classList.add('correct');
    }

    answerSelected = true; // Устанавливаем состояние, что ответ выбран
    disableAnswerButtons(); // Отключаем кнопки ответов

    currentQuestion++;
    document.getElementById('next-button').style.display = 'block';
}

// Функция для отключения кнопок ответов
function disableAnswerButtons() {
    const answersElement = document.getElementById('answers');
    Array.from(answersElement.children).forEach(button => {
        button.disabled = true; // Отключаем каждую кнопку
    });
}

// Обработка нажатия кнопки "Далее"
document.getElementById('next-button').onclick = () => {
    if (currentQuestion < questions.length) {
        loadQuestion();
        document.getElementById('next-button').style.display = 'none';
    } else {
        showResults();
    }
};

// Функция для перенаправления на страницу результатов
function showResults() {
    localStorage.setItem('testScore', score); // Сохраняем результат в localStorage
    localStorage.setItem('totalQuestions', questions.length); // Сохраняем общее количество вопросов
    window.location.href = 'result.html'; // Перенаправляем на страницу результатов
}

// Загружаем первый вопрос
loadQuestion();
