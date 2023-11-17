let questions = [];
let questionNumber = 1
let answered = false
const btnAnswers = document.querySelectorAll(".answerContainer .btn")
const questionTitle = document.querySelector(".questionContainer h3")
document.querySelector('.questionsSpan').textContent = questionNumber

const removeClass = (items, classTag) => {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove(classTag)
    }
}

const disableButtons = () => {
    for (let i = 0; i < btnAnswers.length; i++) {
        btnAnswers[i].disabled = true
    }
}

fetch('http://localhost:3000/getSavedQuestions') // Assurez-vous que l'URL correspond à celle de votre serveur Node.js
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
        for (let i = 0; i < btnAnswers.length; i++) {
            btnAnswers[i].innerText = questions[questionNumber - 1].options[i]
        }
        console.log(questions);
    })
    .catch(error => console.error("Erreur lors de la récupération des questions:", error));

fetch('http://localhost:3000/getSavedDifficulty') // Assurez-vous que l'URL correspond à celle de votre serveur Node.js
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector(".difficultySpan").textContent = data
    })
    .catch(error => console.error("Erreur lors de la récupération des questions:", error));


for (let i = 0; i < btnAnswers.length; i++) {
    btnAnswers[i].addEventListener("click", () => {
        if (!answered) {
            removeClass(btnAnswers, "active")
            btnAnswers[i].classList.add("active")
            answered = true
            // 
            if (btnAnswers[i] == truc.answer) {
                btnAnswers[i].classList.add("btn-green")
                score++;
            } else {

                btnAnswers[i].classList.add("btn-red")

                for (let i = 0; i < btnAnswers.length; i++) {
                    if (btnAnswers[i] == truc.answer) {
                        btnAnswers[i].classList.add("green")
                    }
                }
            }

            // 
        }
        setTimeout(() => {

        }, 3000)
    });
}
