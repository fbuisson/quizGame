const buttonPlay = document.querySelector(".btn-play")
const buttonsDifficulty = document.getElementsByClassName("btn-circle")
let levelSelected = "facile";
let questions = []

const removeClass = (items, classTag) => {
    for( let i = 0 ; i < items.length ; i++ ){
        items[i].classList.remove(classTag)
    }
}

const getQuestions = (level) => {
    fetch('http://localhost:3000/getQuestions') // Assurez-vous que l'URL correspond à celle de votre serveur Node.js
        .then(response => response.json())
        .then(data => {
            questions = data.questions[level]
        })
        .catch(error => console.error("Erreur lors de la récupération des questions:", error));
}

function saveQuestions(questions) {
    fetch('http://localhost:3000/saveQuestions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(questions)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Erreur:', error);
    });
}

buttonsDifficulty[0].classList.add("active")

buttonPlay.addEventListener("click", () => {
    buttonPlay.classList.add("active")
    getQuestions(levelSelected)
    saveQuestions(questions)
})

for( let i = 0 ; i < buttonsDifficulty.length ; i++ ){
    buttonsDifficulty[i].addEventListener("click", () => {
        removeClass(buttonsDifficulty, "active")
        buttonsDifficulty[i].classList.add("active")
        levelSelected = i === 0 ? "facile" : i === 1 ? "moyen" : "difficile"
    })
}