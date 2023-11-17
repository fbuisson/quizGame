const buttonPlay = document.querySelector(".btn-play")
const buttonsDifficulty = document.getElementsByClassName("btn-circle")
let difficulty = "facile";
let questions = []

const removeClass = (items, classTag) => {
    for( let i = 0 ; i < items.length ; i++ ){
        items[i].classList.remove(classTag)
    }
}

const getQuestions = (level) => {
    return fetch('https://quiz-back-lilac.vercel.app/getQuestions')
        .then(response => response.json())
        .then(data => {
            questions = data.questions[level];
            return questions;
        });
}
function saveDifficulty() {
    return fetch('https://quiz-back-lilac.vercel.app/saveDifficulty', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: difficulty})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la sauvegarde de la difficulté');
        }
        return response.text();
    });
}


function saveQuestions(questions) {
    return fetch('https://quiz-back-lilac.vercel.app/saveQuestions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(questions)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la sauvegarde des questions');
        }
        return response.text();
    });
    
}


buttonsDifficulty[0].classList.add("active")

buttonPlay.addEventListener("click", async () => {
    try {
        buttonPlay.classList.add("active")
        await getQuestions(difficulty);
        await saveQuestions(questions);
        await saveDifficulty(difficulty);
        window.location.href = '../quiz/quiz.html';
    } catch (error) {
        console.error('Erreur:', error);
    }
});


for( let i = 0 ; i < buttonsDifficulty.length ; i++ ){
    buttonsDifficulty[i].addEventListener("click", () => {
        removeClass(buttonsDifficulty, "active")
        buttonsDifficulty[i].classList.add("active")
        difficulty = i === 0 ? "facile" : i === 1 ? "moyen" : "difficile"
    })
}