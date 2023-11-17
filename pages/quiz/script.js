const TIMER_DURATION = 10000; // 30 secondes

let questions = [];
let questionNumber = 1
let answered = false
let answer = ""
let score = 0;

const btnAnswers = document.querySelectorAll(".answerContainer .btn")
const questionTitle = document.querySelector(".questionContainer h3")

document.querySelector('.questionsSpan').textContent = questionNumber

function compareStrings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

const removeClass = (items, classTag) => {
    for( let i = 0 ; i < items.length ; i++ ){
        items[i].classList.remove(classTag)
    }
}

const disableButtons = () => {
    for( let i = 0 ; i < btnAnswers.length ; i++ ){
        btnAnswers[i].disabled = true
    }
}

function nextQuestion() {
    if (questionNumber < questions.length) {
        questionNumber++;
        document.querySelector('.questionsSpan').textContent = questionNumber;
        questionTitle.textContent = questions[questionNumber - 1].question;
        
       
        
        
        for (let i = 0; i < btnAnswers.length; i++) {
            btnAnswers[i].innerText = questions[questionNumber - 1].options[i];
            btnAnswers[i].classList.remove("btn-red", "btn-green", "active");
            btnAnswers[i].disabled = false;
        }

        answered = false;
        startTimer();
    } else {
        
        console.log("Quiz terminé");
        window.location.href = '../end/end.html';
    }
    document.querySelector('.categoryContainer').classList.add(questions[questionNumber - 1].category)
}

function startTimer() {
    setTimeout(() => {
        document.querySelector('.categoryContainer').classList.remove(questions[questionNumber - 1].category);
        nextQuestion()
    }, TIMER_DURATION);
}


startTimer()


function showAnswer() {
    for( let i = 0 ; i < btnAnswers.length ; i++ ){
        if( compareStrings(btnAnswers[i].innerText, questions[questionNumber-1].answer) ) btnAnswers[i].classList.add("btn-green")
    }
}

 fetch('https://quiz-back-lilac.vercel.app/getSavedQuestions') // Assurez-vous que l'URL correspond à celle de votre serveur Node.js
.then(response => response.json())
.then(data => {
    questions = data
    for (let i = questions.length - 1; i > 0; i--) {
        // Générer un index aléatoire
        const j = Math.floor(Math.random() * (i + 1));
        // Échanger l'élément à l'index i avec l'élément à l'index j
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    questionTitle.textContent = questions[questionNumber - 1].question
    for ( let i = 0; i < btnAnswers.length; i++) {
        btnAnswers[i].innerText = questions[questionNumber - 1].options[i]
    }
    
    document.querySelector('.categoryContainer').classList.add(questions[questionNumber - 1].category)
})
.catch(error => console.error("Erreur lors de la récupération des questions:", error));

fetch('https://quiz-back-lilac.vercel.app/getSavedDifficulty') // Assurez-vous que l'URL correspond à celle de votre serveur Node.js
.then(response => response.json())
.then(data => {
    console.log(data);
    document.querySelector(".difficultySpan").textContent = data.data
})
.catch(error => console.error("Erreur lors de la récupération des questions:", error));


for( let i = 0 ; i < btnAnswers.length ; i++ ){
    btnAnswers[i].addEventListener("click", () => {
        if( !answered ) {
            removeClass(btnAnswers, "active")
            btnAnswers[i].classList.add("active")
            answer = btnAnswers[i].innerText
            console.log(questions[questionNumber-1].answer);
            answered = true
            if ( compareStrings(btnAnswers[i].innerText, questions[questionNumber-1].answer) ) {
                btnAnswers[i].classList.add("btn-green")
                score ++;
            } else { 
                showAnswer()
                btnAnswers[i].classList.add("btn-red") 
            }
        }
    });
}
