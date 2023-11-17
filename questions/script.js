let questionsIndex = 0;

let questions = [{
    difficutly: "hard",
    category: "sport",
    title: "Quel sport est également appelé le noble art?",
    answer: ["Le polo", "La boxe anglaise", "le tennis", "réponse D"]
}, {
    difficutly: "hard",
    category: "nature",
    title: "Le pyton sait-il vraiment programmer?",
    answer: ["oui", "non", "peut-être", "haha trop marrant lol xd"]
}]

const questionDisplayer = function () {

    const categoryContainer = document.querySelector('div.categoryContainer');

    document.querySelector('span.difficultySpan').textContent = questions[questionsIndex].difficutly == "hard" ? "Difficile" : questions[questionsIndex].difficutly == "medium" ? "Moyen" : "Facile";
    document.querySelector('span.questionsSpan').textContent = toString(questionsIndex);
    categoryContainer.classList.add(questions[questionsIndex].category)

    document.querySelector('h3').textContent = questions[questionsIndex].title;

    let indexQuestionDisplay = 1;
    for (let i = 0; i < questions[questionsIndex].answer.length; i++) {
        document.querySelector('.answer' + indexQuestionDisplay).textContent = questions[questionsIndex].answer[indexQuestionDisplay - 1]
        indexQuestionDisplay++;
    }
}

questionDisplayer();



