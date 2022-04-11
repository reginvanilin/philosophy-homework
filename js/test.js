const question = document.getElementById('test-question');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const testCard = document.getElementById('test-card');

const resultElem = (value) => `
      <div class="test">
        <p class="test-question"><b>Ваш результат:</b></p>
        <p class="test-result">${value}</p>
        <p class="test-description">
            Количество <b>«да»</b> указывает ваш уровень развития в
            абстрактно-символическом мышлении: 
            <br>
            (<b>0-2</b> – низкий, <b>3-5</b> –
            средний, <b>6-8</b> – высокий).
        </p>
      </div>
`;

const questionsArray = [
  'Вам интересно составлять компьютерные программы?',
  'Любите ли вы писать курсовую работу?',
  'Занимались ли бы киберспортом?',
  'Вы любите играть в шахматы?',
  'Вам интересно разбираться явления, которые происходят в природе ?',
  'Предпочитаете ли вы точные науки(математику, физику) ?',
  'Вам было бы интересно начинать изучать один язык программирования ?',
  'Вам легко запоминать формулы, символы, условные обозначения ?'
];

const questions = questionsArray.map((question) => {
  return {
    title: question,
    picked: false
  }
});


let currentStep = 0;

const renderQuestion = () => {
  if (currentStep <= questions.length - 1) question.innerHTML = questions[currentStep].title;
  else {
    testCard.innerHTML = '';
    testCard.insertAdjacentHTML("afterbegin", resultElem(countAnswers()));
  }

}

const onYesButton = () => {
  questions[currentStep].picked = true;
  if (currentStep <= questions.length - 1) currentStep++;
  renderQuestion();
}

const onNoButton = () => {
  if (currentStep <= questions.length - 1) currentStep++;
  renderQuestion();
}

const countAnswers = () => {
  let count = 0;
  questions.forEach((question) => {
    if (question.picked) count++;
  })
  return count;
}

renderQuestion()

yesButton.addEventListener('click', onYesButton);
noButton.addEventListener('click', onNoButton);