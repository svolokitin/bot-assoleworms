import { TFquizData } from '../quizes_data.js';

const diff = document.getElementById('diff');
const quiz = document.getElementById('question');
const a = document.getElementById('a_text');
const b = document.getElementById('b_text');
const c = document.getElementById('c_text');
const d = document.getElementById('d_text');
const form = document.getElementById('form-submit');
const fildInput = document.getElementById('fild');
const quizContainer = document.getElementById('quizContainer');
const menuBody = document.querySelector('.menu');

let currentQuiz = 0;
let countTrueAns = 0;
let countFalseAns = 0;

let quizData = []
quizData = TFquizData;

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

document.addEventListener('click', menu);

function menu(event) {
    if (event.target.closest('.menu__button')) {
        menuBody.classList.toggle('_active');
    }
    if (!event.target.closest('.menu')) {
        menuBody.classList.remove('_active');
    }
}

form.addEventListener('submit', startEvent);


function startEvent (event) {
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