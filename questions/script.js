const jsonDatatest = {
    "questions": {
        "facile": [
            {
                "category": "histoire",
                "question": "Quel événement historique a marqué le début de la Première Guerre mondiale en 1914?",
                "options": ["L'assassinat de l'archiduc François-Ferdinand", "La bataille de Waterloo", "La Révolution française", "La Guerre de Sécession"],
                "answer": "L'assassinat de l'archiduc François-Ferdinand"
            },]
    }
};

const jsonData =
{
    "questions": {
        "facile": [
            {
                "category": "histoire",
                "question": "Quel événement historique a marqué le début de la Première Guerre mondiale en 1914?",
                "options": ["L'assassinat de l'archiduc François-Ferdinand", "La bataille de Waterloo", "La Révolution française", "La Guerre de Sécession"],
                "answer": "L'assassinat de l'archiduc François-Ferdinand"
            },
            {
                "category": "histoire",
                "question": "Quel événement a marqué la fin de la Seconde Guerre mondiale en Europe?",
                "options": ["La bataille de Stalingrad", "Le Débarquement de Normandie", "La capitulation du Japon", "La capitulation de l'Allemagne"],
                "answer": "La capitulation de l'Allemagne"
            },
            {

                "category": "histoire",
                "question": "Quelle civilisation a construit les pyramides de Gizeh?",
                "options": ["Civilisation romaine", "Civilisation grecque", "Civilisation égyptienne", "Civilisation mésopotamienne"],
                "answer": "Civilisation égyptienne"
            },
            {

                "category": "cinema",
                "question": "Quel film a remporté l'Oscar du meilleur film en 1994?",
                "options": ["Forrest Gump", "Titanic", "Braveheart", "Le Silence des agneaux"],
                "answer": "Forrest Gump"
            },
            {

                "category": "cinema",
                "question": "Quel film a remporté l'Oscar du meilleur film en 2020?",
                "options": ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"],
                "answer": "Parasite"
            },
            {

                "category": "cinema",
                "question": "A quel célèbre film correspond cette musique?",
                "options": ["Titanic", "E.T", "Inception", "Fight Club"],
                "answer": "Titanic"
            },
            {
                "category": "sport",
                "question": "Quel joueur de football a remporté le Ballon d'Or en 2021?",
                "options": ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Mohamed Salah"],
                "answer": "Lionel Messi"
            },
            {

                "category": "sport",
                "question": "Quel joueur de tennis a remporté le plus de titres du Grand Chelem en simple chez les femmes?",
                "options": ["Serena Williams", "Maria Sharapova", "Venus Williams", "Steffi Graf"],
                "answer": "Serena Williams"
            },
            {
                "category": "sport",
                "question": "Quelle équipe a remporté la Coupe du Monde de la FIFA en 2014?",
                "options": ["Allemagne", "Brésil", "Argentine", "Espagne"],
                "answer": "Allemagne"
            },
            {
                "category": "geographie",
                "question": "Quelle est la capitale de la France?",
                "options": ["Berlin", "Madrid", "Paris", "Londres"],
                "answer": "Paris"
            },
            {
                "category": "geographie",
                "question": "A quel pays correspond ce drapeau?",
                "options": ["Espagne", "Algérie", "Russie", "Canada"],
                "answer": "Canada"
            },
            {
                "category": "geographie",
                "question": "Quelle est la plus grande île du monde?",
                "options": ["Groenland", "Java", "Australie", "Bornéo"],
                "answer": "Groenland"
            },
            {
                "category": "nature",
                "question": "Quel animal est souvent associé à la sagesse dans de nombreuses cultures?",
                "options": ["Hibou", "Dauphin", "Serpent", "Lion"],
                "answer": "Hibou"
            },
            {
                "category": "nature",
                "question": "Quel est le plus grand océan du monde?",
                "options": ["Océan Atlantique", "Océan Indien", "Océan Pacifique", "Océan Arctique"],
                "answer": "Océan Pacifique"
            },
            {
                "category": "nature",
                "question": "Quel est le plus grand serpent python?",
                "options": ["Python réticulé", "Python royal", "Python birman", "Python molure"],
                "answer": "Python réticulé"
            }

        ]
    }
}

const transformedData = {};
const difficultyLevel = Object.keys(jsonData.questions)[0]; // Récupérer le niveau de difficulté (facile, moyen, difficile, etc.)

// Créer un objet pour chaque question dans le niveau de difficulté
jsonData.questions[difficultyLevel].forEach(question => {
    transformedData[difficultyLevel] = {
        category: question.category,
        question: question.question,
        options: question.options,
        answer: question.answer
    };
});

console.log(transformedData);





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



