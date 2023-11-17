const buttonPlay = document.querySelector(".btn-play")
const buttonsDifficulty = document.getElementsByClassName("btn-circle")
let levelSelected = "facile";

const removeClass = (items, classTag) => {
    for( let i = 0 ; i < items.length ; i++ ){
        items[i].classList.remove(classTag)
    }
}

const getQuestions = (level) => {
    fetch('http://localhost:3000/getQuestions') // Assurez-vous que l'URL correspond à celle de votre serveur Node.js
        .then(response => response.json())
        .then(data => {
            console.log(level);
            console.log(data.questions[level]); // Traitez les données ici
            // Par exemple, affichez les questions selon le niveau sélectionné
        })
        .catch(error => console.error("Erreur lors de la récupération des questions:", error));
}

buttonsDifficulty[0].classList.add("active")

buttonPlay.addEventListener("click", () => {
    buttonPlay.classList.add("active")
    getQuestions(levelSelected)
})

for( let i = 0 ; i < buttonsDifficulty.length ; i++ ){
    buttonsDifficulty[i].addEventListener("click", () => {
        removeClass(buttonsDifficulty, "active")
        buttonsDifficulty[i].classList.add("active")
        levelSelected = i === 0 ? "facile" : i === 1 ? "moyen" : "difficile"
    })
}