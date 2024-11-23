const quizData = [
  {
    question: "CTRL + A का उपयोग किसके लिए होता है?",
    a: "सभी को चुनने के लिए",
    b: "कॉपी करने के लिए",
    c: "पेस्ट करने के लिए",
    d: "फाइल खोलने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + B का उपयोग किसके लिए होता है?",
    a: "पाठ को बोल्ड बनाने के लिए",
    b: "पाठ को कॉपी करने के लिए",
    c: "फाइल को बंद करने के लिए",
    d: "पाठ को इटैलिक बनाने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + C का उपयोग किसके लिए होता है?",
    a: "कॉपी करने के लिए",
    b: "पेस्ट करने के लिए",
    c: "काटने के लिए",
    d: "सभी को चुनने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + D का उपयोग किसके लिए होता है?",
    a: "फॉन्ट बदलने के लिए",
    b: "नया डॉक्यूमेंट खोलने के लिए",
    c: "पेज हटाने के लिए",
    d: "फाइल को सेव करने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + E का उपयोग किसके लिए होता है?",
    a: "पाठ को केंद्र में लाने के लिए",
    b: "फाइल को बंद करने के लिए",
    c: "पाठ को इटैलिक बनाने के लिए",
    d: "कॉपी करने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + F का उपयोग किसके लिए होता है?",
    a: "खोजने के लिए",
    b: "फाइल को बंद करने के लिए",
    c: "पाठ को सेव करने के लिए",
    d: "पाठ को हटाने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + G का उपयोग किसके लिए होता है?",
    a: "विशिष्ट पृष्ठ या लाइन पर जाने के लिए",
    b: "पाठ को कॉपी करने के लिए",
    c: "फाइल खोलने के लिए",
    d: "पाठ को इटैलिक बनाने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + H का उपयोग किसके लिए होता है?",
    a: "पाठ को खोजने और बदलने के लिए",
    b: "पाठ को हाइलाइट करने के लिए",
    c: "फाइल को सेव करने के लिए",
    d: "फाइल खोलने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + I का उपयोग किसके लिए होता है?",
    a: "पाठ को इटैलिक बनाने के लिए",
    b: "पाठ को बोल्ड बनाने के लिए",
    c: "पाठ को केंद्र में लाने के लिए",
    d: "सभी को चुनने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + J का उपयोग किसके लिए होता है?",
    a: "पाठ को जस्टिफाई (समायोजित) करने के लिए",
    b: "फाइल खोलने के लिए",
    c: "कॉपी करने के लिए",
    d: "पाठ को इटैलिक बनाने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + K का उपयोग किसके लिए होता है?",
    a: "हाइपरलिंक जोड़ने के लिए",
    b: "फाइल को सेव करने के लिए",
    c: "पाठ को बोल्ड बनाने के लिए",
    d: "फाइल खोलने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + L का उपयोग किसके लिए होता है?",
    a: "पाठ को बाईं ओर संरेखित करने के लिए",
    b: "पाठ को बोल्ड बनाने के लिए",
    c: "पाठ को इटैलिक बनाने के लिए",
    d: "सभी को चुनने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + M का उपयोग किसके लिए होता है?",
    a: "पैराग्राफ को इंडेंट करने के लिए",
    b: "फाइल को बंद करने के लिए",
    c: "पाठ को हटाने के लिए",
    d: "फाइल को सेव करने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + N का उपयोग किसके लिए होता है?",
    a: "नया डॉक्यूमेंट खोलने के लिए",
    b: "फाइल को सेव करने के लिए",
    c: "फाइल खोलने के लिए",
    d: "पाठ को हटाने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + O का उपयोग किसके लिए होता है?",
    a: "फाइल खोलने के लिए",
    b: "फाइल को सेव करने के लिए",
    c: "फाइल को बंद करने के लिए",
    d: "पाठ को इटैलिक बनाने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + P का उपयोग किसके लिए होता है?",
    a: "प्रिंट कमांड देने के लिए",
    b: "फाइल को बंद करने के लिए",
    c: "फाइल खोलने के लिए",
    d: "फाइल को हटाने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + Q का उपयोग किसके लिए होता है?",
    a: "पैराग्राफ का फॉर्मेट हटाने के लिए",
    b: "फाइल खोलने के लिए",
    c: "कॉपी करने के लिए",
    d: "पाठ को बोल्ड बनाने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + R का उपयोग किसके लिए होता है?",
    a: "पाठ को दाईं ओर संरेखित करने के लिए",
    b: "पाठ को बोल्ड बनाने के लिए",
    c: "पाठ को इटैलिक बनाने के लिए",
    d: "पाठ को केंद्र में लाने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + S का उपयोग किसके लिए होता है?",
    a: "फाइल को सेव करने के लिए",
    b: "फाइल को बंद करने के लिए",
    c: "फाइल खोलने के लिए",
    d: "फाइल को प्रिंट करने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + T का उपयोग किसके लिए होता है?",
    a: "नई टैब खोलने के लिए",
    b: "फाइल को सेव करने के लिए",
    c: "पाठ को बोल्ड बनाने के लिए",
    d: "पाठ को हटाने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + U का उपयोग किसके लिए होता है?",
    a: "पाठ को रेखांकित करने के लिए",
    b: "पाठ को बोल्ड बनाने के लिए",
    c: "पाठ को हटाने के लिए",
    d: "सभी को चुनने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + V का उपयोग किसके लिए होता है?",
    a: "पेस्ट करने के लिए",
    b: "कॉपी करने के लिए",
    c: "काटने के लिए",
    d: "फाइल को खोलने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + W का उपयोग किसके लिए होता है?",
    a: "फाइल को बंद करने के लिए",
    b: "फाइल को सेव करने के लिए",
    c: "फाइल खोलने के लिए",
    d: "फाइल को प्रिंट करने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + X का उपयोग किसके लिए होता है?",
    a: "काटने के लिए",
    b: "कॉपी करने के लिए",
    c: "पेस्ट करने के लिए",
    d: "फाइल को खोलने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + Y का उपयोग किसके लिए होता है?",
    a: "पूर्ववत की गई क्रिया को दोहराने के लिए",
    b: "पाठ को हटाने के लिए",
    c: "फाइल खोलने के लिए",
    d: "फाइल को बंद करने के लिए",
    correct: "a",
  },
  {
    question: "CTRL + Z का उपयोग किसके लिए होता है?",
    a: "पूर्ववत करने के लिए",
    b: "पाठ को कॉपी करने के लिए",
    c: "फाइल खोलने के लिए",
    d: "फाइल को प्रिंट करने के लिए",
    correct: "a",
  },
];

// DOM Elements
const loginForm = document.getElementById('loginForm');
const quizSection = document.getElementById('quizSection');
const marksheet = document.getElementById('marksheet');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const studentName = document.getElementById('studentName');
const studentEmail = document.getElementById('studentEmail');
const learnerCode = document.getElementById('learnerCode');
const timerElement = document.getElementById('timer');
const resetButton = document.getElementById('resetButton');
const marksheetName = document.getElementById('marksheetName');
const marksheetEmail = document.getElementById('marksheetEmail');
const marksheetCode = document.getElementById('marksheetCode');
const marksheetScore = document.getElementById('marksheetScore');
const studentTableBody = document.getElementById('studentTableBody');

let currentQuiz = 0;
let score = 0;
let shuffledQuizData = [];
let timeLeft = 15;
let timerInterval;

// Shuffle function
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Handle Login and Store Data
function handleLogin() {
  const name = studentName.value.trim();
  const email = studentEmail.value.trim();
  const learnerCodeValue = learnerCode.value.trim();

  if (name && email && learnerCodeValue) {
    // Store user data in sessionStorage
    sessionStorage.setItem('studentName', name);
    sessionStorage.setItem('studentEmail', email);
    sessionStorage.setItem('learnerCode', learnerCodeValue);

    // Hide login and show quiz section
    loginForm.style.display = 'none';
    quizSection.style.display = 'block';

    // Set marksheet fields
    marksheetName.value = name;
    marksheetEmail.value = email;
    marksheetCode.value = learnerCodeValue;

    // Shuffle quiz data and load quiz
    shuffledQuizData = shuffle([...quizData]);
    loadQuiz();
  } else {
    alert("कृपया सभी फ़ील्ड्स भरें।");
  }
}

// Load Quiz Data
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = shuffledQuizData[currentQuiz];
  questionEl.innerText = `Q${currentQuiz + 1}: ${currentQuizData.question}`;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  timeLeft = 15;
  updateTimer();
  startTimer();
}

// Deselect Answers
function deselectAnswers() {
  answerEls.forEach(answerEl => (answerEl.checked = false));
}

// Get Selected Answer
function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Start Timer
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      currentQuiz++;
      if (currentQuiz < shuffledQuizData.length) {
        loadQuiz();
      } else {
        showMarksheet();
      }
    }
  }, 1000);
}

// Update Timer
function updateTimer() {
  timerElement.innerText = `Time: ${timeLeft}s`;
  if (timeLeft <= 5) {
    timerElement.classList.add('warning');
  } else {
    timerElement.classList.remove('warning');
  }
}

// Submit Answer
submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === shuffledQuizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < shuffledQuizData.length) {
      loadQuiz();
    } else {
      showMarksheet();
    }
  } else {
    alert("कृपया उत्तर चुनें।");
  }
});

// Show Marksheet
function showMarksheet() {
  clearInterval(timerInterval);
  quizSection.style.display = 'none';
  marksheet.style.display = 'block';

  // Set score in marksheet
  marksheetScore.value = `आपने ${score}/${shuffledQuizData.length} प्रश्न सही उत्तर दिए।`;

  // Add record to student records table
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${sessionStorage.getItem('studentName')}</td>
    <td>${sessionStorage.getItem('studentEmail')}</td>
    <td>${sessionStorage.getItem('learnerCode')}</td>
    <td>${score}</td>
  `;
  studentTableBody.appendChild(row);
}

// Reset Quiz
function resetQuiz() {
  loginForm.style.display = 'block';
  marksheet.style.display = 'none';
  studentName.value = '';
  studentEmail.value = '';
  learnerCode.value = '';
  score = 0;
  currentQuiz = 0;
  clearInterval(timerInterval);
  timerElement.innerText = 'Time: 15s';
}

// Event Listeners
document.getElementById('loginButton').addEventListener('click', handleLogin);
resetButton.addEventListener('click', resetQuiz);