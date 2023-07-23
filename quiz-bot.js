const quizData = [
    {
        difficult: "Сложность: легкая",
        question: "Как посмотреть основное меню игрока?",
        a: "/main",
        b: "/menu_bar",
        c: "/menu",
        d: "/main_bar",
        correct: "/menu"
    },
    {
        difficult: "Сложность: легкая",
        question: "Связь с администрацией",
        a: "/adm",
        b: "/report",
        c: "/rpt",
        d: "/admin",
        correct: "/report"
    },
    {
        difficult: "Сложность: легкая",
        question: "Помощь и подсказки по игре",
        a: "/hellp",
        b: "/faq",
        c: "/FAQ",
        d: "/help",
        correct: "/help"
    },
    {
        difficult: "Сложность: средняя",
        question: "Описание РП действий от 1-го лица",
        a: "/do",
        b: "/todo",
        c: "/try",
        d: "/me",
        correct: "/me"
    }
]

const diff = document.getElementById('diff');
const quiz = document.getElementById('question');
const a = document.getElementById('a_text');
const b = document.getElementById('b_text');
const c = document.getElementById('c_text');
const d = document.getElementById('d_text');
const form = document.getElementById('form');
const fildInput = document.getElementById('fild');
const quizContainer = document.getElementById('quizContainer');

let currentQuiz = 0;
let countTrueAns = 0;
let countFalseAns = 0;

form.addEventListener('submit', startQuiz);

function checkResult() {
    const percent = countTrueAns / (quizData.length / 100);     //жеские математические рассчёты

    if (percent > 75) {
        quizContainer.innerHTML = `<h3 class="result">Поздравляем, вы прошли тест!<br>${countTrueAns} правильных ответов из ${quizData.length}</h3>`;
    }
    else {
        quizContainer.innerHTML = `<h3 class="result">Вы провалили тест!!!<br>${countTrueAns} правильных ответов из ${quizData.length}</h3>`;
    }
}

function quizUpdate () {
    diff.innerText = quizData[currentQuiz].difficult;
    quiz.innerText = quizData[currentQuiz].question;
    a.innerText = quizData[currentQuiz].a;
    b.innerText = quizData[currentQuiz].b;
    c.innerText = quizData[currentQuiz].c;
    d.innerText = quizData[currentQuiz].d;
}
quizUpdate();

function startQuiz (event) {
    event.preventDefault();

    quizUpdate();

    const fildText = fildInput.value;
    const currentQuizData = quizData[currentQuiz]
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        quizUpdate();
        if (fildText === currentQuizData.correct) {
            countTrueAns++;
        }
        else {
            countFalseAns++;
        }
    }
    else {
        if (fildText === currentQuizData.correct) {
            countTrueAns++;
        }
        else {
            countFalseAns++;
        }
        checkResult(countTrueAns);
    }

    fildInput.value = "";
}
