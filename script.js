const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The darkest part of the shadow is ____.',
    answers: [
      { text: 'Umbra', correct: true },
      { text: 'Penumbra', correct: false },
      { text: 'Hyperumbra', correct: false },
      { text: 'None of these', correct: false },
    ]
  },
  {
    question: 'What does DNA stands for?',
    answers: [
      { text: 'Ribonucleic acid', correct: false },
      { text: 'Deoxyribonulic acid', correct: false },
      { text: 'Folic acid', correct: false },
      { text: 'None of these', correct: true },
    ]
  },
  {
    question: 'The concept of gravity was discovered by which famous physicist?',
    answers: [
      { text: 'Galileo Galilei', correct: false },
      { text: 'Robert Boyle', correct: false },
      { text: 'Isaac Newton', correct: true },
      { text: 'Leonardo da Vinci', correct: false },
    ]
  },
  {
    question: 'What is the function of the blood cell?',
    answers: [
      { text: 'Carry messages all over the body.', correct: false },
      { text: 'To control the size of the openings.', correct: false },
      { text: 'To carry oxygen around the body.', correct: true },
      { text: 'None of these', correct: false },
    ]
  },
  {
    question: 'You see your reflection in a mirror because?',
    answers: [
      { text: 'light is absorbed', correct: false },
      { text: 'light is diffracted', correct: false },
      { text: 'light is reflected', correct: true },
      { text: 'light is refracted', correct: false },
    ]
  },
  {
    question: 'Which of these have a positive charge and are found in the nucleus of an atom?',
    answers: [
      { text: 'Nuetrons', correct: false },
      { text: 'Protons', correct: true },
      { text: 'Electrons', correct: false },
      { text: 'Elements', correct: false },
    ]
  },
  {
    question: 'One complete revolution of Earth around the sun is equal to approximately one ___',
    answers: [
      { text: 'Year', correct: true },
      { text: 'Month', correct: false },
      { text: 'Week', correct: false },
      { text: 'Day', correct: false },
    ]
  },
  {
    question: 'Which one of these isnt an organ in the human body?',
    answers: [
      { text: 'Heart', correct: false },
      { text: 'Kidney', correct: false },
      { text: 'Brain', correct: false },
      { text: 'Spatula', correct: true },
    ]
  },
  {
    question: 'How many bones are there in an adult human body?',
    answers: [
      { text: '36', correct: false },
      { text: '98', correct: false },
      { text: '206', correct: true },
      { text: '872', correct: false },
    ]
  },
  {
    question: 'What do Venus and Mercury have in common?',
    answers: [
      { text: 'Their atmospheres are identical', correct: false },
      { text: 'They dont have moons', correct: true },
      { text: 'They have nothing in common', correct: false },
      { text: 'Their surface temperatures are exactly the same', correct: false },
    ]
  },
]