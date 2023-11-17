class Question {
    constructor(index) {
        this.index = index;
    }
    myFunction() {

    }
}

const questions = [
    {
        "type": "ecris",
        "difficulty": "facile",
        "category": "histoire",
        "question": "Quel événement historique a marqué le début de la Première Guerre mondiale en 1914?",
        "options": ["L'assassinat de l'archiduc François-Ferdinand", "La bataille de Waterloo", "La Révolution française", "La Guerre de Sécession"],
        "answer": "L'assassinat de l'archiduc François-Ferdinand"
    },
    {
        "type": "image",
        "difficulty": "moyen",
        "category": "histoire",
        "question": "Quel dirigeant politique a dirigé l'Union soviétique pendant la majeure partie de la Seconde Guerre mondiale?",
        "options": ["Joseph Staline", "Vladimir Lénine", "Nikita Khrouchtchev", "Leon Trotsky"],
        "answer": "Joseph Staline"
    },
    {
        "type": "audio",
        "difficulty": "difficile",
        "category": "histoire",
        "question": "Quelle bataille a été un tournant décisif dans la Guerre du Pacifique pendant la Seconde Guerre mondiale, marquant la défaite japonaise?",
        "options": ["Bataille de Midway", "Bataille d'Iwo Jima", "Bataille de Guadalcanal", "Bataille d'Okinawa"],
        "answer": "Bataille de Midway"
    },]

new Question = [
    questions[0].type,
    questions[0].category,
    questions[0].question,
    questions[0].options[0],
    questions[0].options[1],
    questions[0].options[2],
    questions[0].options[3],
    questions[0].answer,
]